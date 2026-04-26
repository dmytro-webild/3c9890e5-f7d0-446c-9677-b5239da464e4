"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import LegalSection from '@/components/legal/LegalSection';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function LandingPage() {
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

  <div id="legal" data-section="legal">
      <LegalSection
      layout="section"
      title="How the Planner Works"
      sections={[
        {
          heading: "Getting Started",          content: {
            items: [
              "Input your duration",              "Select your regions",              "Request local quotes"],
          },
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Planning"
      description="Tell us about your dream trip."
      imageSrc="http://img.b2bpic.net/free-photo/beach-chairs-near-lake-hills-covered-greenery_181624-14763.jpg"
      inputs={[
        { name: "trip-type", type: "text", placeholder: "e.g. Hiking, Family Tour", required: true },
        { name: "budget", type: "text", placeholder: "Budget Range", required: true },
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
