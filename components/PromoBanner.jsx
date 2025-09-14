'use client';
import Image from 'next/image';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import CartImg from '@/public/shopping-bag-basket-zero-waste-eco-composition-with-text-tag-discount-flying-products-trolley-cart-illustration1.png';
import BannerBg from '@/public/BG.png';

const PromoBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
      <div
        dir="rtl"
        className="relative  rounded-2xl bg-[#F2FAF9] overflow-hidden h-[350px] sm:h-[400px] md:h-[400px] lg:h-[310px] flex items-center"
        style={{ direction: 'rtl' }}
      >
        <Image
          src={BannerBg}
          alt="Promo Background"
          fill
          className="object-cover "
          priority
          sizes="(max-width: 1023px) 100vw, 100vw"
        />

        <div className="relative z-10 w-full px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">

          <div className="text-center lg:text-right w-full lg:max-w-lg space-y-2 lg:space-y-3 flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <h3 className="text-sm sm:text-base font-normal text-[#FF7701]">
              عروض الأسبوع
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#545454] leading-tight">
              عروض لا تُفوت
            </h2>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-[#FF7701] leading-tight">
              خصوماتك الأسبوعية على البقالة
            </p>
            <p className="text-sm sm:text-base md:text-base lg:text-xl text-[#545454] leading-relaxed max-w-md lg:max-w-none">
              استمتع بأفضل الأسعار على منتجاتك المفضلة كل أسبوع.
            </p>

            <button className="cursor-pointer flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium mt-3 lg:mt-4 transition-all">
              تسوق الآن
              <ArrowLeft size={16} className="mt-0.5" />
            </button>
          </div>

          <div className="hidden lg:block relative w-[430px] h-[310px] -mr-8">
            <Image
              src={CartImg}
              alt="Cart Offer"
              fill
              className="object-contain"
              priority
              sizes="430px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;