import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="md:grid md:grid-cols-4 gap-6 py-8 w-11/12 mx-auto">
          <div className="flex items-center justify-center mb-6">
            <h1 className="logo text-center text-3xl font-bold">
              MelodyMasters
            </h1>
          </div>
          <div className="flex justify-around col-span-2">
            <div className="space-y-1 md:space-y-3">
              <h2 className="text-xl md:text-2xl">Contact Us</h2>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-amber-600" />
                <span>+8801865215782</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4 text-amber-600" />
                <span>rakibulhasan4003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-amber-600" />
                <span>Mirpur-12, Dhaka</span>
              </div>
            </div>
          </div>
          <div className="my-6 md:my-0">
            <h2 className="text-xl md:text-2xl text-center md:text-start">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start items-center gap-4 my-2 md:my-8">
              <a
                href="https://www.facebook.com/rk.rakib.180625"
                target="_blank"
              >
                <img
                  className="w-8 cursor-pointer"
                  src="https://i.ibb.co/Jypsrh5/facebook-icon.png"
                  alt="facebookIcon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
                target="_blank"
              >
                <img
                  className="w-10 cursor-pointer"
                  src="https://i.ibb.co/Q6TTFRr/linkedIn.png"
                  alt="instagramIcon"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="w-11/12 mx-auto" />
        <p className="text-center text-sm py-4">
          <span className="text-amber-600">&#169;</span>
          {year} Rakibul Hasan all rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
