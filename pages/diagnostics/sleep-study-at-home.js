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
                                            Sleep Study at Home 
                                        </h1>

                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for Sleep Study<i
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
                                    <h2 class="site-title">Comfortable Overnight <span>Sleep Monitoring</span> at Your Doorstep</h2>
                                    <p className="text-justify">
                                        A sleep study at home allows patients to undergo advanced sleep diagnostics in their natural sleeping environment, helping healthcare professionals identify sleep-related disorders accurately. CareTAB.ai provides expert-guided testing using portable monitoring devices, ensuring convenience, comfort, and reliable results without requiring an overnight hospital stay. 
                                    </p>

                                    <p className="text-justify">
                                        This service is ideal for individuals experiencing loud snoring, daytime fatigue, interrupted sleep, breathing difficulties during sleep, or suspected sleep disorders. Our specialists guide patients through the setup process and ensure seamless overnight monitoring for accurate diagnosis and treatment planning. 
                                    </p>                                                                 
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Sleep Study <i class="fas fa-arrow-right"></i></a>
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
                                <h2 class="site-title">Common <span>Sleep</span> Disorders We Assess</h2>
                               
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
                                            <a href="#">Sleep Apnea Assessment</a>
                                        </h4>
                                    </div>
                                    <p>
                                         A comprehensive sleep apnea test at home helps detect breathing interruptions and oxygen fluctuations during sleep.
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
                                            <a href="#">Snoring & Breathing Disorders</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Identifies respiratory disturbances that may affect sleep quality and overall health.
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
                                            <a href="#">Sleep Pattern Monitoring</a>
                                        </h4>
                                    </div>
                                    <p>
                                        A professional home sleep test evaluates sleep cycles, movement, and sleep efficiency.
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
                                            <a href="#">Restless Leg Syndrome Evaluation</a>
                                        </h4>
                                    </div>
                                    <p>
                                        A specialized restless leg syndrome test helps identify abnormal leg movements and discomfort affecting sleep.
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
                                            <a href="#">Chronic Fatigue Investigation</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Supports diagnosis when poor sleep quality contributes to daytime tiredness and reduced productivity.
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
                                            <a href="#">Sleep Disorder Screening</a>
                                        </h4>
                                    </div>
                                    <p>
                                        A detailed sleep study test provides valuable insights for diagnosing various sleep-related conditions.
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
                                    <h2 class="site-title">Why Choose CareTAB.ai Services?</h2>                                  
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Convenient overnight testing from the comfort of your home. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Expert support for device setup and monitoring. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Accurate diagnostics reviewed by qualified sleep specialists. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>No hospital admission or overnight stay required. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Comfortable testing in your natural sleep environment. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Suitable for adults, seniors, and patients with mobility challenges. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Transparent guidance regarding sleep study test cost in Delhi. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Fast report generation and consultation support. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Advanced portable sleep monitoring technology. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Trusted home healthcare services across Delhi NCR. </p>
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
                            <h1>Struggling with Snoring, Fatigue, or Poor Sleep?  </h1>
                            <p>
                                Call 7891444333 to book your home sleep study.
                            </p>
                            <a href="tel:+91-7891444333" class="theme-btn">Call us now<i class="fas fa-arrow-right"></i></a>
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
                                        <span><i class="far fa-question"></i></span> What is a sleep study at home?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       A sleep study at home is an overnight diagnostic test that monitors breathing patterns, oxygen levels, heart rate, and sleep quality to identify sleep disorders. 
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> Who should undergo a home sleep test?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Individuals experiencing loud snoring, daytime fatigue, interrupted sleep, breathing pauses during sleep, or suspected sleep apnea may benefit from a home sleep test. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> What does a sleep apnea test at home measure? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            A sleep apnea test at home measures airflow, breathing effort, oxygen saturation, heart rate, and sleep-related respiratory events. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> What is the sleep study test cost in Delhi? 
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            The sleep study test cost in Delhi varies depending on the type of monitoring and reporting required. Contact CareTAB.ai for current pricing and package details. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span><i class="far fa-question"></i></span> Can a sleep study detect restless leg syndrome? 
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. Specialized sleep monitoring can help evaluate abnormal limb movements and assist in the diagnosis of restless leg syndrome and related sleep disorders. 
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
