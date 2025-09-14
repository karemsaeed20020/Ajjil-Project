import React from "react";
import Image from "next/image";
import Selling from "@/public/Grouppp.png";

const ShieldIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2l8 3v7c0 5.5-3.84 10.74-8 12-4.16-1.26-8-6.5-8-12V5l8-3z" />
  </svg>
);

const LightningIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);

const GiftIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20,12 20,22 4,22 4,12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);


const AjilFeaturesSection = () => {
  const features = [
    {
      icon: ShieldIcon,
      title: "أمان مضمون",
      description: "حماية شاملة لبياناتك ومدفوعاتك",
    },
    {
      icon: LightningIcon,
      title: "سرعة فائقة",
      description: "تسوق واشتر في دقائق معدودة",
    },
    {
      icon: GiftIcon,
      title: "مكافآت وعروض",
      description: "برنامج ولاء مع مكافآت حصرية",
    },
    { icon: ClockIcon, title: 'متاح دائماً', description: 'خدمة على مدار الساعة طوال أيام الأسبوع' }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-[#019683] font-bold">
            لماذا <span className="text-[#FF7701]">"عجّل"</span>
          </h2>
          <p className="text-[#545454] mt-5 mb-12 font-semibold text-lg">
            تطبيق ذكي يوفّر لك السرعة، الأمان، العروض، والدعم على مدار الساعة —
            كل ده في تطبيق واحد متكامل.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12" dir="ltr">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center px-3 relative top-[-50px]"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-orange-500" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#019683] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-[#545454] leading-relaxed text-base md:text-lg font-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <Image
              src={Selling}
              alt="عامل توصيل عجّل"
              width={400}
              height={531}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AjilFeaturesSection;
