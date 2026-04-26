"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Hotels",
          id: "/hotels",
        },
        {
          name: "Drivers",
          id: "/drivers",
        },
        {
          name: "Destinations",
          id: "/destinations",
        },
        {
          name: "Plan Trip",
          id: "/planner",
        },
      ]}
      brandName="Nornomade"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Travel Guides"
      description="Everything you need to know before you go."
      blogs={[
        {
          id: "1",
          category: "Guide",
          title: "Packing for Hunza",
          excerpt: "Essential items for cold mountain nights.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-river-flowing-autumn-forest_181624-36993.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/landmark-famous-mountain-land-blue-county_1417-1183.jpg",
          date: "Oct 12",
        },
      ]}
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Popular Packages"
      description="Curated experiences."
      products={[
        {
          id: "p1",
          name: "Hunza Weekender",
          price: "$300",
          imageSrc: "http://img.b2bpic.net/free-photo/magical-winter-landscape_23-2151911771.jpg",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Hunza",
              href: "/destinations",
            },
            {
              label: "Skardu",
              href: "/destinations",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Hotels",
              href: "/hotels",
            },
            {
              label: "Drivers",
              href: "/drivers",
            },
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
