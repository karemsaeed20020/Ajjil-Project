import React from "react";
import { Play } from "lucide-react";
import Supermarket from "@/public/image164.png";
import LeftDecor from "@/public/wepik-export-20231007094647cClH33.png";   // ⬅️ replace with your left image
import RightDecor from "@/public/wepik-export-20231007094647cClH33.png"; // ⬅️ replace with your right image
import Image from "next/image";

export default function ArabicStepsProcess() {
  const steps = [
    {
      number: "4",
      title: "ادفع بأمان",
      subtitle: "ادفع بطريقتك المفضلة والحصول على نقاط وآيع",
      color: "bg-orange-500",
    },
    {
      number: "3",
      title: "امسح QR",
      subtitle: "امسح QR Code وأستلم فاتورتك",
      color: "bg-orange-500",
    },
    {
      number: "2",
      title: "اختر متطلباتك",
      subtitle: "تصفح المنتجات واختر ما تحتاجه بسهولة",
      color: "bg-orange-500",
    },
    {
      number: "1",
      title: "حمّل التطبيق",
      subtitle: "حمّل تطبيق عبدك على جوالك وسجل حسابك",
      color: "bg-orange-500",
    },
  ];

  return (
    <div dir="ltr" className="min-h-screen bg-[#0196830D] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-[#FF7701] mb-6">كيف نعمل؟</h1>
        </div>

        <div className="max-w-7xl mx-auto mb-16 relative">
          <div className="relative">
            <div className="hidden lg:block absolute -top-16 left-0 w-full h-24 pointer-events-none">
              <svg
                width="100%"
                height="96"
                viewBox="0 0 1200 96"
                className="absolute"
              >
                <path
                  d="M 150 80 Q 300 20 450 80"
                  stroke="#019683"
                  strokeWidth="3"
                  strokeDasharray="8,6"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M 450 80 Q 600 20 750 80"
                  stroke="#019683"
                  strokeWidth="3"
                  strokeDasharray="8,6"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M 750 80 Q 900 20 1050 80"
                  stroke="#019683"
                  strokeWidth="3"
                  strokeDasharray="8,6"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-8 shadow-lg z-20 relative`}
                  >
                    {step.number}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#019683]">
                      {step.title}
                    </h3>
                    <p className="text-xl text-[#545454] leading-relaxed max-w-52">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute lg:-bottom-177 lg:-left-35 w-40 md:w-56 opacity-90">
            <Image src={LeftDecor} alt="Decoration Left" />
          </div>
          <div className="absolute   lg:-bottom-177 lg:-right-55 w-40 md:w-56 opacity-90">
            <Image src={RightDecor} alt="Decoration Right" />
          </div>
        </div>
      </div>

      {/* Video Section - Full Width */}
      <div className="w-screen max-w-6xl mx-auto relative rounded-xl mb-20">
        <div className="relative overflow-hidden">
          <div className="relative">
            {/* Grocery Store Image */}
            <Image
              src={Supermarket}
              alt="متجر البقالة"
              className="w-[1184px] object-cover rounded-xl h-[485.8258056640625px]"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 cursor-pointer group">
                <Play className="w-16 h-16 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Watch Video Text (Responsive Center) */}
            <div className="absolute bottom-30 inset-x-0 flex justify-center">
              <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl text-center">
                Watch Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
