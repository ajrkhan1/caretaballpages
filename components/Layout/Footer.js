import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Footer() { 
  return (
    <>
    <footer class="footer-area">
        <div class="footer-shape"></div>
        <div class="footer-widget">
            <div class="container">
                <div class="footer-widget-wrap pt-50 pb-0">
                    <div class="row g-4">
                        <div class="col-lg-5">
                            <div class="footer-widget-box about-us">
                                <a href="#" class="footer-logo">
                                    <img src="/assets/img/logo/footerlogo1.png" alt=""/>
                                </a>
                                <p class="mb-4">
                                    CareTAB.ai is built and managed by a team of experienced doctors and nurses. Using all-round healthcare technology, we deliver reliable, efficient & high-quality medical care, right where you are.
                                </p>
                                <div class="footer-newsletter">
                                    <h6>Subscribe Our Newsletter</h6>
                                    <div class="newsletter-form">
                                        <form action="#">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-envelopes"></i>
                                                    <input type="email" class="form-control" placeholder="Your Email"/>
                                                    <button class="theme-btn" type="submit">
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-5 col-lg-2">
                            <div class="footer-widget-box list">
                                <h4 class="footer-widget-title">Company</h4>
                                <ul class="footer-list">
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>About Us</a></li>
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>Update News</a></li>
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>Testimonials</a>
                                    </li>
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>Contact Us</a></li>
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>Terms Of Service</a></li>
                                    <li><a href="#"><i class="far fa-angle-double-right"></i>Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-7 col-lg-2">
                            <div class="footer-widget-box list">
                                <h4 class="footer-widget-title">Services</h4>
                                <ul class="footer-list">
                                    <li><a href="/service/doctor-consultation-at-home"><i class="far fa-angle-double-right"></i>Doctor Consultations</a></li>
                                    <li><a href="/service/nursing-care-at-home"><i class="far fa-angle-double-right"></i>Nursing Care</a></li>
                                    <li><a href="/service/icu-setup-at-home"><i class="far fa-angle-double-right"></i>ICU Setup at Home</a></li>
                                    <li><a href="/service/physiotherapy-at-home"><i class="far fa-angle-double-right"></i>Physiotherapy</a></li>
                                    <li><a href="/service/diagnostics"><i class="far fa-angle-double-right"></i>Diagnostics</a></li>
                                    <li><a href="/service/medical-equipment-at-home"><i class="far fa-angle-double-right"></i>Medical Equipment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="footer-widget-box">
                                <h4 class="footer-widget-title">Get In Touch</h4>
                                <ul class="footer-contact">
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-location-dot"></i>
                                        </div>
                                        <div class="content">
                                            <h6>Delhi Office:</h6>
                                            <p>Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka, New Delhi</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-location-dot"></i>
                                        </div>
                                        <div class="content">
                                            <h6>Gurugram Office:</h6>
                                            <p>Plot No. 231, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-phone"></i>
                                        </div>
                                        <div class="content">
                                            <h6>Call Us</h6>
                                            <a href="tel:+91-7891-444-333">+91-7891-444-333</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div class="content">
                                            <h6>Mail Us</h6>
                                            <a href="mailto:connect@caretab.ai">connect@caretab.ai</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="pb-20">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <p class="copyright-text textww">
                             © 2026 <a className='footname' href='https://caretab.ai/'>CareTAB</a>. All rights reserved.
                        </p>
                    </div>
                    <div class="col-md-5 align-self-center">
                        <ul class="footer-social">
                            <li><a target='_blank' href="https://www.facebook.com/CareTab"><i class="fab fa-facebook"></i></a></li>
                            {/* <li><a target='_blank' href="https://x.com/CaretabAi"><i class="fab fa-x-twitter"></i></a></li> */}
                            <li><a target='_blank' href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a></li>
                            <li><a target='_blank' href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-md-1 align-self-center">
                      
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
    <FloatingWhatsApp
        phoneNumber="+91-9205559810"
        accountName="Care Connect Center"
        avatar="/assets/img/icon/brandicon.png" 
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>
  )
}