import React from "react";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const Join = () => {
  return (
    <section className="w-full flex justify-center py-16 md:py-24">
      <div className="max-w-3xl w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get started on your financial journey.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Time to take control of your future. Join our trading collective and get access to mentorship,
            strategies, and a community of successful traders.
          </p>
        </div>

        <div className="bg-white/4 border border-white/6 rounded-3xl p-6 md:p-8 mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <ContactForm />
        </div>

        <div className="text-center">
          <p className="text-white/50 mb-6">Reach out to us on:</p>
          <SocialLinks />
          <p className="text-white/30 text-sm mt-8">
            {new Date().getFullYear()} © SammyCashflow. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join;