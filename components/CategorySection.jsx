// src/components/HeroBanner.tsx
'use client';

import Image from 'next/image';
import HeBanner from '@/public/image494.png';
import HeBanner1 from '@/public/image496.png';

export default function HeroBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 py-8 w-full max-w-7xl mx-auto">
      
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[570px] h-[300px] sm:h-[340px] md:h-[370px] transition-transform duration-300 hover:shadow-xl">
        <Image
          src={HeBanner}
          alt="Fresh Vegetables - Weekly Offer"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 570px"
          priority
        />
        <div className="absolute top-6 sm:top-8 md:top-22 right-4 sm:right-6 text-right space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#019683] leading-tight">
            وفر أكتر كل أسبوع!
          </h3>
          <p className="text-[#545454] font-normal text-lg sm:text-xl md:text-2xl leading-7 md:leading-10">
            احصل على خصم 40% على <br /> الخضراوات الطازجة المختارة
          </p>
          <button className="font-bold px-4 sm:px-6 py-2 mt-2 sm:mt-3 border border-[#019683] text-[#019683] cursor-pointer rounded-md text-sm sm:text-base">
            تسوق الآن
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-[566px] h-[300px] sm:h-[340px] md:h-[366px] bg-blue-50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
        <Image
          src={HeBanner1}
          alt="Fresh Vegetables - Save More"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 566px"
          priority
        />
        <div className="absolute top-6 sm:top-8 md:top-22 right-4 sm:right-6 text-right space-y-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#FF7701] leading-tight">
            عرض أسبوعي
          </h3>
          <p className="text-[#545454] font-normal text-lg sm:text-xl md:text-2xl leading-7 md:leading-10">
            طازجة وجودة عالية الآن <br /> بخصم 40%
          </p>
          <button className=" px-4 sm:px-6 py-2 mt-2 sm:mt-3 border border-[#FF7701] text-[#FF7701] cursor-pointer rounded-md font-bold text-sm sm:text-base">
            تسوق الآن
          </button>
        </div>
      </div>
    </div>
  );
}