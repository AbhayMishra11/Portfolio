import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contacts = () => {

  const accounts = {
    github: 'https://github.com/AbhayMishra11',
    facebook: 'https://www.facebook.com/abhaykumar.mishra.353250',
    twitter: 'https://x.com/Abhay000011',
    instagram: 'https://www.instagram.com/mishraabhaykumar99/',
    linkedin: 'https://www.linkedin.com/in/abhay-kumar-miahra-304ab3237/'
  }

  const socialMediaPlatforms = ['facebook', 'twitter', 'linkedin', 'github', 'instagram'];

  return (
    <footer className='max-[700px]:hidden fixed bottom-1 m-2 z-20 rounded-xl flex flex-col gap-2 items-center justify-center '>
      <div className="social-links flex flex-col gap-2 justify-center items-center">
        {socialMediaPlatforms.map((platform, index) => (
          <Link key={index} href={accounts[platform]} passHref className='hover:up p-1 bg-[#f6f6f6] rounded-lg border shadow-xl'>
            <img className='w-[24px] h-[24px]' src={`/${platform}.svg`} alt={platform} />
          </Link>
        ))}
      </div>
        <div className="min-h-11 w-[2px] bg-[#1e0f74]"></div>
    </footer>
  )
}

export default Contacts
