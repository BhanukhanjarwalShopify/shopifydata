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
      <div className="my-12">
        <table className="min-w-full bg-gray-800 text-white border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2">Store Name</th>
              <th className="p-2">Website</th>
              <th className="p-2">Categories</th>
              <th className="p-2">Location</th>
              <th className="p-2">Shipping</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-2">{store.name}</td>
                <td className="p-2">
                  <a href={store.website} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    {store.website}
                  </a>
                </td>
                <td className="p-2">{store.categories}</td>
                <td className="p-2">{store.location}</td>
                <td className="p-2">{store.shipping}</td>
                <td className="p-2">
                  <a href={`mailto:${store.email}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    {store.email}
                  </a>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleViewMore(store)}
                    className="bg-yellow-500 text-gray-900 p-2 rounded hover:bg-yellow-400 transition-colors duration-200"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStore && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">{selectedStore.name}</h2>
            <div className="max-h-[70vh] overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Website</h3>
                <p>
                  <a href={selectedStore.website} className="text-blue-400" target="_blank" rel="noopener noreferrer">
                    {selectedStore.website}
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Categories</h3>
                <p>{selectedStore.categories}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Location</h3>
                <p>{selectedStore.location}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Shipping</h3>
                <p>{selectedStore.shipping}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Phone</h3>
                <p>{selectedStore.phone}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Email</h3>
                <p>
                  <a href={`mailto:${selectedStore.email}`} className="text-blue-400">
                    {selectedStore.email}
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Social Links</h3>
                <div>
                  <span className="block">Facebook: <a href={selectedStore.social.facebook} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.facebook}</a></span>
                  <span className="block">Instagram: <a href={selectedStore.social.instagram} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.instagram}</a></span>
                  <span className="block">Twitter: <a href={selectedStore.social.twitter} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.twitter}</a></span>
                  <span className="block">Pinterest: <a href={selectedStore.social.pinterest} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.pinterest}</a></span>
                  <span className="block">YouTube: <a href={selectedStore.social.youtube} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedStore.social.youtube}</a></span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Tech Stack</h3>
                <ul className="list-disc pl-6">
                  {selectedStore.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">Other Information</h3>
                <ul className="list-disc pl-6">
                  {selectedStore.otherInformation.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={handleClosePopover}
              className="mt-4 bg-gray-700 text-white p-2 rounded border border-yellow-400 w-full hover:bg-gray-600 transition-colors duration-200"
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