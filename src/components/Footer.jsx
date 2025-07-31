import React from "react";

const socialMedia = [
  {
    src: "/Instagram.png",
    alt: "Instagram",
  },
  {
    src: "/Twitter.png",
    alt: "Twitter",
  },
  {
    src: "/Youtube.png",
    alt: "Youtube",
  },
];

export default function Footer() {
  return (
    <div className="flex items-center justify-between p-5 border-b border-gray-900 bg-gray-800 sticky top-0 z-10">
      <div className="pl-10 flex-1">
        <img
          className="h-auto w-auto"
          src="/logoMainShoe.png"
          alt="ShoeStore Logo"
        />
      </div>
      <div className="flex justify-center p-1">
        <p className="text-white">Content Rights</p>
      </div>
      <div className="flex-1 flex justify-end pr-10 space-x-4">
        {socialMedia.map((social, index) => (
          <img
            key={index}
            src={social.src}
            alt={social.alt}
            className="h-6 w-auto"
          />
        ))}
      </div>
    </div>
  );
}
