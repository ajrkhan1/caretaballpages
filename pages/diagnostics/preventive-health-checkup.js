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
                <title>Preventive Health Checkup Packages | Quick Report | CareTAB.ai </title>
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
                    <div className="hero-single phc bannerpad">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-5">
                                    <div className="hero-content">
                                        {/* <br></br>
                                        <h6 className="hero-sub-title wow fadeInUp" data-delay=".25s">
                                            <i><img className="brandiconw" src="/assets/img/icon/brandicon.png" alt="" /></i>X-Ray</h6> */}

                                        <h1 className="hero-title wow fadeInRight" data-delay=".50s">
                                             Preventive Health Checkup
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
                                            <h2 style={{ fontSize: "20px" }}>Book Your Services!</h2>
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
                                    <h2 class="site-title">Preventive <span>Health Checkup</span> Packages</h2>
                                    <p className="text-justify">
                                        Take a proactive approach to your health with comprehensive preventive health checkup packages from CareTAB.ai. Designed to identify potential health risks before they become serious conditions, our preventive health checks offer a complete assessment of your overall well-being. From blood tests and diabetes screening to heart health, liver function, kidney function, and vital health markers, our packages help you stay informed about your health status. 
                                    </p>

                                    <p className="text-justify">
                                        With convenient home sample collection, certified laboratory testing, and timely digital reports, CareTAB.ai makes preventive healthcare accessible and hassle-free. Whether you are a working professional, senior citizen, or simply looking to maintain a healthy lifestyle, our customized health checkup packages provide valuable insights for early detection and better long-term health management. 
                                    </p>                                                                      
                                </div>
                                <a href="tel:+91-7891-444-333" class="theme-btn mt-30">Call for Checkup<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6 preventive-health-checkup-p">
                            
                        </div>
                    </div>
                </div>
            </div>


            <div class="pb-100 pt-50">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                           <img className="imgborderwi" src="/assets/img/ecg/why-preventive-health-checks-matter.webp" alt="ICU Nurses" />
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h2 class="site-title">Why Preventive Health Checks Matter </h2>
                                    <p>
                                        Regular preventive health screenings play a crucial role in detecting medical conditions at an early stage, often before symptoms appear. Early diagnosis allows for timely treatment, improved outcomes, and reduced healthcare costs in the long run. 
                                    </p>
                                    <p>
                                        Preventive health checks can help identify risk factors for diabetes, hypertension, heart disease, liver disorders, kidney problems, thyroid conditions, and other chronic illnesses. They also provide a baseline for tracking your health over time and making informed lifestyle choices. 
                                    </p>
                                    <p>
                                        By investing in routine health assessments, individuals can take control of their well-being, prevent complications, and enjoy greater peace of mind. Our preventive health checkup packages empower you to prioritize your health with convenient, reliable, and professional diagnostic services delivered right to your doorstep. 
                                    </p>
                                </div>                            
                            </div>
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
                                <h2 class="site-title">Our Preventive <span>Health Checkup</span> Packages</h2>
                                <p>
                                    Choose from a range of comprehensive wellness packages designed to help detect potential health concerns early and support long-term well-being. All packages include FREE home sample collection and are processed through certified laboratories for accurate and reliable results. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 slpadding sldd">
                        <Slider {...settings}>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CarePremiumWellnesspackage.webp" alt="Care in the Comfort of Home" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Premium Wellness Package</a>
                                        </h3>
                                    </div>
                                    <p>
                                         Fasting Blood Sugar (Glucose), HbA1c, Thyroid Profile, Complete Hemogram, KFT, LFT, Urine R/M, Lipid Profile, Vitamin B12, and Iron 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CarePremiumPlusWellnessPackage.webp" alt="Personalized Attention" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Premium Plus Wellness Package</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Fasting Blood Sugar (Glucose), HbA1c, Thyroid Profile, Complete Hemogram, KFT, LFT, Urine R/M, Lipid Profile, Vitamin B12, Iron, and Viral Markers
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CareAdvancedWellnessPackageMale.webp" alt="" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Advanced Wellness Package (Male)  </a>
                                        </h3>
                                    </div>
                                    <p>
                                        Fasting Blood Sugar (Glucose), HbA1c, Thyroid Profile, Complete Hemogram, KFT, LFT, Urine R/M, Lipid Profile, Vitamin B12, Iron, Viral Markers, PSA, CRP, hsCRP, Calcium, Phosphorus, and Testosterone 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CareAdvancedWellnessPackageFemale.webp" alt="Pain & Mobility Management" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Advanced Wellness Package (Female)  </a>
                                        </h3>
                                    </div>
                                    <p>
                                        Fasting Blood Sugar (Glucose), HbA1c, Thyroid Profile, Complete Hemogram, KFT, LFT, Urine R/M, Lipid Profile, Vitamin B12, Iron, Viral Markers, Folic Acid, CRP, hsCRP, Calcium, and Phosphorus 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CareHeartHealthWellnessPackage.webp" alt="holistic support" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Heart Health Wellness Package </a>
                                        </h3>
                                    </div>
                                    <p>
                                        Fasting Blood Sugar (Glucose), Thyroid Profile, Complete Hemogram + ESR, HbA1c, KFT, Lipid Profile, LFT, Vitamin D, Vitamin B12, Creatine Kinase (CPK), Homocysteine, Apolipoproteins A1 & B, and Total Calcium 
                                    </p>
                                </div>
                            </div>
                            <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                                <div class="blog-item-img">
                                    <img src="/assets/img/ecg/CareDiabetesWellnessPackage.webp" alt="Prevents Complications" />
                                </div>
                                <div class="blog-item-info">
                                    <div class="blog-item-meta">
                                        <h3 class="blog-title">
                                            <a href="#">Care Diabetes Wellness Package</a>
                                        </h3>
                                    </div>
                                    <p>
                                        Fasting Blood Sugar (Glucose), Thyroid Profile, Complete Hemogram, HbA1c, KFT, Lipid Profile, Urine R/M, LFT, Vitamin D, Vitamin B12, HOMA-IR, Lipase, and Cortisol (Random Sample) 
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>



            <div class="pb-70 pt-50 lightdarkbg">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-6">
                           <img className="imgborderwi" src="/assets/img/ecg/WhyChoosCareTABPreventiveHealthCheckupPackages.webp" alt="ICU Nurses" />
                        </div>

                        <div class="col-lg-6 whycaretb pt-50 pb-50">
                            <div class="video-info wow fadeInUp insidep" data-wow-delay=".25s">
                                <div class="site-heading mb-0">
                                    <h3 class="site-title">Why Choose CareTAB.ai’s Preventive Health Checkup Packages? </h3>                                  
                                </div>
                                <div class="feature-content">                                        
                                        <ul class="listicon">
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Comprehensive preventive health packages tailored for individuals, families, senior citizens, and disease-specific screening needs.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Free home sample collection for a convenient and stress-free testing experience.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Certified laboratory network ensuring accurate, reliable, and quality-assured reports.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Experienced healthcare professionals trained in safe and hygienic sample collection.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Early disease detection through comprehensive screening of key health parameters.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Fast & secure digital reports delivered directly to your device.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Affordable wellness packages with significant savings compared to individual test costs.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Flexible appointment slots with same-day and next-day booking options.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Personalized health insights to help you make informed healthcare decisions.</p>
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/listicon.png" />
                                                <p>Trusted home healthcare partner delivering accessible diagnostics and preventive care across Delhi NCR.</p>
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
                            <h2>Stay One Step Ahead of Health Risks </h2>
                            <p>
                                Call 7891444333 to schedule your preventive health checkup today. 
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
                                        <span><i class="far fa-question"></i></span> What are preventive health checkup packages?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Preventive health checkup packages are comprehensive diagnostic screenings designed to assess your overall health and detect potential medical conditions before symptoms appear. 
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span><i class="far fa-question"></i></span> Who should undergo preventive health screening?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>P
                                            Preventive health checkups are recommended for adults of all ages, especially individuals above 30 years, those with a family history of chronic diseases, working professionals, and senior citizens. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span><i class="far fa-question"></i></span> How often should I get a preventive health checkup? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Most healthcare experts recommend a comprehensive health checkup once every year. Individuals with existing health conditions may require more frequent testing. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span><i class="far fa-question"></i></span> Is home sample collection available for all packages?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Yes. All CareTAB.ai preventive health packages include a FREE home sample collection for maximum convenience and comfort. 
                                        </p>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span><i class="far fa-question"></i></span> Which package should I choose?
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            The ideal package depends on your age, gender, medical history, lifestyle, and health goals. Our team can help you select the most suitable package based on your requirements. 
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
