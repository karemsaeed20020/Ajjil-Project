import Image from "next/image";
import PhoneImage from "@/public/image151.png";
import BannerBg from "@/public/BG.png";


export default function AppSection() {
  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
      <div className="bg-[#01968340] rounded-3xl p-3 md:p-6 relative overflow-hidden">
        

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src={PhoneImage}
                alt="Ajil App on Phone"
                width={300}
                height={600}
                className="w-full lg:w-[300px] max-w-xs sm:max-w-sm md:max-w-md h-auto lg:relative lg:top-10 object-contain"
              />
            </div>
          </div>

          <div className="text-right space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#019683] leading-tight">
              حمّل تطبيق <span className="text-[#FF7701]">عَجّل</span> وابدأ تجربتك الذكية
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              سجّل وتسوق في أقل من دقيقة.
            </p>
            <p className="text-lg text-[#019683] font-semibold">
              قم بتنزيل التطبيق من عي:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">H</span>
                </div>
                <div className="ml-2 text-right">
                  <div className="text-xs opacity-80">احصل عليه من</div>
                  <div className="text-sm font-semibold">AppGallery</div>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="#4285F4"
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.81,15.12L6.05,21.34C5.79,21.5 5.50,21.57 5.21,21.57C4.60,21.57 4.03,21.26 3.84,21.85L13.69,12L16.81,15.12Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M20.16,10.85L16.81,8.88L13.69,12L16.81,15.12L20.16,13.15C20.73,12.81 21.08,12.19 21.08,11.50C21.08,10.81 20.73,10.19 20.16,10.85Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M13.69,12L3.84,2.15C4.03,1.74 4.60,1.43 5.21,1.43C5.50,1.43 5.79,1.50 6.05,1.66L16.81,8.88L13.69,12Z"
                    />
                  </svg>
                </div>
                <div className="ml-2 text-right">
                  <div className="text-xs opacity-80">متوفر على</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                    <path
                      fill="currentColor"
                      d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                    />
                  </svg>
                </div>
                <div className="ml-2 text-right">
                  <div className="text-xs opacity-80">تحميل من</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}