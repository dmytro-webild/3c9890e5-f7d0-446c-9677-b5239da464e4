"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function DriversPage() {
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

        <div id="feature" data-section="feature">
          <FeatureBento
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Professional Drivers"
            description="Experienced locals who know the mountain roads."
            features={[
              { title: "Expert Navigators", description: "Local drivers familiar with high-altitude roads." },
              { title: "Safe Travels", description: "Well-maintained vehicles for mountain trips." }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Hire a Driver"
            description="Safe travel across the north."
            imageSrc="http://img.b2bpic.net/free-photo/high-angle-shot-narrow-ditch-high-green-mountains-norway_181624-8321.jpg"
            inputs={[
              { name: "pick-up", type: "text", placeholder: "Pick-up Location", required: true },
              { name: "destination", type: "text", placeholder: "Destination", required: true },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              {
                title: "Explore", items: [
                  { label: "Hunza", href: "/destinations" },
                  { label: "Skardu", href: "/destinations" },
                ],
              },
              {
                title: "Services", items: [
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