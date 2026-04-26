"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useState } from "react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  const handleTripPlannerSubmit = (data: Record<string, string>) => {
    const destination = data.destination || "any";
    const budget = data.budget || "flexible";
    const days = data.days || "N/A";
    const people = data.people || "1";
    const message = `Hello! I'd like to plan a trip to ${destination}. \nBudget: ${budget}\nDuration: ${days} days\nTravelers: ${people} person(s).`;
    window.open(`https://wa.me/923000000000?text=${encodeURIComponent(message)}`, "_blank");
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
        { name: "Plan Trip", id: "/planner" },
      ]}
      brandName="Nornomade"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Nornomade"
      description="Find trusted hotels, drivers, and plan your perfect trip in minutes."
      buttons={[
        { text: "Find Hotels", href: "/hotels" },
        { text: "Find Drivers", href: "/drivers" },
        { text: "Plan My Trip", href: "/planner" },
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
        { title: "Fairy Meadows", description: "Basecamp for Nanga Parbat.", imageSrc: "http://img.b2bpic.net/free-photo/olden-norway-may-17-2023_58702-16437.jpg" },
        { title: "Gilgit", description: "The heart of the north.", imageSrc: "http://img.b2bpic.net/free-photo/bridge-with-city_1127-4175.jpg" },
      ]}
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
      title="Trusted by Local Partners"
      description="Partnering with the finest regional organizations."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Trip Planner"
      description="Fill in your details to start planning your custom journey."
      imageSrc="http://img.b2bpic.net/free-photo/mountain-landscape-with-trees-summer_23-2148153669.jpg"
      onSubmit={handleTripPlannerSubmit}
      buttonText="Send to WhatsApp"
      inputs={[
        { name: "destination", type: "text", placeholder: "Preferred Destination", required: true },
        { name: "budget", type: "text", placeholder: "Budget Range", required: true },
        { name: "days", type: "number", placeholder: "Number of Days", required: true },
        { name: "people", type: "number", placeholder: "Number of People", required: true },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",          items: [
            { label: "Hunza", href: "/destinations" },
            { label: "Skardu", href: "/destinations" },
          ],
        },
        {
          title: "Services",          items: [
            { label: "Hotels", href: "/hotels" },
            { label: "Drivers", href: "/drivers" },
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