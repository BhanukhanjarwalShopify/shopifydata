import React, { useState } from "react";

const FeatureSection = () => {
  const stores = [
    {
      name: "Old Glory Smokeshops",
      website: "https://oldglory.com",
      categories: "Music & Entertainment T-shirts, Hoodies, Hats & Gifts",
      location: "US",
      shipping: "USPS",
      email: "customerservice@oldglory.com",
      phone: "+1 860-581-8700",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=61550923692227",
        instagram: "https://www.instagram.com/oldglorystores",
        twitter: "https://twitter.com/OldGloryTees",
        pinterest: "https://www.pinterest.com/oldglorytees",
        youtube: "https://www.youtube.com/channel/UCbsQCbRwn9xKoBZTzU7awhA",
      },
      features: [
        "Shopify store platform",
        "Payment methods: Amazon Pay, Apple Pay, Google Pay, PayPal, and more",
        "Analytics: Google Analytics, Facebook Pixel, Pinterest Pixel, and others",
        "Additional pages: Contact Page, Tracking/Returns Page, Wholesale/Retailers Page",
      ],
      otherInformation: [
        "Shopify Apps: Cloudflare CDN, Google Tag Manager, Instafeed.js, Mailchimp",
      ],
      monthlySales: "$50,000" // Added monthly sales
    },
    {
      name: "LampsUSA",
      website: "https://lampsusa.com",
      categories: "Light Fixtures, Lamps, Lamp Shades, Home Decor",
      location: "Watertown, Wisconsin, US",
      shipping: "USPS, UPS, FedEx",
      email: "sales@lampsusa.com",
      phone: "+1 877-526-7247, +1 920-206-8272",
      social: {
        facebook: "https://www.facebook.com/LampsUSA",
        instagram: "https://www.instagram.com/lampsusa",
        twitter: "https://twitter.com/lampsusa1",
        pinterest: "https://pinterest.com/lampsusa1",
        youtube: "https://www.youtube.com/user/lampsusacom",
      },
      features: [
        "Shopify store platform",
        "Shopify POS integration",
        "Additional pages: Contact Page, Tracking/Returns Page",
        "Payment methods: Amazon Pay, Apple Pay, PayPal Express Checkout, Shop Pay",
        "Analytics: Google Analytics, Facebook Pixel, TikTok Pixel, Pinterest Pixel, Google Ads Pixel",
        "Apps: Cloudflare CDN, Constant Contact, Crisp Chat, Google Adsense, Google Tag Manager, Refersion, YouTube Player",
      ],
      otherInformation: [
        "Specializes in home furnishing and decoration products like light fixtures and lamps",
        "USPS, UPS, and FedEx for shipping services"
      ],
      monthlySales: "$120,000" // Added monthly sales
    },
    {
      name: "SpeedZone",
      website: "https://speedzone-web.com",
      categories: "Automobiles & Parts (Automotive Performance Upgrades)",
      location: "Kissimmee, Florida, US",
      shipping: "UPS",
      email: "Paypal@speedzoneweb.com",
      phone: "+1 407-749-6314, +1 407-846-8430, +1 866-418-5857",
      social: {
        facebook: "https://www.facebook.com/speedzoneperformancellc",
        instagram: "https://www.instagram.com/speedzoneweb",
        twitter: "https://twitter.com/speedzoneweb",
        pinterest: "https://www.pinterest.com/performancellc",
        youtube: "https://www.youtube.com/user/speedzoneimportcult",
      },
      features: [
        "Shopify store platform",
        "Shopify POS integration",
        "Additional pages: Tracking/Returns Page, Financing Page",
        "Payment methods: Amazon Pay, Apple Pay, Google Pay, Klarna, PayPal Express Checkout, Sezzle, Shop Pay",
        "Analytics: Google Analytics, Facebook Pixel, TikTok Pixel, Pinterest Pixel, Google Ads Pixel",
        "Apps: Cloudflare CDN, Klaviyo, NoFraud, YouTube Player",
      ],
      otherInformation: [
        "Specializes in automotive performance upgrades with options for no-credit-needed financing"
      ],
      monthlySales: "$200,000" // Added monthly sales
    },
    {
      name: "iEDM",
      website: "https://iedm.com",
      categories: "Clothing (Rave Wear, Festival Clothing, EDM Apparel)",
      location: "New York, US",
      shipping: "USPS",
      email: "CustomerService@iEDM.com",
      phone: "+1 855-436-1110",
      social: {
        facebook: "https://www.facebook.com/iEDMOfficial",
        instagram: "https://www.instagram.com/iedmofficial",
        twitter: "https://www.twitter.com/iedmofficial",
        pinterest: "https://www.pinterest.com/iedmofficial",
        tiktok: "https://www.tiktok.com/@iedmofficial",
        youtube: "https://www.youtube.com/channel/UCjr__VmxcAyIF0Yo7WcX2hA",
      },
      features: [
        "Shopify store platform",
        "Shopify POS integration",
        "Additional pages: Contact Page, Tracking/Returns, Returns Page, Financing Page, Wholesale/Retailers Page",
        "Payment methods: Afterpay, Amazon Pay, PayPal Express Checkout",
        "Analytics: Google Analytics, Facebook Pixel, TikTok Pixel, Google Ads Pixel",
        "Apps: Cloudflare CDN, Klaviyo, Hotjar, Nosto, Printify, Yotpo, YouTube Player, Justuno",
      ],
      otherInformation: [
        "Specializes in rave wear and festival clothing for EDM fans"
      ],
      monthlySales: "$150,000" // Added monthly sales
    },
    {
      name: "Independent Trading Co.",
      website: "https://independenttradingco.com",
      categories: "Clothing (Wholesale Quality Sweatshirts & Apparel)",
      location: "San Clemente, California, US",
      shipping: "UPS, FedEx",
      email: "info@independenttradingco.com",
      phone: "+1 877-366-9911, +1 949-366-9911",
      social: {
        facebook: "https://www.facebook.com/independenttradingcompany",
        instagram: "https://www.instagram.com/independenttradingcompany",
        twitter: "https://twitter.com/indytradingco",
        pinterest: "https://www.pinterest.com/independenttradingcompany",
        youtube: "https://www.youtube.com/channel/UC-kX8clBrVaroROqqFfyyOg",
      },
      features: [
        "Shopify store platform",
        "Shopify POS integration",
        "Additional pages: Contact Page, Tracking/Returns, Returns Page, Signature Required, Wholesale/Retailers Page",
        "Payment methods: Google Pay, PayPal Express Checkout",
        "Analytics: Google Analytics, Facebook Pixel, Pinterest Pixel, Google Ads Pixel",
        "Apps: Cloudflare CDN, Mailchimp, Bing Ads, NoFraud",
      ],
      otherInformation: [
        "Specializes in wholesale quality sweatshirts and apparel"
      ],
      monthlySales: "$90,000" // Added monthly sales
    }
  ];
  
  

  const [selectedStore, setSelectedStore] = useState(null);

  const handleViewMore = (store) => {
    setSelectedStore(store);
  };

  const handleClosePopover = () => {
    setSelectedStore(null);
  };

  return (
<div id="Data" className="relative mt-20 pt-20 border-b border-neutral-800 min-h-[800px]">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
    Access Data from Millions of Shopify Stores{" "}
    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
      Like This.
    </span>
  </h2>
  <div style={{margin:"50px"}}></div><div>
    
        <table border="1" cellPadding="10" className="w-full table-auto">
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Website</th>
              <th>Categories</th>
              <th>Location</th>
              <th>Shipping</th>
              <th>Email</th>
          
       
              <th>Actions</th> {/* New column for View More */}
            </tr>
          </thead>
          <tbody>
            {stores.map((store, index) => (
              <tr key={index}>
                <td>{store.name}</td>
                <td><a href={store.website} target="_blank" rel="noopener noreferrer">{store.website}</a></td>
                <td>{store.categories}</td>
                <td>{store.location}</td>
                <td>{store.shipping}</td>
                <td><a href={`mailto:${store.email}`} target="_blank" rel="noopener noreferrer">{store.email}</a></td>
            
               
                <td>
                <button 
  onClick={() => handleViewMore(store)} 
  className="bg-gray-800 text-white p-2 rounded-lg border-2 border-yellow-400 hover:bg-gray-700 transition-colors duration-200"
>
  View More
</button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>


{/* Popover/Modal for View More */}

{selectedStore && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
    <div className="bg-gray-800 text-white p-6 rounded-lg w-[80%] max-w-3xl">
      {/* Store Name */}
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">{selectedStore.name}</h2>

      <div className="max-h-[70vh] overflow-y-auto"> {/* Added scrollable content area */}
        {/* Website Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Website</h2>
          <p className="text-sm">
            <a href={selectedStore.website} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.website}</a>
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Categories</h2>
          <p className="text-sm">{selectedStore.categories}</p>
        </div>

        {/* Location Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Location</h2>
          <p className="text-sm">{selectedStore.location}</p>
        </div>

        {/* Shipping Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Shipping</h2>
          <p className="text-sm">{selectedStore.shipping}</p>
        </div>

        {/* Phone Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Phone</h2>
          <p className="text-sm">{selectedStore.phone}</p>
        </div>

        {/* Email Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Email</h2>
          <p className="text-sm">
            <a href={`mailto:${selectedStore.email}`} className="text-blue-400">{selectedStore.email}</a>
          </p>
        </div>

        {/* Social Links Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Social Links</h2>
          <p className="text-sm">
            <span className="block mb-2">Facebook: <a href={selectedStore.social.facebook} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.facebook}</a></span>
            <span className="block mb-2">Instagram: <a href={selectedStore.social.instagram} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.instagram}</a></span>
            <span className="block mb-2">Twitter: <a href={selectedStore.social.twitter} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.twitter}</a></span>
            <span className="block mb-2">Pinterest: <a href={selectedStore.social.pinterest} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.pinterest}</a></span>
            <span className="block mb-2">YouTube: <a href={selectedStore.social.youtube} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.youtube}</a></span>
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Tech Stack</h2>
          <ul className="list-disc pl-6 text-sm">
            {selectedStore.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Other Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Other Information</h2>
          <ul className="list-disc pl-6 text-sm">
            {selectedStore.otherInformation.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Close Button */}
      <button 
        onClick={handleClosePopover} 
        className="mt-4 bg-gray-800 text-white p-2 rounded-lg border-2 border-yellow-400 w-full hover:bg-gray-700 transition-colors duration-200"
      >
        Close
      </button>
    </div>
  </div>
)}








    </div>
  );
};

export default FeatureSection;
