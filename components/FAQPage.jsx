'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Star from '@/public/solar_star-line-duotone.png';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "كيف أبدأ في استخدام عَجّل؟",
      answer: "ببساطة دخّل التطبيق وسجّل حسابك. للموردين، يمكنك التسجيل من خلال النموذج أدناه.",
    },
    {
      question: "هل هناك رسوم على الاستخدام؟",
      answer: "ببساطة دخّل التطبيق وسجّل حسابك. للموردين، يمكنك التسجيل من خلال النموذج أدناه.",
    },
    {
      question: "هل البيانات آمنة؟",
      answer: "ببساطة دخّل التطبيق وسجّل حسابك. للموردين، يمكنك التسجيل من خلال النموذج أدناه.",
    },
    {
      question: "ماذا لو احتجت مساعدة في استخدام التطبيق؟",
      answer: "ببساطة دخّل التطبيق وسجّل حسابك. للموردين، يمكنك التسجيل من خلال النموذج أدناه.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen text-right rtl font-sans" dir='ltr'>
      {/* Header */}
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#019683] mb-3">
          الأسئلة الشائعة
        </h1>
        <p className="text-[#545454] text-2xl mb-8">
          إجابات شاملة لأكثر الأسئلة تكراراً حول منصة عَجّل وخدماتها
        </p>

        <div className="space-y-6 max-w-7xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-xl border border-[#01968340]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 relative top-1 text-left focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-[#019683] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="flex items-center relative top-1 space-x-2">
                  <span className="text-[#019683] font-medium text-2xl">{faq.question}</span>
                  <Image
                    src={Star}
                    alt="Star"
                    width={20}
                    height={20}
                    className="text-yellow-400"
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`px-6 pb-4 font-normal transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t-2 border-[#E0F2F1]">
                  <p className="text-[#545454] text-right text-xl leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}