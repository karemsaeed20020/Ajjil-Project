import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

function SnapchatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.405.042-3.441.219-.937 1.404-5.945 1.404-5.945s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001.017.001z"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div dir="ltr" className="min-h-screen bg-[#0196830D] flex flex-col items-center justify-center px-4 py-20 md:py-32">
      <div className="text-center mb-12 px-2">
        <h1 className="text-2xl md:text-4xl font-bold text-[#019683] mb-4">تواصل معنا</h1>
        <p className="text-[#545454] text-base md:text-xl max-w-4xl mx-auto leading-relaxed lg:mb-10">
          فريقنا جاهز لمساعدتك في أي وقت. تواصل معنا عبر القنوات المختلفة أو أرسل لنا رسالة مباشرة.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 items-start">
        
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>

        <div  className="w-full md:w-1/2 space-y-13 flex flex-col justify-between">
          <div>
            <h2 dir="rtl" className="text-xl md:text-2xl font-semibold text-[#019683] mb-6">معلومات التواصل:</h2>
            <div className="space-y-9 text-sm md:text-lg">
              <div className="flex items-center justify-end gap-3 text-[#545454]">
                <span>+966 50 123 4567</span>
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-500 flex-shrink-0" />
              </div>
              
              <div className="flex items-center justify-end gap-3 text-[#545454]">
                <span>info@ajil.sa</span>
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500 flex-shrink-0" />
              </div>
              
              <div className="flex items-center justify-end gap-3 text-[#545454]">
                <span>الرياض، المملكة العربية السعودية</span>
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500 flex-shrink-0" />
              </div>
              
              <div className="flex items-center justify-end gap-3 text-[#545454]">
                <span>خدمة عملاء 24/7</span>
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-orange-500 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div dir="rtl">
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-6">تابعنا على:</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Facebook, url: "https://facebook.com", label: "Facebook" },
                { Icon: SnapchatIcon, url: "https://snapchat.com", label: "Snapchat" },
                { Icon: Instagram, url: "https://instagram.com", label: "Instagram" },
                { Icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Twitter, url: "https://twitter.com", label: "Twitter" },
                { Icon: Youtube, url: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
