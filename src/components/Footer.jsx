import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight" style={{ color: 'gold', marginTop: "3px" }}>Shopify Data</span>
        </div>

        <a 
  href="https://payhip.com/ShopifyData"  // Link to redirect
  className="py-2 px-3 border rounded-md"
  target="_blank"  // Ensures the link opens in a new tab
  rel="noopener noreferrer" // Security improvement for opening new tab
>
  Products
</a>

      </div>
    </footer>
  );
};

export default Footer;