
import React from 'react';
import { Shield, Bell, Smartphone, Clock } from 'lucide-react';

const FeaturesSection = () => {
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
    <div className="py-12 px-4 bg-[#F2FAF9]" dir='ltr'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="p-8 text-center"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 text-5xl rounded-full flex items-center justify-center">
                    <IconComponent className="w-64 h-64 text-orange-500" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#019683] mb-4" dir="rtl">
                  {feature.title}
                </h3>
                
                <p className="text-[#545454] leading-relaxed text-2xl font-normal" dir="rtl">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;