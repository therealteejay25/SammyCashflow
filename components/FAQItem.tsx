"use client"
import React, { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="w-full">
      <div
        className={`w-full bg-white/4 border border-white/6 rounded-3xl p-4 md:p-6 transition-all duration-300 ${
          open
            ? "ring-2 ring-white/6 shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
            : "shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
        }`}
      >
        <button
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 text-left py-3 md:py-4"
        >
          <span className="text-white text-sm md:text-base font-medium">
            {question}
          </span>
          <svg
            className={`w-5 h-5 text-white/70 transform transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`mt-3 text-sm text-white/60 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="pb-1 pt-1 text-sm leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
