import React, { useState, useEffect } from 'react'
import './RevisedLandingPage.css'

import mainImg from '../../assets/rectangle.png'
import customDesign from './assets/customDesign.png'
import tailoringFitting from './assets/tailoringFitting.png'
import alterationsFinishing from './assets/alterationsFinishing.png'
import fabricStyle from './assets/fabricStyle.png'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function RevisedLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas. Porro adipisci ipsum nisi quam soluta quos voluptatum facere",
      title: "Business Man"
    },
    {
      name: "Jane Smith",
      rating: 4.5,
      message: "Exceptional craftsmanship and attention to detail. The custom suit fit perfectly and exceeded all my expectations. Highly recommend!",
      title: "Executive"
    },
    {
      name: "Michael Chen",
      rating: 5,
      message: "Professional service from start to finish. The consultation process was thorough and the final product was absolutely stunning.",
      title: "Entrepreneur"
    },
    {
      name: "Sarah Williams",
      rating: 4.5,
      message: "Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.",
      title: "Fashion Designer"
    },
    {
      name: "Sarah Williams",
      rating: 4.5,
      message: "Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.",
      title: "Fashion Designer"
    },
    {
      name: "Sarah Williams",
      rating: 4.5,
      message: "Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.Beautiful work and incredible precision. The alterations were done perfectly and the finishing touches were impeccable.",
      title: "Fashion Designer"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const getTestimonialPosition = (index) => {
    const diff = index - currentTestimonial;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(testimonials.length - 1)) return 'right';
    if (diff === -1 || diff === testimonials.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className='RevisedLandingPage'>
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navBrand" onClick={() => scrollToSection('home')}>
          De Rigueur
        </div>
        <ul className="navLinks">
          <li><a className="navLink" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a className="navLink" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a className="navLink" onClick={() => scrollToSection('collection')}>Collection</a></li>
          <li><a className="navLink" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
          <li><a className="navLink" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <div className="navUserIcon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      <section className="home-page" id="home">
        <div className="homeMainImageCon">
          <img src={mainImg} alt="" className='homeMainImage'/>
        </div>

        <div className="homePageText home-info">
            <h2 className="animated-text"><span></span></h2>
            <p>From fabric to silhouette, every detail tells a story. Explore the artistry behind each piece designed to reflect who you are — bold, beautiful, and unapologetically unique.</p>

            <button className="home-btn" onClick={() => navigate(`/`)}>EXPLORE NOW</button>
        </div>
      </section>



      <section className="services" id="services">
        <div className="servicesTitleContainer">
          <p className="servicesTitle">Our Services</p>

          <p className='servicesMainParagraph'>Our formalwear services combine custom design, expert tailoring, precise alterations, and professional fabric consultation to create garments that reflect your personal style and occasion. From initial sketches to detailed fittings, every piece is carefully crafted to ensure exceptional fit, comfort, and structure. With refined finishing and thoughtful material selection, each garment delivers a timeless, polished look with confident elegance.</p>
        </div>


        <div className="servicesContainer">
          {/* Custom Formal Design */}
          <div className="customDesign service">
            <div className="serviceImg">
              <img src={customDesign} alt="" />
            </div>

            <div className="serviceText">
              <p className="serviceTextTitle">Custom Formal Design</p>
              <p>Bespoke formalwear created from initial concept and detailed sketches, designed to reflect your personal style, occasion, and precise measurements with timeless craftsmanship.</p>
            </div>
          </div>


          {/* Tailoring & Fittings */}
          <div className="tailoringFitting service">
            <div className="serviceText">
              <p className="serviceTextTitle">Tailoring & Fittings</p>
              <p>Expert measuring and fitting sessions ensure proper structure, balance, and comfort, refining every garment to achieve a clean silhouette and confident, elegant wear.</p>
            </div>

            <div className="serviceImg">
              <img src={tailoringFitting} alt="" />
            </div>
          </div>


          {/* Alterations & Finishing */}
          <div className="alterationsFinishing service">
            <div className="serviceImg">
              <img src={alterationsFinishing} alt="" />
            </div>

            <div className="serviceText">
              <p className="serviceTextTitle">Alterations & Finishing</p>
              <p>Detailed revisions and fine finishing work perfect the garment's fit, proportions, and presentation, ensuring a polished appearance through precise stitching, pressing, and final adjustments.</p>
            </div>
          </div>


          {/* Fabric & Style Consultation */}
          <div className="fabricStyle service">
            <div className="serviceText">
              <p className="serviceTextTitle">Fabric & Style Consultation</p>
              <p>Professional guidance in selecting fabrics, colors, and design details, helping clients make informed choices that complement the occasion, body form, and overall formal aesthetic.</p>
            </div>

            <div className="serviceImg">
              <img src={fabricStyle} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section className="collection" id="collection">
        <div className="collectionTitleContainer">
          <p className="collectionTitle">Collection</p>
        </div>


        <div className="collectionMainContainer">

          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>

          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>

          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>

          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>
          <div className="attireMainContainer">
            <div className="attireMainImageContainer">
              <img src={fabricStyle} alt="" />
            </div>

            <Stack spacing={1}>
              <Rating 
                name="half-rating-read" 
                defaultValue={3} 
                precision={0.5} 
                readOnly 
                sx={{
                  '& .MuiRating-icon': {
                    fontSize: '1.5rem',
                    color: '#ffb52dff',
                  }
                }}
              />
            </Stack>
                
            <div className="attireNameContainer">
              De rigueur
            </div>

            <div className="attirePrice">₱ 10,000.00</div>
          </div>

        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="servicesTitleContainer">
          <p className="servicesTitle">Testimonials</p>
        </div>

        <div className="testimonialMainContainer">
          <div className="testimonialCarousel">
            {testimonials.map((testimonial, index) => {
              const position = getTestimonialPosition(index);
              return (
                <div
                  key={index}
                  className={`testimonial ${position}`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="testimonialClientRating">
                    <Stack spacing={1}>
                      <Rating 
                        name="half-rating-read" 
                        defaultValue={testimonial.rating} 
                        precision={0.5} 
                        readOnly 
                        sx={{
                          '& .MuiRating-icon': {
                            fontSize: '1.5rem',
                            color: '#ffb52dff',
                          }
                        }}
                      />
                    </Stack>
                  </div>

                  <div className="testimonialClientName">
                    <p className='tesName'>{testimonial.name}</p>
                  </div>

                  <div className="testimonialClientMessage">
                    <p className='tesMessage'>{testimonial.message}</p>
                  </div>

                  <div className="testimonialClientTitle">
                    <p className="tesTitle">{testimonial.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="testimonialDots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>



      <section className="contact" id="contact">
        <div className="contactTitleContainer">
          <p className="contactTitle">Get In Touch</p>
          <p className="contactSubtitle">We'd love to hear from you. Reach out to discuss your custom formalwear needs.</p>
        </div>

        <div className="contactMainContainer">
          <div className="contactInfoSection">
            <div className="contactInfoItem">
              <p className="contactInfoLabel">Email</p>
              <p className="contactInfoValue">contact@derigueur.com</p>
            </div>

            <div className="contactInfoItem">
              <p className="contactInfoLabel">Phone</p>
              <p className="contactInfoValue">+63 912 345 6789</p>
            </div>

            <div className="contactInfoItem">
              <p className="contactInfoLabel">Address</p>
              <p className="contactInfoValue">123 Fashion Street, Manila, Philippines</p>
            </div>

            <div className="contactInfoItem">
              <p className="contactInfoLabel">Business Hours</p>
              <p className="contactInfoValue">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="contactInfoValue">Sunday: By Appointment</p>
            </div>

            <div className="socialMediaSection">
              <p className="socialMediaLabel">Follow Us</p>
              <div className="socialMediaIcons">
                <a href="#" className="socialIcon" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="socialIcon" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="socialIcon" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="socialIcon" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contactFormSection">
            <div className="contactForm">
              <div className="formGroup">
                <label htmlFor="name" className="formLabel">Name</label>
                <input type="text" id="name" className="formInput" placeholder="Your full name" />
              </div>

              <div className="formGroup">
                <label htmlFor="email" className="formLabel">Email</label>
                <input type="email" id="email" className="formInput" placeholder="your.email@example.com" />
              </div>

              <div className="formGroup">
                <label htmlFor="message" className="formLabel">Message</label>
                <textarea id="message" className="formTextarea" placeholder="Tell us about your formalwear needs..." rows="8"></textarea>
              </div>

              <button className="contactSubmitBtn">SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </section>



      <footer className="footer">
        <div className="footerMainContainer">
          <div className="footerSection footerBrand">
            <h3 className="footerBrandName">De Rigueur</h3>
            <p className="footerBrandDescription">Crafting timeless elegance through bespoke formalwear. Every stitch tells a story of precision, style, and uncompromising quality.</p>
          </div>

          <div className="footerSection footerLinks">
            <h4 className="footerSectionTitle">Quick Links</h4>
            <ul className="footerLinksList">
              <li><a href="#services" className="footerLink">Services</a></li>
              <li><a href="#collection" className="footerLink">Collection</a></li>
              <li><a href="#testimonials" className="footerLink">Testimonials</a></li>
              <li><a href="#contact" className="footerLink">Contact</a></li>
            </ul>
          </div>

          <div className="footerSection footerServices">
            <h4 className="footerSectionTitle">Services</h4>
            <ul className="footerLinksList">
              <li><a href="#" className="footerLink">Custom Design</a></li>
              <li><a href="#" className="footerLink">Tailoring & Fittings</a></li>
              <li><a href="#" className="footerLink">Alterations</a></li>
              <li><a href="#" className="footerLink">Consultations</a></li>
            </ul>
          </div>

          <div className="footerSection footerContact">
            <h4 className="footerSectionTitle">Contact Info</h4>
            <ul className="footerContactList">
              <li className="footerContactItem">
                <span className="footerContactLabel">Email:</span>
                <span className="footerContactValue">contact@derigueur.com</span>
              </li>
              <li className="footerContactItem">
                <span className="footerContactLabel">Phone:</span>
                <span className="footerContactValue">+63 912 345 6789</span>
              </li>
              <li className="footerContactItem">
                <span className="footerContactLabel">Address:</span>
                <span className="footerContactValue">123 Fashion Street, Manila</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerBottomContainer">
            <p className="footerCopyright">© 2025 De Rigueur. All rights reserved.</p>
            
            <div className="footerSocialMedia">
              <a href="#" className="footerSocialIcon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footerSocialIcon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footerSocialIcon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footerSocialIcon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="footerLegalLinks">
              <a href="#" className="footerLegalLink">Privacy Policy</a>
              <span className="footerLegalSeparator">|</span>
              <a href="#" className="footerLegalLink">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>



    </div>
  )
}

export default RevisedLandingPage