'use client';

import Image from 'next/image';
import MarketImage from '@/public/image25.png';
import MissionIcon from '@/public/Vector.png';
import VisionIcon from '@/public/Icon.png';

export default function LandingPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#F2FAF9] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[600px] h-[400px] sm:h-[500px] md:h-[556px] rounded-xl overflow-hidden">
            <Image
              src={MarketImage}
              alt="سوق عجل الذكي"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          <div className="absolute bottom-[-30px] w-[250px] sm:w-[290px] left-1/2 transform -translate-x-1/2">
            <div className="bg-white border-2 border-[#FF7701] rounded-xl p-3 sm:p-4 shadow-lg text-center">
              <p className="text-orange-500 font-bold text-lg sm:text-xl md:text-2xl tracking-wider">
                SCAN. SHOP. GO.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8 bg-white p-6 w-full max-w-7xl mx-auto rounded-md">

          {/* Title */}
          <div className="text-right">
            <h1 className="text-3xl md:text-5xl text-[#FF7701] font-bold leading-tight mb-6 text-right" dir="rtl">
  أفضل تطبيق{" "}
  <span className="bg-[#FF7701] text-white rounded inline-block px-2 py-1">تسوق</span>{" "}
  <br />
  ذكي ذاتي
</h1>
            <p className="text-[#545454] text-base md:text-xl leading-relaxed">
              "عجّل" هو تطبيق متكامل يربط بين العملاء، الكاشير، والمورد في نظام واحد ذكي يدعم تجربة تسوق أسرع، آمنة، ومربحة لكافة الأطراف.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-end text-right h-[260px] sm:h-[280px]">
              <Image
                src={VisionIcon}
                alt="رسالتنا"
                width={40}
                height={40}
                className="mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">رسالتنا</h3>
              <p className="text-gray-600 text-base leading-relaxed">
نساعد عملاءنا على تقليل وقت الشراء، وتحقيق أعلى كفاءة تشغيلية للموردين والمتاجر من خلال حلول رقمية متطورة.              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-end text-right h-[260px] sm:h-[280px]">
              <Image
                src={MissionIcon}
                alt="رؤيتنا"
                width={40}
                height={40}
                className="mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">رؤيتنا</h3>
              <p className="text-gray-600 text-base leading-relaxed">
نجعل إدارة عمليات البيع والشراء داخل المحلات والمطاعم أكثر ذكاءً وسهولة، عبر تقنيات سحابية تربط جميع الأطراف في وقت واحد.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
