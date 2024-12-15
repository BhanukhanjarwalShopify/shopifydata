import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/4.jpg";
import user2 from "../assets/6.jpg";
import user3 from "../assets/3.jpg";
import user4 from "../assets/1.jpg";
import user5 from "../assets/5.jpg";
import user6 from "../assets/2.jpg";

export const navItems = [
  { label: "Data", href: "#Data" },
  { label: "Guide", href: "#Guide" },
  { label: "Pricing", href: "#Pricing" },
];



export const testimonials = [
  {
    user: "Ben Jabbawy",
    company: "Founder at Privy",
    image: user1,
    text: "I am extremely satisfied with the data provided by Shopify Data Now. It has been a game-changer for our lead generation efforts. The quality and accuracy of the information exceeded my expectations!",
  },
  {
    user: "Eldar Galiev",
    company: "Founder at Growave",
    image: user2,
    text: "Shopify Data Now's merchant data was exactly what we needed to fuel our lead generation strategy. The insights were invaluable, and it truly helped us bring our vision to life with more targeted prospects",
  },
  {
    user: "Yvan Boisjoli",
    company: "Founder at BOLD",
    image: user3,
    text: "The merchant data from Shopify Data Now significantly accelerated our lead generation process. We were able to identify high-potential clients faster than we ever imagined. It made a huge impact on our results!",
  },
  {
    user: "Jason Zigelbaum",
    company: "Founder at Zigpoll",
    image: user4,
    text: "I couldn't be more pleased with the quality of the data provided by Shopify Data Now. It helped us refine our approach and deliver results we didn't think were possible.",
  },
  {
    user: "Bjorn Forsberg",
    company: "Founder at FORSBERG",
    image: user5,
    text: "The data from Shopify Data Now gave us the insights we needed to elevate our lead generation efforts. It was exactly what we needed to reach the right audience and boost our conversions.",
  },
  {
    user: "James Devonport",
    company: "Founder at UserLoop",
    image: user6,
    text: "Thanks to Shopify Data Now, we were able to refine our strategy and target our leads more effectively. The merchant data has been a crucial part of our growth and success!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Complete Shopify Store Data Package",
    price: "$245",
    features: [
      "Access to 15+ million Shopify store profiles worldwide, including merchant names and emails.",
      "Includes stores with $100k+ monthly sales and downloadable data in easy-to-use CSV format.",
      "Comprehensive store info including sales data, product catalogs, and other essential details.",
      "Direct access to store owners' emails and phone numbers for targeted outreach and contact.",
    ],
    link: "https://payhip.com/b/h7sVt" // URL for this package
  },
  {
    title: "Complete Shopify Store + Shopify Plus Data Package",
    price: "$445",
    features: [
      "Access to 15+ million Shopify store profiles, including exclusive Shopify Plus stores data.",
      "Includes merchant names, emails, and stores with $100k+ monthly sales and downloadable CSV.",
      "Download data in CSV format for easy integration and comprehensive store data management.",
      "Direct contact details for store owners, including emails and phone numbers for outreach.",
    ],
    link: "https://payhip.com/b/AgT3I" // URL for this package
  },
];







export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
