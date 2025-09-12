import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link'






export default function Home() {
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
                <link rel="stylesheet" href="/assets/css/nursing-care.css" />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single nursingcarebanner bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Nursing Care at Home
                                        </h6>

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                            Skilled Nursing, <br></br>Right at Your Doorstep
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
                                    <h2 class="site-title">4 Million+ Minor <span>Procedures</span> Can Be Done at Home Today</h2>
                                    <p className="text-justify">
                                        So, why spend hours in the hospital when expert nursing care can come to you at home? At Care[T.A.B], our certified and compassionate nurses deliver hospital-quality support in the comfort of your home, helping you to heal faster, manage conditions better, and live with dignity.
                                    </p>
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Care <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-content wow fadeInRight nursingbg1" data-wow-delay=".25s">
                                <a class="play-btn" href="#">
                                    <i class="fas fa-play"></i>
                                </a>
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
                                <span class="site-title-tagline"><i class=""><img class="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i> Types of Nursing Care We Provide</span>
                                <h2 class="site-title">Day Care Nursing  <span>on Demand</span></h2>
                                <p>
                                    Ideal for patients who require temporary medical support, typically lasting from a few Visits to Hours This includes:
                                </p>
                            </div>
                            <div class="choose-content wow fadeInUp ee" data-wow-delay=".25s">
                                <div class="choose-content-wrap">
                                    <div class="row g-3 row-cols-5 nursingiconbox">
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
            </div>


            {/* <!-- choose area --> */}
            <div class="choose-area pt-50 pb-50 planebg">
                <div class="container">
                    <div className="row">
                        <div className="col-sm-6">
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
                                                                <h4 className="margobb0">Post-Surgical & Recovery Care</h4>
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
                                                                <h4 className="margobb0">Chronic & Long-Term Illness Care </h4>
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
                                                                <h4 className="margobb0">Palliative & End-of-Life Care</h4>
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
                                                                <h4 className="margobb0">Specialised Medical Care  Package</h4>
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
                                            <div class="row g-3 row-cols-5 nursingiconbox">
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
                                            <div class="row g-3 row-cols-5 nursingiconbox">
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
                                            <div class="row g-3 row-cols-5 nursingiconbox">
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
                                            <div class="row g-3 row-cols-5 nursingiconbox">
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
            </div>
            {/* <!-- choose area end --> */}

            {/* <div class="feature-area pb-100 pt-100">
                <div class="container">
                    <div class="feature-wrapper">
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-3">
                                <div class="feature-item bg-1 wow fadeInUp" data-wow-delay=".25s">
                                    <span class="count">01</span>
                                    <div class="feature-icon">
                                        <img src="/assets/img/icon/nurse.svg" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4>Post-Surgical & Recovery Care</h4>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Wound care</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Pain management</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>IV/IM medication administration</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Mobility and hygiene support</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Rehabilitation</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="feature-item bg-2 wow fadeInUp" data-wow-delay=".50s">
                                    <span class="count">02</span>
                                    <div class="feature-icon">
                                        <img src="/assets/img/icon/institute.svg" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4>Chronic & Long-Term Illness Care </h4>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Wound care</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Pain management</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>IV/IM medication administration</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Mobility and hygiene support</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Rehabilitation</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="feature-item bg-3 wow fadeInUp" data-wow-delay=".75s">
                                    <span class="count">03</span>
                                    <div class="feature-icon">
                                        <img src="/assets/img/icon/money.svg" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4>Palliative & End-of-Life Care</h4>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Comfort-focused support</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Symptomatic relief</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Comfort-focused support</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="feature-item bg-4 wow fadeInUp" data-wow-delay="1s">
                                    <span class="count">04</span>
                                    <div class="feature-icon">
                                        <img src="/assets/img/icon/support.svg" alt="" />
                                    </div>
                                    <div class="feature-content">
                                        <h4>Specialised Medical Care  Package</h4>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Mother & newborn care</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Rehabilitation nursing (stroke, trauma, spinal injury)</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Psychiatric nursing supervision</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="video-area pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6 whycaretbx">
                           
                        </div>

                        <div class="col-lg-6 whycaretb">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Choose <span>Care[T.A.B]</span> Nursing Services?</h2>
                                    <p className="text-justify">
                                        At Care[T.A.B], our nurses and Caregivers are more than healthcare providers—they are trusted companions in your recovery journey. Each nurse undergoes:
                                    </p>
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Rigorous training & skill assessment</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Background verification for safety</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Empathy-driven care with cultural sensitivity</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Under 24/7 supervision from the Medical command center, run by doctors</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Engagement and updation of the treating doctor at regular intervals</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Hospital standard medical protocol-based care and quality</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Customised care plan for each individual after a detailed health assessment by the doctor and the Nursing staff</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Daily virtual round by the Nurse and guided by the Medical Officer</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Follow the NABH standard of care at home</p>
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
                            <h1>Professional Nursing Care, Anytime, <br></br>Right at Your Home!</h1>
                            <p>
                                Get the right care, at the right time, in the right place, your home.
                            </p>
                            <a href="#" class="theme-btn">Book online to schedule a Care[T.A.B]<i class="fas fa-arrow-right"></i></a>
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
                                        <span><i class="far fa-question"></i></span> Who provides the nursing care?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       All nursing services at Care[T.A.B] are provided by qualified, registered nurses and experienced GDAs who have undergone rigorous training, skill assessment, and background verification. They work under the supervision of senior doctors, ensuring hospital-quality care at home.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> What kind of conditions can be managed by home nursing?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Home nursing can support:</p>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Post-surgical recovery</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Wound and catheter care</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Chronic diseases like diabetes, heart disease, and arthritis</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Elderly care and mobility support</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Palliative (End-of-life care)</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Oxygen therapy and tracheostomy management</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Routine injections, IV infusions, and vaccinations</p>
                                            </li>                                                                                       
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> How many hours will the nurse stay at home?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Care[T.A.B] offers flexible plans:</p>
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Short-term visits (for specific procedures like injections or wound dressing)</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>12-hour care (day or night shifts)</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>24-hour care (round-the-clock nursing)</p>
                                            </li>                                                                                                          
                                        </ul>
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
