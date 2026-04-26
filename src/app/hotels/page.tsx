"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function HotelsPage() {
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
            title="Luxury and Comfort"
            description="Top-rated stays in the mountains."
            features={[
              { title: "Luxury Stays", description: "High-end hotels in mountain ranges." },
              { title: "Cozy Guest Houses", description: "Experience authentic local hospitality." }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Book Your Stay"
            description="Direct inquiry to local hotels."
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-high-angle-shot-mountainous-scenery-clear-sky_181624-8080.jpg"
            inputs={[
              { name: "checkin", type: "date", placeholder: "Arrival", required: true },
              { name: "nights", type: "number", placeholder: "Nights", required: true },
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