import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/Hero";
import Image from "next/image";
import Banner from "@/public/image.png";
import Selling from '@/public/Grouppp.png';
import { Shield, Bell, Smartphone, Clock } from 'lucide-react';
import HeroBanner from "@/components/CategorySection";
import Footer from "@/components/Footer";
import FAQPage from "@/components/FAQPage";
import DownloadSection from "@/components/DownloadSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromoBanner from "@/components/PromoBanner";
import ContactPage from "@/components/Contact";
import AppSection from "@/components/AppSection";
import LandingPage from "@/components/LandingPage";
import ArabicStepsProcess from "@/components/HowItWorks";
import AjilFeaturesSection from "@/components/AjilFeaturesSection";

// SVG Icons

export default function Home() {
   const features = [
    {
      icon: Shield,
      title: "أمان عالي",
      description: "حماية متقدمة لبياناتك ومعلوماتك الحساسة"
    },
    {
      icon: Bell,
      title: "تنبيهات فورية",
      description: "إشعارات لآخر المخزون والطلبات الجديدة"
    },
    {
      icon: Smartphone,
      title: "تطبيق جوالك",
      description: "إدارة أعمالك من أي مكان وفي أي وقت"
    },
    {
      icon: Clock,
      title: "دعم ٢٤/٧",
      description: "فريق دعم متاح على مدار الساعة لمساعدتك"
    }
  ];
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
 <section className="bg-[#F2FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-2">
          <LandingPage />
        </div>
      </section>
      <div className="relative w-full">
  <Image
    src={Banner}
    alt="Banner"
    width={1920}   // 👈 original image width
    height={600}   // 👈 original image height
    priority
    className="w-full h-auto object-cover"
    quality={100}
  />
</div>
     <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
          <AjilFeaturesSection />
        </div>
      </section>
 <section >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
          <HeroBanner />
        </div>
      </section>
 <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
          <CategoriesSection />
        </div>
      </section>
<section >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 ">
          <PromoBanner />
        </div>
      </section>
      <ArabicStepsProcess />
<DownloadSection />
<section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
          <AppSection />
        </div>
      </section>
<FAQPage />
<ContactPage />

<Footer />
    </div>
  );
}


//  <div className="py-30 px-4">
        // <div className="text-center">
        //   <h2 className="text-4xl text-[#019683] font-bold">لماذا  <span className="text-[#FF7701]">"عجّل"</span></h2>
        //   <p className="text-[#545454] mt-4 font-semibold">
        //     تطبيق ذكي يوفّر لك السرعة، الأمان، العروض، والدعم على مدار الساعة — كل ده في تطبيق واحد متكامل.
        //   </p>
        // </div>
//         <div className="max-w-7xl mx-auto mt-8"> 
          // <div className="relative">
          //   <Image src={Selling} alt="Test"  />
          // </div>
//           <div>
            
//           </div>
//         </div>
//       </div>