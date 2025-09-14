'use client';

import Image from 'next/image';
import Logo from '@/public/Group.png';

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#111827] text-white py-10 px-4 md:px-25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-start">
          <div className="mb-4">
            <Image
              src={Logo}
              alt="Ajil Logo"
              width={300}
              height={64}
              className="object-contain"
            />
          </div>

          <p className="text-sm text-gray-300 mb-3 max-w-xs leading-relaxed">
            تطبيق ذكى يربط أصحاب المتاجر بالموردين <br /> لإدارة المنتجات والطلبات بسهولة وفعالية
          </p>

          <div className="flex flex-row space-x-4 space-x-reverse mt-4">
            {[
              { name: 'Facebook', path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' },
              { name: 'Snapchat', path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.895c-.607 0-1.1-.49-1.1-1.105 0-.614.492-1.105 1.1-1.105s1.1.491 1.1 1.105c0 .615-.493 1.105-1.1 1.105zm8 6.895h-1.998v-2.867c0-.976-.118-1.774-1.118-1.774-1.198 0-1.394.93-1.394 1.774v2.867h-1.998v-6h1.998v1.025h.046c.477-.904 1.637-1.88 3.368-1.88 3.736 0 4.277 2.476 4.277 5.686v3.314z' },
              { name: 'Instagram', path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.895c-.607 0-1.1-.49-1.1-1.105 0-.614.492-1.105 1.1-1.105s1.1.491 1.1 1.105c0 .615-.493 1.105-1.1 1.105zm8 6.895h-1.998v-2.867c0-.976-.118-1.774-1.118-1.774-1.198 0-1.394.93-1.394 1.774v2.867h-1.998v-6h1.998v1.025h.046c.477-.904 1.637-1.88 3.368-1.88 3.736 0 4.277 2.476 4.277 5.686v3.314z' },
              { name: 'Twitter/X', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.954-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.66 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.219c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.01 10.01 0 0024 4.59z' },
              { name: 'LinkedIn', path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.895c-.607 0-1.1-.49-1.1-1.105 0-.614.492-1.105 1.1-1.105s1.1.491 1.1 1.105c0 .615-.493 1.105-1.1 1.105zm8 6.895h-1.998v-2.867c0-.976-.118-1.774-1.118-1.774-1.198 0-1.394.93-1.394 1.774v2.867h-1.998v-6h1.998v1.025h.046c.477-.904 1.637-1.88 3.368-1.88 3.736 0 4.277 2.476 4.277 5.686v3.314z' },
              { name: 'YouTube', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.954-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.66 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.219c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.01 10.01 0 0024 4.59z' }
            ].map((icon, index) => (
              <a
                key={index}
                href="#"
                aria-label={icon.name}
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:mr-25"> 
          <h3 className="text-xl font-bold text-[#FF7701] mb-5">الشركة</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">الرئيسية</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">المهارات</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">سجل متحرك</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">عن عمل</a></li>
          </ul>
        </div>

        <div className='md:mr-10'>
          <h3 className="text-xl font-bold text-[#FF7701] mb-5">الدعم</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">الاستفسارات</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">تواصل معنا</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">مركز المساعدة</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">الدعم التقني</a></li>
          </ul>
        </div>

        <div >
          <h3 className="text-xl font-bold text-[#FF7701] mb-5">معلومات عامة</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">التعليمات</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors inline-block">سياسة الاسترداد</a></li>
          </ul>
        </div>

      </div>

      {/* === Copyright === */}
      <div className="mt-5 p-5 relative top-10  border-t-2 border-gray-700 text-sm text-white text-center">
        <span>© 2025 Ajil Company. All rights reserved</span>
      </div>
    </footer>
  );
}