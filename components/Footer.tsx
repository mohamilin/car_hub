import Image from 'next/image'
import { footerLinks } from '@/contants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start gap-6'>
                <Image src="/logo.svg" alt="logo" height={18} width={118} className='object-contain' />
                <p className='text-base text-gray-700'>Car Hub <br/> All rights reserved &copy;</p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((link, index) => (
                    <div key={index} className='footer__link' >
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map((item, subIndex) => (
                            <Link href={item.url} key={subIndex}
                            className='text-gray-500'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            
        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>@2023 Car Hub. All Rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href={"/"}>
                        Privicy Policy
                    </Link>
                    <Link href={"/"}>
                            Term of Use
                    </Link>
                </div>

            </div>

    </footer>
  )
}
