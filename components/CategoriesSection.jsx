'use client'
import Image from 'next/image'
import React from 'react'

import ShopIcon from '@/public/solar_shop-outline.png'
import RestaurantIcon from '@/public/mynaui_cart.png'
import UsersIcon from '@/public/lucide_users.png'

import ShopImg from '@/public/wepik-export-20231007094647cClH2(1).png'
import RestaurantImg from '@/public/wepik-export-20231007094647cClH2.png'
import FruitsImg from '@/public/wepik-export-20231007094647cClH3.png'


const CategoriesSection = () => {
  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Title */}
      <h2 dir="rtl" className="text-2xl md:text-3xl font-bold text-[#019683] mb-3">
        3 فئات... تطبيق واحد يخدم الكل
      </h2>
      <p className="text-[#545454] text-xl mb-10">
        "عَجل" يربط بين المتسوقين، عملاء المطاعم، وأصحاب المتاجر في تطبيق واحد. 
        تجمع بين السرعة، السهولة، والتكامل.
      </p>

      <div className="flex flex-wrap justify-center gap-12 mb-14">
        <div className="bg-[#019683] text-white rounded-2xl overflow-hidden flex flex-col items-center w-[348.67px] h-[520px]">
          <div className="w-16 h-16 mt-6 relative lg:top-8">
            <Image src={ShopIcon} alt="Shop Icon" fill className="object-contain" />
          </div>
          <div className="p-4 flex-grow flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">أصحاب المتاجر</h3>
            <p className="text-xl mt-3">تسوق أسرع، بدون طوابير أو زحام</p>
          </div>
          <div className="w-full h-[220px] relative ">
            <Image src={ShopImg} alt="Shop Owners" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl overflow-hidden flex flex-col items-center w-[348.67px] h-[520px]">
          <div className="w-16 h-16 mt-6 relative top-8">
            <Image src={RestaurantIcon} alt="Restaurant Icon" fill className="object-contain" />
          </div>
          <div className="p-4 flex-grow flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold leading-relaxed">عملاء مطاعم  <br />والكافيهات</h3>
            <p className="text-xl mt-3">طلب ودفع بضغطة زر واحدة</p>
          </div>
          <div className="w-full h-[220px] relative ">
            <Image src={RestaurantImg} alt="Restaurants" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-[#FF7701] text-white rounded-2xl overflow-hidden flex flex-col items-center w-[348.67px] h-[520px]">
          <div className="w-16 h-16 mt-6 relative top-8">
            <Image src={UsersIcon} alt="Users Icon" fill className="object-contain" />
          </div>
          <div className="p-4 flex-grow flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">المتسوقين</h3>
            <p className="text-xl mt-3">تسوق سريع بدون انتظار في الطوابير</p>
          </div>
          <div className="w-full h-[220px] relative ">
            <Image src={FruitsImg} alt="Shoppers" fill className="object-cover" />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CategoriesSection
