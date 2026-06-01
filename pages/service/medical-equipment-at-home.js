import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link'






export default function ICUSetupatHome() {
    const [selectedService, setSelectedService] = useState(''); // Initial empty selection

    const registerUser = async event => {
        event.preventDefault()

        document.getElementById("submitbuttonform").value = "Submitting form...."

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://admin.caretab.ai/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res)
                if (res.status == "mail_sent") {
                    document.getElementById("contactForm").reset();

                    document.getElementById("showlabel").innerHTML = "Your submission has been received and we will contact you soon";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thankyou"
                    }, 10);

                } else {
                    document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
                    document.getElementById("showlabel").style.display = "block";

                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

    }

    const registerUser2 = async event => {
        event.preventDefault()

        document.getElementById("submitbuttonform2").value = "Submitting form...."

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res)
                if (res.status == "mail_sent") {
                    document.getElementById("contactForm2").reset();

                    document.getElementById("showlabel2").innerHTML = "Your submission has been received and we will contact you soon";

                    document.getElementById("showlabel2").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thankyou"
                    }, 10);

                } else {
                    document.getElementById("showlabel2").innerHTML = "There was a problem with the request.";
                    document.getElementById("showlabel2").style.display = "block";

                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

    }

    const registerUser3 = async event => {
        event.preventDefault()

        document.getElementById("submitbuttonform3").value = "Submitting form...."

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://phpstack-1457894-5753298.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/6/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res)
                if (res.status == "mail_sent") {
                    document.getElementById("contactForm3").reset();

                    document.getElementById("showlabel3").innerHTML = "Your submission has been received and we will contact you soon";

                    document.getElementById("showlabel3").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/thankyou"
                    }, 10);

                } else {
                    document.getElementById("showlabel3").innerHTML = "There was a problem with the request.";
                    document.getElementById("showlabel3").style.display = "block";

                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

    }

    const [modalOpen, setModalOpen] = React.useState(false);

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Medical Equipment on Rent & Sale | Home Medical Devices | CareTAB.ai</title>
                <meta name="description" content="Rent or buy essential medical equipment from CareTAB.ai. Wheelchairs, oxygen concentrators, hospital beds, BP monitors, nebulizers & more delivered to your home across India. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />               
                <link rel="stylesheet" href="/assets/css/medical-equipment.css" />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single medicaliqupmentbanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        {/* <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i>Medical Equipment at Home</h6> */}

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                            Buy/ Rent Medical Equipment Online
                                        </h1>

                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for Care<i
                                                className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-4 header-top-right"></div>
                                <div class="col-lg-3 header-top-right">
                                    <div class="bannerform align-items-center">
                                        <div class="quote-header">
                                            {/* <h4>Book an appointment with our expert</h4> */}
                                            <h4>Book Your Services!</h4>
                                        </div>
                                        <form id="contactForm" onSubmit={registerUser}>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-user-tie"></i>
                                                            <input type="text" name="name" id="name" class="form-control" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-envelope"></i>
                                                            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-pencil"></i>
                                                            <input type="text" name="phone" id="phone" class="form-control" maxlength="13" minlength="10" pattern="[0-9]*" placeholder="Phone No." required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon servicesl">
                                                            <i class="far fa-pencil"></i>
                                                            <select class="form-control" name="service" id="service" className="service" required>                                                                
                                                                <option value="Nursing Care At Home">Nursing Care At Home</option>
                                                                <option value="Doctor Consultation at Home">Doctor Consultation at Home</option>
                                                                <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                                                                <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                                <option value="Medical Equipment at Home" selected>Medical Equipment at Home</option>
                                                                <option value="CGM at Home">CGM at Home</option>
                                                                <option value="PFT or LFT at Home">PFT / LFT at Home</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-icon">
                                                            <i class="far fa-comment-lines"></i>
                                                            <textarea name="message" id="message" cols="30" rows="3" class="form-control"
                                                                placeholder="Write Your Message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-2">
                                                    <div className="clearfix"></div>
                                                    <p id="showlabel" style={{ display: "none" }}></p>
                                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Get a Call!" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="video-area pb-100 pt-50 typesofnursing">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="video-info wow fadeInUp" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Reliable Equipment, Right When <span>You Need It</span></h2>
                                    <p className="text-justify">
                                        Healthcare at home often requires the right tools. At Care(T.A.B), we make it easy to rent or buy high-quality medical equipment, ensuring that patients receive safe and seamless care without the stress of hospital dependency. Whether it’s short-term recovery support or long-term use, we’ve got you covered.
                                    </p>
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Care <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-content wow fadeInRight medicaipment1" data-wow-delay=".25s">
                                <a class="play-btn" href="#">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="living-option pt-60 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="site-heading text-center">
                                {/* <span class="site-title-tagline"><i class="far fa-house-chimney-heart"></i> Living Options</span> */}
                                <h2 class="site-title">We <span>Offer</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 slpadding">
                   
                            <div className="col-sm-4">
                                <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/medical-equipment/Medical Equipment & Furniture.webp" alt="" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Medical Equipment & Furniture</a>
                                        </h4>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>

                            <div className="col-sm-4">
                                <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/medical-equipment/Medical Aids.webp" alt="Medical Aids" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Medical Aids</a>
                                        </h4>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>

                            <div className="col-sm-4">
                                <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/medical-equipment/Medical Equipment & Furniture.webp" alt="Medical Equipment & Furniture" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Medical Consumables</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        
                    </div>
                </div>
            </div>

           
        <div class="feature-area pt-100 box5inmo">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="row g-4 slpadding">
                        <div className="col-sm-12">
                            <div class="site-heading mb-0">
                                    <h2 class="site-title">How To Buy/Rent Medical Equipment at <span> Care(T.A.B)?</span></h2>
                                </div>
                        </div>                     
                        <div class="col">
                            <div class="feature-item bg-1 wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">01</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/nurse.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Request Equipment</h4>
                                    <p>Call us or book online with your requirement.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="feature-item bg-2 wow fadeInUp" data-wow-delay=".50s">
                                <span class="count">02</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/institute.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Get Recommendation</h4>
                                    <p>Our doctors suggest the right equipment</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="feature-item bg-3 wow fadeInUp" data-wow-delay=".75s">
                                <span class="count">03</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/money.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Delivery & Setup</h4>
                                    <p>Devices are delivered, installed, and explained.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="feature-item bg-4 wow fadeInUp" data-wow-delay="1s">
                                <span class="count">04</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/support.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Use With Confidence</h4>
                                    <p>24/7 support available throughout usage.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="feature-item bg-1 wow fadeInUp" data-wow-delay="1s">
                                <span class="count">05</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/support.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Return or Purchase</h4>
                                    <p>Rent short-term or buy for permanent use.</p>
                                </div>
                            </div>
                        </div>                       
                     
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Benefits --> */}
          


            <div class="pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                           <img className="bredius" src="/assets/img/medical-equipment/Why Choose Care T.A.B Equipment Services.webp" alt="Why Choose Care Tab" />
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose Care(T.A.B) <br></br><span>Equipment Services?</span></h2>                                  
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Wide range of certified medical equipment</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Home delivery, installation & demo</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Rent or buy as per your need</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Regular maintenance & technical support</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Guidance from doctors & trained staff</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>We also buy back the used equipment (exclusive for CareTAB’s users)</p>
                                            </li>                                                                             
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cta-area">
            <div class="container">
                <div class="cta-wrap rounded-5 w-100">
                    <div class="col-lg-7 mx-auto">
                        <div class="cta-content">
                            <h1>Make Recovery Comfortable & Stress-free</h1>
                            <p>
                                Whether you need to rent for a few weeks or buy for long-term use, Care(T.A.B) ensures you get the right equipment without hassle.
                            </p>
                            <a href="#" class="theme-btn">Buy & Rent now!<i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- faq area --> */}
        <div class="faq-area pt-100 pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="faq-content wow fadeInUp text-center" data-wow-delay=".25s">
                            <div class="site-heading mb-3">
                                <span class="site-title-tagline"><i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> FAQs</span>
                                <h2 class="site-title my-3 pb-20">Frequently Asked <span>Questions</span> (FAQs)</h2>
                            </div>                            
                        </div>
                    </div>
                    
                    <div class="col-lg-12">
                        <div class="accordion wow fadeInRight" data-wow-delay=".25s" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span><i class="far fa-question"></i></span> Can I rent equipment instead of buying?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Yes. Care(T.A.B) offers flexible rental plans for patients who need equipment for short durations such as post-surgery recovery or temporary rehabilitation.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> What if I need the equipment for a longer period?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>If your need extends, you can either extend your rental plan or opt to purchase the equipment directly. Our team will guide you on the most cost-effective option.</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> Are the devices safe and hygienic?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Absolutely. All equipment is hospital-grade, well-maintained, sanitized, and quality-checked before being delivered to your home.
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> Is there a deposit for rented equipment?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes, some devices may require a refundable security deposit, depending on the equipment type and rental duration. Our team will share all details upfront.
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- faq area end --> */}



        </>
    );
}
