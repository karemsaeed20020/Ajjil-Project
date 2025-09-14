'use client';
import React, { useState } from 'react';
import Food from '@/public/image502.png';
import Slider from '@/public/slider_home_1_4.png';
import Frame from '@/public/home_01_sl_3.png';
import Slider1 from '@/public/home_01_sl_2.png';
import Image from 'next/image';

const DownloadSection = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-4 py-10 lg:px-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3">

        <div className="lg:col-span-7 w-full lg:relative lg:left-2 flex flex-col gap-4 lg:gap-2">

          <div className="relative rounded-2xl shadow-lg overflow-hidden w-full lg:w-[580px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[249px] mx-auto lg:mx-0">
            <Image
              src={Slider1}
              alt="nuts"
              fill
              quality={100}
              priority
              sizes="(max-width: 1023px) 100vw, 580px"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827]">Premium Honeynuts</h3>
              <p className="text-xs sm:text-sm text-[#111827]">100% Salted Organic Nuts</p>
              <p className="text-xl sm:text-2xl text-[#EB3131] font-bold mt-2"> $15.00</p>
              <button
                onClick={() => { setClicked(true); alert("تسوق الآن clicked"); }}
                className="cursor-pointer mt-2 sm:mt-3 inline-block bg-[#FF7701] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm"
              >
                تسوق الآن
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-5">

            <div className="relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[244px] w-full sm:w-[292px] mx-auto sm:mx-0">
              <Image
                src={Frame}
                alt="diaper"
                fill
                quality={100}
                sizes="(max-width: 639px) 100vw, 272px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 sm:left-10 p-2 sm:p-4 text-white text-center">
                <h4 className="font-bold text-base sm:text-lg">New Baby Diaper</h4>
                <p className="text-xs sm:text-sm">Top Quality Product</p>
              </div>
            </div>

            <div className="relative lg:right-10 rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[244px] w-full sm:w-[272px] mx-auto sm:mx-0">
              <Image
                src={Slider}
                alt="facewash"
                fill
                quality={100}
                sizes="(max-width: 639px) 100vw, 272px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 p-2 sm:p-4">
                <h4 className="font-bold text-[#111827] text-base sm:text-lg">Dark wash FaceWash</h4>
                <p className="text-xs sm:text-sm text-[#111827]">All Fixed Size</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative lg:right-22 w-full lg:w-[576px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[525px] mt-8 lg:mt-0 rounded-2xl shadow-lg overflow-hidden mx-auto lg:mx-0">
          <Image
            src={Food}
            alt="food"
            fill
            quality={100}
            priority
            sizes="(max-width: 1023px) 100vw, 576px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end p-4 sm:p-6 text-right">
            <div className="max-w-xs sm:max-w-sm md:max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold text-[#FF7701] mb-1">طازج؟ جاهز؟ عَجِّلها</h2>
              <p className="text-[#111827] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 font-normal leading-relaxed">
                اختر وامسح وضعه من تطبيق عَجل، وخلي <br className="hidden sm:inline" /> تسوقك داخل المحل أسرع وأسهل.
              </p>
              <button
                onClick={() => alert("اطلب الآن clicked")}
                className="bg-[#FF7701] text-white px-4 sm:px-5 py-2 rounded-lg shadow-md text-sm sm:text-base"
              >
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      {clicked && <p className="mt-4 text-xs sm:text-sm text-slate-500 text-center">تم النقر على الزر (للتجربة)</p>}
    </div>
  );
};

export default DownloadSection;