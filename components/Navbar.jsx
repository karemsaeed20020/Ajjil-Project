'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '@/public/Group.png';

const Navbar = () => {
  const menuItems = [
    "الرئيسية",
    "عن عجل",
    "العمليات",
    "الأسئلة الشائعة",
    "تواصل معنا"
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`
        bg-[#019683] 
        fixed top-0 left-0 w-full z-50 
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-4">
          <div className="flex items-center">
            <Image src={Logo} alt='Logo' width={205} height={48} className="h-auto" />
          </div>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6 space-x-reverse">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white text-xl font-normal hover:text-gray-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='hidden lg:flex items-center space-x-4 space-x-reverse'>
            <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg cursor-pointer font-semibold hover:bg-white hover:text-[#019683] transition-all whitespace-nowrap">
              سجل متجرك
            </button>
            <button className='bg-[#FF7701] text-white px-6 py-2 rounded-lg cursor-pointer font-semibold hover:bg-[#e66601] transition-all whitespace-nowrap'>
              ابدأ الآن
            </button>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-6 border-t border-white/20">
            <ul className="space-y-4 text-right mb-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="block text-white text-xl font-normal hover:text-gray-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-3 px-4">
              <button 
                className="text-white bg-transparent border border-white py-3 rounded-lg font-semibold hover:bg-white hover:text-[#019683] transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                سجل متجرك
              </button>
              <button 
                className="bg-[#FF7701] text-white py-3 rounded-lg font-semibold hover:bg-[#e66601] transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ الآن
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;