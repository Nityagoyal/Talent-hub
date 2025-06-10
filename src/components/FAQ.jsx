import React, { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqData = [
    {
      id: 1,
      question: "Can I message artists directly?",
      answer: "Yes, you can directly message artists through our platform once you create an account. This allows you to discuss details about your event, negotiate pricing, and coordinate performance requirements."
    },
    {
      id: 2,
      question: "How do I get paid?",
      answer: "Artists receive payment through our secure payment system within 24-48 hours after the event completion. We support multiple payment methods including bank transfers and digital wallets."
    },
    {
      id: 3,
      question: "How is payment handled?",
      answer: "Payments are processed securely through our platform. Venue owners pay upfront when booking, and we hold the funds in escrow until the performance is completed successfully."
    },
    {
      id: 4,
      question: "How do I list myself?",
      answer: "Create an artist profile by signing up, uploading your portfolio, setting your rates, and listing your available dates. Our team will review and approve your profile within 2-3 business days."
    },
    {
      id: 5,
      question: "How do I post a video?",
      answer: "In your artist dashboard, go to 'Portfolio' section and click 'Add Video'. You can upload videos up to 100MB in MP4, MOV, or AVI formats to showcase your talent."
    },
    {
      id: 6,
      question: "Is there a listing fee?",
      answer: "Creating an artist profile is completely free. We only charge a small commission (5%) when you successfully book and complete a performance through our platform."
    },
    {
      id: 7,
      question: "Artists and Venues",
      answer: "We connect talented artists with venues including restaurants, schools, private parties, corporate events, and cultural centers. Both artists and venue owners benefit from our vetted community."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-center text-gray-800 mb-12">FAQs</h2>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                className="w-full text-left py-4 flex justify-between items-center hover:bg-gray-50 px-4 rounded-t transition-colors duration-200"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400 flex-shrink-0">
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-4 pb-4">
                  <div className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;