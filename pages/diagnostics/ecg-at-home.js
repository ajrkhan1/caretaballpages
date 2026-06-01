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
                <title>ECG Test at Home in Delhi & Gurgaon | Quick Report | CareTAB.ai </title>
                <meta name="description" content="Book ECG (Electrocardiogram) test at home in Delhi & Gurgaon with CareTAB.ai. 12-lead ECG, accurate cardiac reports in 24 hrs. Affordable, non-invasive. Call 7891444333. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />               
                <link rel="stylesheet" href="/assets/css/ecg-at-home.css" />
                <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://caretab.ai/diagnostics/ecg-at-home/#service",
      "name": "ECG at Home",
      "serviceType": "Electrocardiogram (ECG) Test at Home",
      "url": "https://caretab.ai/diagnostics/ecg-at-home",
      "description": "Professional ECG testing at home for heart health assessment, cardiac monitoring, and early detection of heart-related conditions using portable ECG equipment.",
      "provider": {
        "@type": "MedicalBusiness",
        "@id": "https://caretab.ai/#medicalbusiness",
        "name": "CareTAB.ai",
        "url": "https://caretab.ai/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://caretab.ai/diagnostics/ecg-at-home/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an ECG test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ECG (Electrocardiogram) is a diagnostic test that records the electrical activity of the heart to help detect heart rhythm abnormalities and other cardiac conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Who should get an ECG test at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Individuals experiencing chest pain, palpitations, dizziness, shortness of breath, or those requiring routine cardiac monitoring may benefit from an ECG test at home."
          }
        },
        {
          "@type": "Question",
          "name": "How long does an ECG test take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard ECG test usually takes only a few minutes to complete, and the results can then be reviewed by a qualified healthcare professional."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://caretab.ai/diagnostics/ecg-at-home/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://caretab.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Diagnostics",
          "item": "https://caretab.ai/diagnostics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ECG at Home",
          "item": "https://caretab.ai/diagnostics/ecg-at-home"
        }
      ]
    }
  ]
}

          `,
            }}
          />
            </Head>


            <div className="hero-section" id="inquirenow">
                <div className="">
                    <div className="hero-single ecg-at-home bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        {/* <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i>X-Ray</h6> */}

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                             ECG at Home 
                                        </h1>

                                        <div className="hero-btn wow fadeInUp" data-delay="1s">
                                            <a href="tel:+91-7891-444-333" className="theme-btn btnc">Call for ECG<i
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
                                                                <option value="Diagnostics at Home">Diagnostics at Home</option>
                                                                <option value="X-Ray at Home">X-Ray at Home</option>                                                                
                                                                <option value="Sleep Study at Home">Sleep Study at Home</option>
                                                                <option value="ECG at Home" selected>ECG at Home</option>
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
                                    <h2 class="site-title">Professional <span>Heart Monitoring</span> at Your Doorstep</h2>
                                    <p className="text-justify">
                                        CareTAB.ai offers reliable ECG at home services designed to make cardiac diagnostics more accessible, convenient, and comfortable. Whether you are experiencing chest discomfort, irregular heartbeat, dizziness, palpitations, or require routine cardiac monitoring, our trained healthcare professionals bring advanced ECG equipment directly to your home. 
                                    </p>

                                    <p className="text-justify">
                                        An ECG test at home is a quick, painless, and non-invasive procedure that records the electrical activity of the heart and helps doctors evaluate heart rhythm and overall cardiac health. This service is especially beneficial for senior citizens, post-operative patients, individuals with mobility limitations, and those requiring immediate heart assessment without visiting a hospital. 
                                    </p>
                                    <p className="text-justify">
                                        Our doorstep diagnostic services ensure timely testing, professional support, and accurate reporting reviewed by qualified medical experts. Patients searching for an ECG test near me can now access trusted cardiac care from the comfort and safety of their homes.
                                    </p>                                   
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for ECG <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 professional-Heart-Monitoring ">
                            
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
                                <h2 class="site-title">Common Reasons for <span>ECG Testing</span></h2>                              
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 slpadding">
                        <Slider {...settings}>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg1.webp" alt="Care in the Comfort of Home" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Chest Pain Evaluation</a>
                                        </h4>
                                    </div>
                                    <p>
                                         Helps assess potential cardiac abnormalities and heart-related symptoms. 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg2.webp" alt="Personalized Attention" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Irregular Heartbeat Monitoring</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Detects rhythm disturbances and supports early diagnosis. 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg3.webp" alt="" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Routine Cardiac Screening</a>
                                        </h4>
                                    </div>
                                    <p>
                                        A convenient heart test at home for preventive health monitoring.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg4.webp" alt="Pain & Mobility Management" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Senior Citizen Care</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Regular cardiac assessments without the stress of travel.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg5.webp" alt="holistic support" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Post-Surgery Monitoring</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Supports recovery and ongoing heart health evaluation.
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/ecg6.webp" alt="Prevents Complications" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h4 class="blog-title">
                                            <a href="#">Emergency Cardiac Assessment</a>
                                        </h4>
                                    </div>
                                    <p>
                                        Quick access to professional testing when immediate evaluation is needed. 
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
                           <img className="imgborderwi" src="/assets/img/ecg/why.webp" alt="ICU Nurses" />
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
                                                <p>Fast and convenient ECG at home Delhi services. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Professional doorstep diagnostics by trained healthcare staff. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Accurate 12-lead ECG testing using advanced equipment. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Detailed reports reviewed by experienced medical professionals. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Non-invasive, safe, and painless procedure. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Ideal for elderly, bedridden, and high-risk cardiac patients. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Timely appointments and quick report turnaround. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Trusted ECG at home Gurgaon support for patients and families. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Affordable pricing with transparent service delivery. </p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Reliable home healthcare solutions across Delhi NCR. </p>
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
                            <h1>Prioritize Your Heart Health From Home</h1>
                            <p>
                                Call 7891444333 to book your ECG at home today. 
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
                                        <span><i class="far fa-question"></i></span> What is an ECG test at home?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       An ECG test at home records the electrical activity of the heart using portable equipment and helps identify heart rhythm abnormalities and cardiac conditions. 
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> How long does an ECG at home take?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>P
                                            The procedure usually takes 10–15 minutes, while report generation may vary depending on the clinical requirement. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> Who should consider a heart test at home?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Individuals experiencing chest pain, palpitations, dizziness, shortness of breath, or those requiring routine cardiac monitoring can benefit from a heart test at home. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> Is ECG at home available in Delhi and Gurgaon? 
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. CareTAB.ai provides ECG at home Delhi and ECG at home Gurgaon services through trained healthcare professionals. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span><i class="far fa-question"></i></span> Is an ECG test painful?
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            No. An ECG is a completely non-invasive and painless diagnostic procedure.
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
