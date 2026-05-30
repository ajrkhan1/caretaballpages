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
                <title>X-Ray at Home  - CareTAB </title>
                <meta name="description" content="Generated by create next App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />               
                <link rel="stylesheet" href="/assets/css/x-ray-home.css" />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single icusetupbanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        {/* <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i>X-Ray</h6> */}

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                            X-Ray at Home
                                        </h1>

                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for X-Ray<i
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
                                                                <option value="Doctor Consultations">Doctor Consultations</option>
                                                                <option value="Nursing Care">Nursing Care</option>
                                                                <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                                <option value="Home Physiotherapy">Home Physiotherapy</option>
                                                                <option value="Diagnostics">Diagnostics</option>
                                                                <option value="Medical Equipment">Medical Equipment</option>
                                                                <option value="X-Ray at Home" selected>X-Ray at Home</option>
                                                                <option value="Medical Equipment">Medical Equipment</option>
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

            

            <div class="video-area pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="video-info wow fadeInUp" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Convenient & Safe <span>X-Ray at</span> Home Services</h2>
                                    <p className="text-justify">
                                        Getting diagnostic imaging has never been easier with CareTAB.ai. Our X-ray at home service brings professional radiology support directly to your doorstep, eliminating the need for hospital visits, long waiting times, and transportation challenges. Using advanced portable imaging technology, our trained technicians perform high-quality X-ray procedures safely and efficiently in the comfort of your home. 
                                    </p>

                                    <p className="text-justify">
                                        This service is especially beneficial for elderly patients, bedridden individuals, post-surgical cases, patients recovering from injuries, and those with limited mobility. Whether your doctor has recommended a chest, knee, shoulder, spine, or limb X-ray, CareTAB.ai ensures a smooth and hassle-free experience from appointment booking to report delivery. 
                                    </p>
                                    <p className="text-justify">
                                        Our Portable X-ray at home solution combines convenience with accuracy. The scans are reviewed by qualified radiologists, and detailed reports are typically delivered within 24 hours, enabling timely medical consultation and treatment planning. With a strong focus on patient safety, hygiene, and diagnostic excellence, CareTAB.ai makes quality imaging services more accessible across Delhi and Gurgaon.
                                    </p>                                   
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Care <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 xray">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="living-option pt-60 pb-60 lightdarkbg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="site-heading text-center">
                                {/* <span class="site-title-tagline"><i class="far fa-house-chimney-heart"></i> Living Options</span> */}
                                <h2 class="site-title">Get Professional <span>X-Ray Services</span> at Your Doorstep</h2>
                                <p>Ideal for elderly patients, bedridden individuals, post-surgical recovery, accident cases, and patients with limited mobility. Our portable diagnostic equipment enables safe and accurate imaging in the comfort of your home. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 slpadding">
                        <Slider {...settings}>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Care in the Comfort of Home.jpg" alt="Care in the Comfort of Home" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Chest X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                         For respiratory infections, pneumonia screening, and lung health assessment. 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Personalized Attention.jpg" alt="Personalized Attention" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Knee & Joint X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Helps evaluate arthritis, joint pain, injuries, and degeneration.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Faster Recovery.jpg" alt="" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Shoulder X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Useful for fractures, dislocations, and mobility-related concerns.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Pain & Mobility Management.jpg" alt="Pain & Mobility Management" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Spine X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Supports diagnosis of back pain, spinal alignment, and injury assessment. 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/holistic support.jpg" alt="holistic support" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Hip & Pelvis X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Recommended for trauma, fractures, and post-operative evaluations. 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/physiotherapy-at-home/Prevents Complications.jpg" alt="Prevents Complications" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Hand, Wrist & Foot X-Ray</a>
                                        </h4>
                                    </div>
                                    <p>
                                        For sprains, fractures, sports injuries, and orthopedic conditions.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
 


          


            <div class="pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                           <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Why Choose Care Tab.webp" alt="ICU Nurses" />
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose CareTAB.ai Services? </h2>                                  
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Doorstep diagnostic services with professional healthcare support </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Advanced portable imaging equipment for accurate results </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Experienced and trained technicians for safe procedures </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Radiologist-reviewed reports delivered within 24 hours </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Ideal for senior citizens, bedridden patients, and post-operative care </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Convenient scheduling with minimal waiting time </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Strict hygiene and patient safety protocols</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Affordable and transparent pricing with no hidden charges </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Quick report access for faster medical decision-making </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Trusted home healthcare solutions across Delhi NCR </p>
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
                            <h1>Need an X-Ray Without Visiting a Hospital?</h1>
                            <p>
                                Call 7891444333 to schedule your home X-ray today. 
                            </p>
                            <a href="tel:+91-7891444333" class="theme-btn">Call us now to set up ICU care at home<i class="fas fa-arrow-right"></i></a>
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
                                        <span><i class="far fa-question"></i></span> What is an X-ray at home service? 
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       An X-ray at home service allows trained technicians to perform diagnostic imaging at your home using portable digital X-ray equipment, eliminating the need to visit a hospital or diagnostic center.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> Who can benefit from portable X-ray at home services?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Portable X-ray at home services are ideal for elderly patients, bedridden individuals, post-surgery patients, people with mobility limitations, and those recovering from injuries. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> What types of X-rays can be performed at home? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Home X-ray services commonly include chest, knee, shoulder, spine, pelvis, hip, hand, wrist, foot, and other physician-prescribed diagnostic X-rays.
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> How long does it take to receive X-ray reports? 
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Most X-ray reports are reviewed by qualified radiologists and delivered digitally within 24 hours of the procedure. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span><i class="far fa-question"></i></span> Is X-ray at home safe and accurate? 
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. Modern portable X-ray systems provide high-quality imaging while following strict safety protocols and radiation guidelines. 
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
