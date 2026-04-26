"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactText from '@/components/sections/contact/ContactText';

export default function LandingPage() {
  const whatsappRedirect = (message: string) => {
    window.open(`https://wa.me/855719513144?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "/" },
        { name: "Hotels", id: "/hotels" },
        { name: "Drivers", id: "/drivers" },
        { name: "Destinations", id: "/destinations" },
      ]}
      brandName="Nornomade"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Nornomade"
      description="Find trusted hotels, drivers, and plan your perfect trip in minutes."
      buttons={[
        { text: "Chat for Hotels", onClick: () => whatsappRedirect("Hi! I'm looking for hotel recommendations in Northern Pakistan.") },
        { text: "Chat for Drivers", onClick: () => whatsappRedirect("Hi! I'm looking for a driver in Northern Pakistan.") },
        { text: "Book on WhatsApp", onClick: () => whatsappRedirect("Hi, I’m interested in booking a tour in Northern Pakistan. Please share details.") },
        { text: "Start Your Adventure on WhatsApp", onClick: () => whatsappRedirect("Hi, I am interested in booking a tour in Northern Pakistan. Please share details and available packages.") },
        { text: "Plan My Trip", onClick: () => whatsappRedirect("Hi! I'd like to plan a custom trip in Northern Pakistan.") },
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/skjolden-norway-may-16-2023-mountain_58702-11010.jpg", imageAlt: "Majestic mountain landscape Pakistan" },
        { imageSrc: "http://img.b2bpic.net/free-photo/skjolden-norway-may-16-2023-mountain_58702-10983.jpg", imageAlt: "Skjolden Norway May 16 2023 Mountain" },
        { imageSrc: "http://img.b2bpic.net/free-photo/rocky-snowy-mountains_181624-405.jpg", imageAlt: "Rocky snowy mountains" },
        { imageSrc: "http://img.b2bpic.net/free-photo/vast-valley-with-mountains-hill-sky_181624-26021.jpg", imageAlt: "Vast valley with mountains hill and the sky" },
        { imageSrc: "http://img.b2bpic.net/free-photo/landscape-snow-covered-himalayan-mountains-near-village-chitkul-kinnaur-india_181624-42807.jpg", imageAlt: "Landscape of snow-covered Himalayan mountains near the village of Chitkul" },
      ]}
    />
  </div>

  <div id="destinations" data-section="destinations">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        { title: "Hunza", description: "Ancient castles and mountain views.", imageSrc: "http://img.b2bpic.net/free-photo/flam-norway-june-06-2023-mountain_58702-16593.jpg" },
        { title: "Skardu", description: "Gateway to the high peaks.", imageSrc: "http://img.b2bpic.net/free-photo/house-body-water-mountain_198169-189.jpg" },
        { title: "Naran", description: "Lush valleys and river retreats.", imageSrc: "http://img.b2bpic.net/free-photo/waters-lake-lac-lioson-surrounded-by-trees-mountains-switzerland_181624-31695.jpg" },
        { title: "Kaghan", description: "Serene nature and alpine lakes.", imageSrc: "http://img.b2bpic.net/free-photo/flam-norway-june-06-2023-mountain_58702-11034.jpg" },
      ]}
      buttons={[{ text: "Inquire about Tours", onClick: () => whatsappRedirect("I am interested in tours to your featured destinations.") }]}
      title="Featured Destinations"
      description="Explore the most breathtaking regions in Northern Pakistan."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Experience Northern Pakistan"
      description="We connect travelers with authentic local experiences, ensuring your safety and comfort throughout the Karakoram and Himalayan ranges."
      buttons={[{ text: "Talk to an Expert", onClick: () => whatsappRedirect("Hi, I'd like to talk to an expert about my trip to Pakistan.") }]}
      imageSrc="http://img.b2bpic.net/free-photo/skjolden-norway-may-16-2023-mountain_58702-10858.jpg"
      mediaAnimation="slide-up"
      bulletPoints={[
        { title: "Trusted Experts", description: "Verified local drivers and tour guides." },
        { title: "Handpicked Hotels", description: "Curated stays from luxury resorts to local guest houses." },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Hunza Tourism Board",        "Skardu Adventurers",        "Northern Heritage Trust",        "Karakoram Explorers"]}
      buttons={[{ text: "Partner with Us", onClick: () => whatsappRedirect("Hi, I'd like to discuss partnering with Nornomade.") }]}
      title="Trusted by Local Partners"
      description="Partnering with the finest regional organizations."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Ready to start your adventure? Let's chat directly on WhatsApp."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
      buttons={[{ text: "Chat on WhatsApp", onClick: () => whatsappRedirect("Hi, I'm ready to start my adventure in Northern Pakistan!") }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",          items: [
            { label: "Hunza", onClick: () => whatsappRedirect("Hi, I'm interested in visiting Hunza.") },
            { label: "Skardu", onClick: () => whatsappRedirect("Hi, I'm interested in visiting Skardu.") },
          ],
        },
        {
          title: "Services",          items: [
            { label: "Hotels", onClick: () => whatsappRedirect("Hi, I'm looking for hotel recommendations.") },
            { label: "Drivers", onClick: () => whatsappRedirect("Hi, I'm looking for a reliable driver.") },
          ],
        },
      ]}
      bottomLeftText="© 2024 Nornomade. All rights reserved."
      bottomRightText="Contact: support@nornomade.pk"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
