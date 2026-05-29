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
                <link rel="stylesheet" href="/assets/css/icu-setup-at-home.css" />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single icusetupbanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i>X-Ray</h6>

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

            

            <div class="video-area pb-100 pt-50">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="video-info wow fadeInUp" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Critical Care, Beyond <span>the Hospital</span></h2>
                                    <p className="text-justify">
                                        When a loved one requires intensive monitoring and advanced medical support, hospital stays can be stressful and overwhelming. At Care(T.A.B), we provide ICU set-ups at home, designed to deliver hospital-quality critical care in a safe, familiar environment. With advanced technology, skilled nurses, and doctor supervision, we ensure safe, continuous, and compassionate care for critically ill patients.
                                    </p>
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Care <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-content wow fadeInRight icusetupi1" data-wow-delay=".25s">
                                <a class="play-btn" href="#">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="choose-area pt-50 pb-50 planebg">
                            <div class="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div class="site-heading mb-0">                                
                                            <h2 class="site-title">Long Term <span>Nursing Care</span> @ Home</h2>
                                            <p>
                                                Designed for patients who require continuous medical assistance and monitoring over an extended period. This includes: 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <Tabs>
                                    <div class="row zindexxx">
            
                                        <div class="col-lg-6 allboxx">
                                            <div class="choose-content wow fadeInUp margint0" data-wow-delay=".25s">
                                                <div class="choose-content-wrap">
                                                    <div class="row g-4 ajrow">
                                                        <TabList className="lefttab">
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/citizen.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">Complete Critical Care Medical Equipment,</h4>
                                                                            {/* <p>Trusted hospital backing. Reliable care at home.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/help.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">ICU Nurses</h4>
                                                                            {/* <p>Doctors lead your care, not just approve it.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/protocol.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">Specialist Doctor Supervision</h4>
                                                                            {/* <p>We follow the same standards as hospitals.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/medical-team.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">Home Health Care Attendant</h4>
                                                                            {/* <p>Trained, certified nurses and caregivers.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/medical-team.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">Physiotherapy Visit</h4>
                                                                            {/* <p>Trained, certified nurses and caregivers.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab>
                                                                <div class="col-md-12">
                                                                    <div class="about-item align-items-center">
                                                                        <div class="icon">
                                                                            <img src="/assets/img/icon/medical-team.png" alt="" />
                                                                        </div>
                                                                        <div class="choose-item-info">
                                                                            <h4 className="margobb0">Medical Investigations, etc.</h4>
                                                                            {/* <p>Trained, certified nurses and caregivers.</p> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                        </TabList>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">                                            
            
                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Multipara monitors.svg" alt="Multipara monitors" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Multipara monitors </h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Oxygen concentratorscylinders.svg" alt="Oxygen concentratorscylinders" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Oxygen concentrators/cylinders</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Suction machines.svg" alt="Suction machines" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Suction machines </h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/BiPAP.svg" alt="BiPAP" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>BiPAP</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/CPAP.svg" alt="CPAP" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>CPAP</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Ventilators.svg" alt="Ventilators" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Ventilators</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Syringe & infusion pumps.svg" alt="Syringe & infusion pumps" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Syringe & infusion pumps</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Nebulizers.svg" alt="Nebulizers" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Nebulizers</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-4">
                                                                <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                                    <div class="nursing-icon">
                                                                        <img src="/assets/img/nursingcare/icon/Hospital beds with air mattress.svg" alt="Hospital beds with air mattress" />
                                                                    </div>
                                                                    <div class="choose-item-info">
                                                                        <h4>Hospital beds with air mattress</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
            
                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-12">
                                                                <img className="imgborderwi" src="/assets/img/icu-setup-at-home/ICU Nurses.jpg" alt="ICU Nurses" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-12">
                                                                <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Specialist Doctor Supervision.jpg" alt="Specialist Doctor Supervision" />                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-12">
                                                                <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Home Health Care Attendant.jpg" alt="Home Health Care Attendant" />                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-12">
                                                                <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Physiotherapy Visit.jpg" alt="Physiotherapy Visit" />                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel className="tabdetails">
                                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                                    <div class="choose-content-wrap">
                                                        <div class="row g-3 nursingiconbox">
                                                            <div class="col-sm-12">
                                                                <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Medical Investigations.jpg" alt="Medical Investigations" />                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
            
                                    </div>
                                </Tabs>
                            </div>
            </div>

            <div class="pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                            <img className="imgborderwi" src="/assets/img/icu-setup-at-home/who-needs-an-ICU-at-Home.webp" alt="ICU Nurses" />                           
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Who Needs an ICU at Home? <span></span></h2>
                                    <p>Home ICU setup is ideal for patients who require long-term critical care or prefer recovery in a familiar environment. Common situations include: </p>
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Post-ICU patients were shifted home for continued monitoring </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Patients with chronic respiratory conditions (COPD, severe asthma)</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Patients requiring ventilator support with or without tracheostomy</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Stroke or neurological patients needing round-the-clock monitoring</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Patients with cardiac instability or heart failure or unstable blood pressure</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Cancer patients needing palliative intensive care </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>End of life care requires dignity and comfort at home </p>
                                            </li>                                       
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="choose-area typesofnursing pt-60 pb-80">
                <img className="imgdest" src="/assets/img/nursingcare/comix.png" alt="" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="site-heading mb-0">
                                <span class="site-title-tagline"><i class=""><img class="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Types of Nursing Care We Provide</span>
                                <h2 class="site-title">What Does a Home <span>ICU Include?</span></h2>
                                <p>
                                    Ideal for patients who require temporary medical support, typically lasting from a few Visits to Hours This includes:
                                </p>
                            </div>
                            <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                <div class="choose-content-wrap">
                                    <div class="row g-3 nursingiconbox">
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>IV/IM <br></br>injection</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Urinary catheter <br></br>insertion</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Enema</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Ryle’s tube <br></br>insertion</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Vaccination</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Breathing <br></br>analysis</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Routine vital <br></br>monitoring</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Blood sugar <br></br>check-up</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Wound dressing <br></br>& suture removal</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                <div class="nursing-icon">
                                                    <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                </div>
                                                <div class="choose-item-info">
                                                    <h4>Short Nursing aid <br></br>(up to 4hrs)</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 nursingxd">
                            <div class="choose-img wow fadeInRight" data-wow-delay=".25s">

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


           
            {/* <div class="choose-area pt-50 pb-50 planebg">
                <div class="container">
                    <div className="row">
                        <div className="col">
                            <div class="site-heading mb-0">                                
                                <h2 class="site-title">Residential Nursing Care <span>(12/24 hours)</span> under the Supervision of Doctors</h2>
                                <p>
                                    Designed for patients who require continuous medical assistance and monitoring over an extended period. This includes:
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <Tabs>
                        <div class="row zindexxx">

                            <div class="col-lg-6 allboxx">
                                <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                    <div class="choose-content-wrap">
                                        <div class="row g-4 ajrow">
                                            <TabList className="lefttab">
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/citizen.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h4 className="margobb0">Post-Surgical & Recovery Care</h4>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/help.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h4 className="margobb0">Chronic & Long-Term Illness Care </h4>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/protocol.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h4 className="margobb0">Palliative & End-of-Life Care</h4>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div class="col-md-12">
                                                        <div class="about-item align-items-center">
                                                            <div class="icon">
                                                                <img src="/assets/img/icon/medical-team.png" alt="" />
                                                            </div>
                                                            <div class="choose-item-info">
                                                                <h4 className="margobb0">Specialised Medical Care  Package</h4>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>IV/IM <br></br>injection</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Urinary catheter <br></br>insertion</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Enema</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Ryle’s tube insertion</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Vaccination</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                              

                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Diabetes</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Hypertension</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Stroke</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Oncology</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Kidney conditions </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Cardiac conditions</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                              

                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Diabetes</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Hypertension</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Stroke</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabdetails">
                                    <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                                        <div class="choose-content-wrap">
                                            <div class="row g-3 nursingiconbox">
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Diabetes</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Hypertension</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="choose-item text-center wow fadeInUp" data-wow-delay=".25s">
                                                        <div class="nursing-icon">
                                                            <img src="/assets/img/nursingcare/icon/demo.svg" alt="" />
                                                        </div>
                                                        <div class="choose-item-info">
                                                            <h4>Stroke</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>

                        </div>
                    </Tabs>
                </div>
            </div> */}

           {/* <!-- Benefits --> */}
        <div class="feature-area pt-100 ajboxx">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="row g-4 slpadding">
                        <div className="col-sm-12">
                            <div class="site-heading mb-0">
                                    <h2 class="site-title">Benefits of <span> ICU Setup</span>  at Home</h2>                                  
                                </div>
                        </div>

                        <Slider {...settings}>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item bg-1 wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">01</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/nurse.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Comfort & Familiarity</h4>
                                    <p>Healing in a home environment surrounded by loved ones </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item bg-2 wow fadeInUp" data-wow-delay=".50s">
                                <span class="count">02</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/institute.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Dedicated Critical Care Team</h4>
                                    <p>Skilled ICU nurses and doctors</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item bg-3 wow fadeInUp" data-wow-delay=".75s">
                                <span class="count">03</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/money.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Personalized Attention</h4>
                                    <p>One-on-one monitoring and care</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item bg-4 wow fadeInUp" data-wow-delay="1s">
                                <span class="count">04</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/support.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Continuity of Care</h4>
                                    <p>Smooth transition from hospital ICU to home ICU setup</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item bg-1 wow fadeInUp" data-wow-delay="1s">
                                <span class="count">05</span>
                                <div class="feature-icon">
                                    <img src="/assets/img/icon/support.svg" alt=""/>
                                </div>
                                <div class="feature-content">
                                    <h4>Reduce infection exposure</h4>
                                    <p>Professional-grade medical equipment and strict hygiene protocols</p>
                                </div>
                            </div>
                        </div>
                      
                      
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Benefits --> */}
          


            <div class="pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                           <img className="imgborderwi" src="/assets/img/icu-setup-at-home/Why Choose Care Tab.webp" alt="ICU Nurses" />
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose <span>Care(T.A.B)</span> ICU Setup</h2>                                  
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>End-to-end ICU setup at your home</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Managed by ICU doctors, ICU-trained nurses, and technicians at home</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Customized care plans as recommended by treating doctor  and patient requirement</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Extend the Hospital level care under supervision of treating doctor</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Daily Virtual Round and monitoring by Doctors</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>24/7 monitoring & emergency response via Medical Command Center</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Digital Health Record access to family</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Emotional support & counselling  for both patient and family</p>
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
                            <h1>Because comfort matters, even in crisis…</h1>
                            <p>
                                When critical care is needed, you shouldn’t have to choose between a hospital stay and home comfort. With Care(T.A.B), you can have both.
                            </p>
                            <a href="#" class="theme-btn">Call us now to set up ICU care at home<i class="fas fa-arrow-right"></i></a>
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
                                        <span><i class="far fa-question"></i></span> Is ICU at home as safe as hospital ICU? 
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Yes. Care(T.A.B) provides hospital-grade home ICU setup, ICU-trained nurses, and doctor supervision at home. While hospitals are essential for emergency surgeries and procedures, home ICU is equally safe for patients needing long-term monitoring and critical care. 
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> What medical equipment is included in a home ICU set up? 
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Depending on the patient’s condition, we provide:</p>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>BiPAP</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>CPAP</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Oxygen concentrators/cylinders</p>
                                            </li>
                                             <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Multipara monitors</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Suction machines</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Nebulizers</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Syringe & infusion pumps</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Cardiac monitoring systems</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> Who can benefit from Home ICU Set up? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Patients who need long-term ICU care, ventilator support, stroke or neuro rehabilitation, chronic respiratory support, cardiac instability management, or palliative intensive care can benefit from ICU at home. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> Will a doctor be available in the ICU at home? 
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. Each home ICU setup is monitored and supervised by a senior doctor, while critical care nurses provide 12-hour or 24-hour bedside support. Doctors also review reports and make home visits on a regular interval, and also more frequently if required.  
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span><i class="far fa-question"></i></span> Is ICU at home more affordable than hospital ICU? 
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. Home ICU Setup is typically 40–60% more cost-effective than hospital ICU setup while providing the same level of monitoring and nursing care, along with the comfort of being at home. 
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
