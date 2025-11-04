import React from "react";
import Image from "next/image";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "/WhatsappLogo.svg",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/FacebookLogo.svg",
    url: "#",
  },
  {
    name: "Instagram",
    icon: "/InstagramLogo.svg",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/XLogo.svg",
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: "/LinkedinLogo.svg",
    url: "#",
  },
  {
    name: "Telegram",
    icon: "/TelegramLogo.svg",
    url: "#",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors"
          aria-label={`Follow us on ${social.name}`}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;