import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import Slider from "react-slick";
import { useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



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
        <title>Contact CareTAB.ai | Book Home Healthcare Services | +91-7891-444-333 </title>
        <meta name="description" content="Contact CareTAB.ai | Book Home Healthcare Services | +91-7891-444-333 "/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://db.onlinewebfonts.com/c/2cd5263ca3ce6bc9dca6a336c613a5aa?family=Cambria+W01+Regular" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>

        <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://caretab.ai/#organization",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "logo": "https://caretab.ai/assets/img/logo/logo.png",
      "email": "connect@caretab.ai",
      "telephone": "+91-7891-444-333",
      "description": "CareTAB.ai provides home healthcare services including nursing care, doctor consultation, physiotherapy, diagnostics, ICU setup, and medical equipment at home.",
      "sameAs": [
        "https://www.linkedin.com/company/caretab-ai"
      ]
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://caretab.ai/#medicalbusiness",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "telephone": "+91-7891-444-333",
      "email": "connect@caretab.ai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110078",
        "addressCountry": "IN"
      },
      "parentOrganization": {
        "@id": "https://caretab.ai/#organization"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://caretab.ai/#localbusiness",
      "name": "CareTAB.ai",
      "url": "https://caretab.ai/",
      "telephone": "+91-7891-444-333",
      "email": "connect@caretab.ai",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110078",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-7891-444-333",
      "contactType": "customer support",
      "email": "connect@caretab.ai",
      "availableLanguage": [
        "English",
        "Hindi"
      ],
      "areaServed": "IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://caretab.ai/contact-us/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://caretab.ai/contact-us"
        }
      ]
    }
  ]
}

          `,
            }}
          />
      </Head>

<main class="main">

  
        <div class="site-breadcrumb contactbgx">
            <div class="container">
                <h2 class="breadcrumb-title">Contact Us</h2>
                <ul class="breadcrumb-menu">
                    <li><a href="/">Home</a></li>
                    <li class="active">Contact Us</li>
                </ul>
            </div>
        </div>
      
        <div class="contact-area py-120">
            <div class="container">
                <div class="contact-content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="icon">
                                    <i class="fal fa-map-location-dot"></i>
                                </div>
                                <div class="content">
                                    <h5>Delhi Office</h5>
                                    <p>Plot No. 1, Basement Karuna Kunj, Sector-3, Dwarka, New Delhi</p>                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="icon">
                                    <i class="fal fa-map-location-dot"></i>
                                </div>
                                <div class="content">
                                    <h5>Gurugram Office</h5>
                                    <p>Plot No. 231, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001</p>                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="icon">
                                    <i class="fal fa-phone-volume"></i>
                                </div>
                                <div class="content">
                                    <h5>Call Us</h5>
                                    <p><a href="tel:+91-7891-444-333">+91-7891-444-333</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="icon">
                                    <i class="fal fa-envelopes"></i>
                                </div>
                                <div class="content">
                                    <h5>Email Us</h5>
                                    <p><a href="mailto:connect@caretab.ai">connect@caretab.ai</a></p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-md-3">
                            <div class="contact-info">
                                <div class="icon">
                                    <i class="fal fa-alarm-clock"></i>
                                </div>
                                <div class="content">
                                    <h5>Open Time</h5>
                                    <p>Mon - Sat</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div class="contact-form-wrap">
                    <div class="row g-4">
                        <div class="col-lg-7">
                            <div class="contact-form">
                                <div class="contact-form-header">
                                    <h2>Get In Touch</h2>
                                    {/* <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page randomised words which don't look even slightly when looking at its layout. </p> */}
                                </div>
                                <div class="form-message"></div>
                                <form id="contactForm" onSubmit={registerUser}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-user-tie"></i>
                                                    <input type="text" name="name" id="name" class="form-control" placeholder="Name" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-envelope"></i>
                                                    <input type="email" name="email" id="email" class="form-control" placeholder="Email" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon">
                                                    <i class="far fa-pencil"></i>
                                                    <input type="text" name="phone" id="phone" class="form-control" maxlength="13" minlength="10" pattern="[0-9]*" placeholder="Phone No." required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="form-icon servicesl">
                                                    <i class="far fa-pencil"></i>
                                                    <select class="form-control" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} name="service" id="service" className="service" required>
                                                        <option value="">---Select Service---</option>
                                                        <option value="Nursing Care">Nursing Care</option>
                                                        <option value="Doctor Consultations">Doctor Consultations</option>
                                                        <option value="Home Physiotherapy">Home Physiotherapy</option>
                                                        <option value="ICU Setup at Home">ICU Setup at Home</option>                                                        
                                                        <option value="Medical Equipment">Medical Equipment</option>
                                                        <option value="CGM at Home">CGM at Home</option>
                                                        <option value="PFT LFT at Home">PFT / LFT at Home</option>
                                                        <option value="Diagnostics">Diagnostics</option>
                                                        <option value="X-Ray at Home">X-Ray at Home</option>
                                                        <option value="Sleep Study at Home">Sleep Study at Home</option>
                                                        <option value="ECG at Home">ECG at Home</option>
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
                                        <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Get a Call!"/>                       
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="contact-img">
                                <img src="/assets/img/contact/01.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   



        <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13336.047397065995!2d77.0496503!3d28.60683065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad34eb74975%3A0xfcf9092de6f26d2f!2sKaruna%20Kunj%2C%20Dwarka%20Sector-3%2C%20Dwarka%2C%20Delhi%2C%20110059!5e1!3m2!1sen!2sin!4v1756884443265!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
   

    </main>


   


    </>
  );
}
