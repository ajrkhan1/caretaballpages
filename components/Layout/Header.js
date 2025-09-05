import Link from 'next/link'
import React from 'react'

export default function Header() {
    
  return (
    <>

<header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-top-wrap">
                    <div class="header-top-left">
                        <div class="header-top-list">
                            <ul>
                                <li><a href="mailto:connect@caretab.ai"><i class="far fa-envelopes"></i>
                                        connect@caretab.ai</a></li>
                                <li><a href="tel:+91-7891-444-333"><i class="far fa-phone-volume"></i> +91-7891-444-333</a>
                                </li>
                                <li><a href="#"><i class="far fa-alarm-clock"></i> Mon - Sat</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="header-top-right">                       
                        <div class="header-top-social">
                            <span>Follow </span>
                            <a target='_blank' href="https://www.facebook.com/CareTab"><i class="fab fa-facebook"></i></a>
                            <a target='_blank' href="https://x.com/CaretabAi"><i class="fab fa-x-twitter"></i></a>
                            <a target='_blank' href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a>
                            <a target='_blank' href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="main-navigation">
            <nav class="navbar navbar-expand-lg">
                <div class="container position-relative">
                    <a class="navbar-brand" href="/">
                        <img src="assets/img/logo/logo.png" alt="logo"/>
                    </a>
                    <div class="mobile-menu-right">
                        {/* <div class="mobile-menu-btn">
                            <button type="button" class="nav-right-link search-box-outer"><i
                                    class="far fa-search"></i></button>
                        </div> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <a href="index-2.html" class="offcanvas-brand" id="offcanvasNavbarLabel">
                                <img src="assets/img/logo/logo.png" alt=""/>
                            </a>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                                    class="far fa-xmark"></i></button>
                        </div>
                        <div class="offcanvas-body gap-xl-4">
                            <ul class="navbar-nav justify-content-end flex-grow-1">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/">Home</a>                                    
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="/#our-services">Services</a>                                    
                                </li>


                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="/#why-us">Why Us</a>                                
                                </li>
                                <li class="nav-item"><a class="nav-link" href="/#about-us">About</a></li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="/#our-team">Our Team</a>                                
                                </li>                               
                                <li class="nav-item"><a class="nav-link" href="/contact-us">Contact Us</a></li>
                            </ul>
                    
                            <div class="nav-right">
                                {/* <div class="search-btn">
                                    <button type="button" class="nav-right-link search-box-outer"><i
                                            class="far fa-search"></i></button>
                                </div> */}
                                <div class="nav-btn">
                                    <a href="tel:+91-7891-444-333" class="theme-btn">Let's Talk<i
                                            class="fas fa-arrow-right"></i></a>
                                </div>
                                <button type="button" class="sidebar-btn nav-right-link" data-bs-toggle="offcanvas"
                                    data-bs-target="#sidebarPopup">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    

    </header>

    <div class="sidebar-popup offcanvas offcanvas-end" tabindex="-1" id="sidebarPopup">
        <div class="offcanvas-header">
            <a href="index-2.html" class="sidebar-popup-logo">
                <img src="assets/img/logo/logo.png" alt=""/>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="far fa-xmark"></i>
            </button>
        </div>
        <div class="sidebar-popup-wrap offcanvas-body">
            <div class="sidebar-popup-content">
                <div class="sidebar-popup-about">
                    <h4>About Us</h4>
                    <p>There are many variations of passages available sure there majority have suffered alteration in
                        some form by inject humour or randomised words which don't look even slightly believable.</p>
                </div>
                <div class="sidebar-popup-contact">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>
                            <div class="icon">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="content">
                                <h6>Email</h6>
                                <a href="mailto:info@caretab.ai">info@caretab.ai</a>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="far fa-phone"></i>
                            </div>
                            <div class="content">
                                <h6>Phone</h6>
                                <a href="tel:+91-7891-444-333">+91-7891-444-333</a>
                            </div>
                        </li>
                       
                    </ul>
                </div>
                <div class="sidebar-popup-social">
                    <h4>Follow Us</h4>
                    <a target='_blank' href="https://www.facebook.com/CareTab"><i class="fab fa-facebook"></i></a>
                    <a target='_blank' href="https://x.com/CaretabAi"><i class="fab fa-x-twitter"></i></a>
                    <a target='_blank' href="https://www.instagram.com/caretab.ai/"><i class="fab fa-instagram"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/company/108111134"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>

     </>
  )
}