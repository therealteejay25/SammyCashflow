import React from "react";
import FAQItem from "@/components/FAQItem";

const faqs = [
  {
    q: "Do I need prior training experience?",
    a: (
      <p>
        No prior experience is needed. Our courses start from the basics and
        progressively build your knowledge and skills. We have successful
        students who started with zero trading experience.
      </p>
    ),
  },
  {
    q: "How long will it take to see results?",
    a: (
      <p>
        Results vary by person and effort. Many students start seeing clear
        improvements within a few weeks of focused practice, but consistency and
        study are key.
      </p>
    ),
  },
  {
    q: "Do you provide mentorship?",
    a: (
      <p>
        Yes — we offer mentorship and group coaching so you can learn directly
        from experienced traders and get feedback on your progress.
      </p>
    ),
  },
  {
    q: "Are live signals included?",
    a: (
      <p>
        Certain tiers include access to real-time trade signals and community
        discussion. Check the course details for the exact offering per tier.
      </p>
    ),
  },
  {
    q: "What payment options are available?",
    a: (
      <p>
        We accept common payment methods. For instalment plans or corporate
        packages, reach out to our support or sales team for options.
      </p>
    ),
  },
];

const FAQ = () => {
  return (
    <section className="w-full flex justify-center my-8 md:my-20 px-4">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
          Frequently asked questions
        </h2>
        <p className="text-white/50 mb-6">
          Common questions about our courses, mentorship and access.
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              question={f.q}
              answer={f.a}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
