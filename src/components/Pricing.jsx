import React from "react";
import { pricingOptions } from "../constants";

// Custom Checkmark Component
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="text-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

const Pricing = () => {
  return (
    <div id="Pricing" className="mt-20 pt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
          Complete Shopify Data
        </span>
      </h2>
      <div className="my-12"></div>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="p-6 border border-neutral-700 rounded-xl">
              <p className="text-3xl font-semibold mb-4 text-center">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                  {option.title}
                </span>
                {option.title === "Pro" && (
                  <span className="text-sm text-yellow-600 font-semibold ml-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckIcon />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl border border-yellow-600 rounded-lg transition duration-200 custom-hover"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
