import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link'






export default function DoctorConsultationatHome() {
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
        infinite: false,
        speed: 500,
        slidesToShow: 2,
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

    var settings2 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Care Tab </title>
                <meta name="description" content="Generated by create next App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" href="/assets/css/doctor-consultation-at-home.css" />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single doctorcarebanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Doctor Consultation at Home
                                        </h6>

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                            Expert Doctors Always Within Your Reach
                                        </h1>
                                        <p>At Care[T.A.B], we believe healthcare doesn’t always need a hospital visit. With our team of experienced doctors and nurses, supported by advanced technology, we bring quality medical care to your doorstep. </p>
                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for Consultation <i
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
                                                            <select class="form-control" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} name="service" id="service" className="service" required>
                                                                <option value="">---Select Service---</option>
                                                                <option value="Doctor Consultations">Doctor Consultations</option>
                                                                <option value="Nursing Care">Nursing Care</option>
                                                                <option value="ICU Setup at Home">ICU Setup at Home</option>
                                                                <option value="Home Physiotherapy">Home Physiotherapy</option>
                                                                <option value="Diagnostics">Diagnostics</option>
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

            <div class="living-option pt-60 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="site-heading text-center">
                                {/* <span class="site-title-tagline"><i class="far fa-house-chimney-heart"></i> Living Options</span> */}
                                <h2 class="site-title">Our <span>Services</span></h2>
                                <h3>Did you know? </h3>
                                <p>3 in 4 Indians already prefer home consultations. So, why step out, when expert doctors can come to you, at your home? At Care[T.A.B], we give you choice of</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4">
                            <div class="living-option-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="living-option-img">
                                    <img src="/assets/img/living/01.jpg" alt=""/>
                                </div>
                                <div class="living-option-content">
                                    <h4><a href="#">Book. Connect. Consult. All from home.</a></h4>
                                    <p className="text-justify">
                                        Consult expert doctors from home—book a tele or video appointment to discuss symptoms, review reports, and get prescriptions, all without stepping out.
                                    </p>
                                    <a href="#" class="theme-btn">Read More<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="living-option-item wow fadeInUp" data-wow-delay=".50s">
                                <div class="living-option-img">
                                    <img src="/assets/img/living/02.jpg" alt=""/>
                                </div>
                                <div class="living-option-content">
                                    <h4><a href="#">24/7 Emergency Consultations</a></h4>
                                    <p className="text-justify"> Health issues don’t wait, and neither do we. Our doctors are available round the clock to provide immediate medical guidance in emergencies.</p>
                                    <a href="#" class="theme-btn">Read More<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="living-option-item wow fadeInUp" data-wow-delay=".75s">
                                <div class="living-option-img">
                                    <img src="/assets/img/living/03.jpg" alt=""/>
                                </div>
                                <div class="living-option-content">
                                    <h4><a href="#">Home Visit by Doctors (On-Demand)</a></h4>
                                    <p className="text-justify">Whether it’s routine check-ups, follow-ups, or personal medical attention, our doctors can come directly to your home, on your schedule.</p>
                                    <a href="#" class="theme-btn">Read More<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                
                
                    </div>
                </div>
            </div>


            <div class="choose-area typesofnursing pt-60 pb-80">
                <img className="imgdest" src="/assets/img/nursingcare/comix.png" alt="" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="site-heading mb-0">
                                {/* <span class="site-title-tagline"><i class=""><img class="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Types of Nursing Care We Provide</span> */}
                                <h2 class="site-title">Specializations <span>Available</span></h2>
                                <p>
                                    Our network of doctors covers a wide range of specialties, ensuring comprehensive care for your health needs:
                                </p>
                            </div>
                            <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                <div class="choose-content-wrap">
                                    <div class="row g-3 row-cols-5 nursingiconbox">
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>General Medicine</h4>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Diabetes Care</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Gynecology </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Paediatrics</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Pulmonology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>ENT</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Orthopedics</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Gastroenterology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>General Surgery</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Psychology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Cardiology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Oncology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Neurology</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Nephro & Urology</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 nursingxddrx">
                            <div class="choose-img wow fadeInRight" data-wow-delay=".25s">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        

            <div class="video-area pb-100 pt-50">
                <div class="container">
                    <div class="row align-items-center">                        
                        <div class="col-lg-6">
                            <img className="bredius" src="/assets/img/nursingcare/whycaretabdrcon.jpg" alt="" />
                        </div>

                        <div class="col-lg-6">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose <span>Care[T.A.B]</span> <br></br>Doctor Consultation?</h2>
                                    <br></br>
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Certified & qualified doctors</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Accessible medical services beyond hospital walls</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Comfort, convenience & trusted care at home</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Doctors available on demand</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Exclusive partnership with leading hospitals and consultant-specialists</p>
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
                            <h1>Your Doctor is Just One Call Away!</h1>
                            <p>
                                Getting medical help is now as simple as making a call. With Care[T.A.B], expert care is always within reach, whether it’s online or at your doorstep.
                            </p>
                            <a href="#" class="theme-btn">Call us now for a consultation<i class="fas fa-arrow-right"></i></a>
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
                                        <span><i class="far fa-question"></i></span> How do I book a doctor consultation at home?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       You can book a consultation by simply calling our helpline or filling out the online request form. Our team will connect you with the right doctor as per your needs.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> Do you provide both teleconsultations and home visits?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Yes. We offer secure tele/video consultations for convenience, and if required, our doctors can also visit your home for emergencies or in-person assessments.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> Are your services available 24/7?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Absolutely. We provide round-the-clock emergency consultations and home visits to ensure you receive timely care whenever needed.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> What kind of doctors are available for consultation?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>We have specialists across multiple fields, including Orthopedics, Gastroenterology, General Surgery, Diabetes Care, Gynecology, Psychology, Cardiology, ENT, Pulmonology, and Neurology.</p>
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
