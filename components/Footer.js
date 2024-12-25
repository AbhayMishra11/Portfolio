import React from 'react'
import localFont from 'next/font/local';

const Boldwrite = localFont({
    src: "./fonts/Iceberg.ttf",
    variable: "--font-iceberg",
    weight: "100 900",
});

const Footer = () => {
  return (
    <>
    <div className={`${Boldwrite.className} bg-slate-700 flex flex-col gap-3 justify-center items-center py-4 text-white text-md`}>
    <div> Thanks for reading my portfolio! </div>
    <div>Copyright © Portfolio | All Right Reserve</div>
    </div>
    </>
  )
}

export default Footer
