"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import Link from 'next/link';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillSection from '@/components/SkillSection';

const Lightwrite = localFont({
  src: "./fonts/TulpenOne.ttf",
  variable: "--font-tulpenone",
  weight: "100 900",
});
const Boldwrite = localFont({
  src: "./fonts/Iceberg.ttf",
  variable: "--font-iceberg",
  weight: "100 900",
});
const Borel = localFont({
  src: "./fonts/Borel.ttf",
  variable: "--font-borel",
  weight: "100 900",
});


export default function Home() {
  const elementRef = useRef([]);
  const idRef = useRef([]);
  //nav on below md:
  const [showdropdown, setshowdropdown] = useState(false)
  const dropdownRef = useRef(null)
  //options for observer
  const options = {
    rootMargin: "0px",
    threshold: 0.3
  };
  //observer for nav and page
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = elementRef.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          idRef.current[index]?.classList.add('hover');
          if (index > 0) {
            idRef.current[index - 1]?.classList.remove('hover');
          }
          if (index < idRef.current.length - 1) {
            idRef.current[index + 1]?.classList.remove('hover');
          }
        }
      });
    }, options);

    elementRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  //adding the event which trigger on touch(it close the menu on event trigger)
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setshowdropdown(false)
      }
    };
    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  //Dynamic color for eact sections
  const getBackgroundClass = (section) => {
    switch (section) {
      case 'home':
        return 'bg-[#f7f7f7]';
      case 'about':
        return 'bg-[#eaeaea]';
      case 'education':
        return 'bg-[#d9d9d9]';
      case 'skill':
        return 'bg-[#c8c8c8]';
      case 'projects':
        return 'bg-[#b7b7b7]';
      case 'contact':
        return 'bg-[#a6a6a6]';
      default:
        return '';
    }
  }


  //for links in home's left section
  const accounts = {
    github: 'https://github.com/AbhayMishra11',
    facebook: 'https://www.facebook.com/abhaykumar.mishra.353250',
    twitter: 'https://x.com/Abhay000011',
    instagram: 'https://www.instagram.com/mishraabhaykumar99/',
    linkedin: 'https://www.linkedin.com/in/abhay-kumar-miahra-304ab3237/'
  }

  const socialMediaPlatforms = ['facebook', 'twitter', 'linkedin', 'github', 'instagram'];

  return (
    <>
      <nav>
        <div className='flex z-40 justify-center md:h-[11vh] h-[8vh] w-full'>
          <div className="nav z-40 md:px-20 px-4 bg-[#ffffff] fixed top-0 flex w-full md:h-[11vh] h-[8vh] items-center justify-between">
            <div className="logo text-xl font-bold">
              <Image src={'/logo.png.webp'} alt='logo' width={150} height={100} priority />
            </div>

            <div onClick={() =>
              setshowdropdown(true)} className={`z-40 hidden max-md:inline`}>
              <Image className={`${showdropdown ? "hidden" : ""}`} src="/navOpen.svg" width={24} height={24} alt='menu' priority />
            </div>
            {/* menubar */}
            <div ref={dropdownRef} className={`options z-30 ${showdropdown ? "" : "max-md:hide"} max-md:belowMd max-md:rounded-xl flex items-center justify-between md:gap-11 gap-5`}>
              <div onClick={() => setshowdropdown(false)} className="z-40 absolute top-0 right-3 hidden max-md:inline">
                <Image src="/navClose.svg" width={24} height={24} alt='menu' priority />
              </div>
              {['Home', 'About', 'Education', 'Skill'].map((item, index) => (
                <button
                  key={index}
                  ref={el => idRef.current[index] = el}
                  className='font-semibold text-sm hover:text-[#3e57bc]'
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Main sections */}
      <main className="grid">
        {['home', 'about', 'education', 'skill'].map((section, index) => (
          <div
            key={index}
            ref={el => elementRef.current[index] = el}
            id={section}
            className={`md:min-h-[89vh] min-h-[92vh] w-full ${getBackgroundClass(section)}`}
          >
            {section === 'home' ? (
              <div className="containers">
                <div className="flex px-4">
                  <div className="Details z-20 h-screen w-full min-lg:w-[60vw] flex flex-col items-center justify-center">
                    <div className='flex flex-col min-lg:justify-center gap-5'>
                      <h3 className={`${Boldwrite.className} text-lg`}>Hello! I am</h3>
                      <h1 className={`${Lightwrite.className} text-7xl ml-16`}>Abhay Kumar Mishra</h1>
                      <h2 className={`${Borel.className} text-3xl`}>A Passionate Developer.</h2>
                      <h2 className={`${Boldwrite.className} text-xl`}>Creating web applications using modern technologies.</h2>
                    </div>
                    <div className="btns flex justify-center min-w-fit items-center gap-3">
                      <div className="min-w-16 h-[1px] bg-[#1e0f74]"></div>
                      <div className="social-links flex md:gap-5 gap-1 my-7 justify-center items-center">
                        {socialMediaPlatforms.map((platform, index) => (
                          <Link key={index} href={accounts[platform]} passHref className='hover:up p-1 rounded-lg border shadow-xl'>
                            <img className='w-[24px] h-[24px]' src={`/${platform}.svg`} alt={platform} />
                          </Link>
                        ))}
                      </div>
                      <div className="min-w-16 h-[1px] bg-[#1e0f74]"></div>
                    </div>
                  </div>
                  <div className="image max-[1024px]:hidden relative overflow-hidden h-[89vh] w-full">
                    <img className="w-full h-full object-cover" src="/man.webp" alt="Abhay Kumar Mishra" />
                  </div>
                </div>
              </div>
            ) : section === 'about' ? (
              // About section starts from here
              <div className="containers flex items-center justify-center md:min-h-[89vh] min-h-[92vh]">               
                  <AboutSection />
              </div>
            ) : section === 'education' ? (
              // Education section starts from here
              <div className="containers flex items-center justify-center md:min-h-[89vh] min-h-[92vh] py-6 educationBG">
                  <EducationSection />
              </div>
            ) : section === 'skill' ? (
              <div className="containers flex items-center justify-center md:min-h-[89vh] min-h-[92vh] py-6 educationBG">
                  <SkillSection />
              </div>
            ) : null
            }
          </div>
        ))}
      </main>
    </>
  );
}
