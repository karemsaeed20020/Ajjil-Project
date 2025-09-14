import React from 'react';
import Image from 'next/image';
import HeroImage from '@/public/medium-shot-islamic-man-market.png';
import CoverImage from '@/public/cover.png';
import Skew from '@/public/Groups.png'; 

const HeroSection = () => {
  return (
    <>
      <section dir="ltr" className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={CoverImage}
            alt="خلفية تطبيق عجل"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>

        <div className="container mx-auto px-4 pt-28 lg:pt-32 pb-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">

            <div className="hidden lg:block order-1">
              <div className="relative w-full max-w-lg h-[600px] mx-auto">
                
                <div className="absolute inset-0 top-[150px] -z-10">
                  <Image
                    src={Skew}
                    alt="إطار مائل زخرفي"
                    layout="responsive"
                    width={800}
                    height={600}
                    className="transform scale-160 skew-x-6"
                  />
                </div>

                <div className="absolute bottom-[-63px] left-1/3 -translate-x-1/2 w-full max-w-lg px-4">
                  <div className="relative w-[550px] rounded-3xl">
                    <Image
                      src={HeroImage}
                      alt="رجل يستخدم تطبيق عجل للتسوق الذكي"
                      layout="responsive"
                      width={550}
                      height={600}
                      className="object-cover w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right order-2 lg:order-2 flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold text-white mb-6 sm:mb-8 leading-tight max-w-4xl">
                تسوق بذكاء مع عجّل
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-8 sm:mb-10 leading-relaxed max-w-xl lg:max-w-2xl">
                تطبيق التسوق الذكي - تسوق بدون طوابير، ادفع
                <br className="hidden sm:inline" />
                بأمان، واحصل على نقاط ولاء
              </p>

              <div dir="rtl" className="flex flex-row flex-wrap gap-4 sm:gap-6  justify-center lg:justify-start lg:relative lg:left-35">
                <button className="bg-[#FF7701] cursor-pointer hover:bg-[#e66601] text-white px-6 sm:px-10 md:px-18 py-3 rounded text-base sm:text-lg md:text-xl font-bold whitespace-nowrap min-w-[140px] sm:min-w-[160px]">
                  ابدأ الآن
                </button>
                <button className="bg-white cursor-pointer text-[#FF7701] border border-[#FF7701] px-6 sm:px-10 md:px-16 py-3 rounded text-base sm:text-lg md:text-xl font-bold transition-all whitespace-nowrap min-w-[140px] sm:min-w-[160px]">
                  سجل متجرك
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;