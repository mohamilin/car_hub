import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

export default function Navbar() {
  return (
    <header className='w-full z-10 absolute'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={"/"}>
                <Image src={"/logo.svg"} className='object-contain' width={118} height={18} alt="logo" />
            </Link>
                <CustomButton
                    title='Login'
                    btnType="button"
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />
        </nav>
    </header>
  )
}
