"use client"
import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link"

export default function NavBar(){

    useEffect(() => {
        const handleAnimationScroll = () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 0){
              nav.classList.add('sticky', window.scrollY > 0);
            }else{
              nav.classList.remove('sticky', window.scrollY > 0);
            }
        }
        window.addEventListener('scroll', handleAnimationScroll)

        return () => window.removeEventListener("scroll", handleAnimationScroll, {passive: true})
    },[])


    return(
        <nav className='flex w-full justify-between items-center px-4 pt-4 fixed top-0 left-0 lg:p-5 z-30 pb-2 md:pb-0' id='navbar'>
          <Image src="/img/logotipo.webp" alt="logotipo Buejay's" width={59} height={60} className='z-40'/>
          <input type='checkbox' id='check'/>
          <label className='nav-lines-container cursor-pointer h-fit md:hidden hamburguer z-40' htmlFor="check">
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
          </label>
          <ul className='flex-col items-center md:hidden absolute top-0 left-0 w-full h-screen justify-center bg-bluejays' id='links-mobile'>
            <li className='mx-3 text-white font-bold text-xl my-5'><a href='#home'>Home</a></li>
            <li className='mx-3 text-white font-bold text-xl my-5'> <a href='#About BlueJays'>About BlueJays</a></li>
            <li className='mx-3 text-white font-bold text-xl my-5'><Link href='/menu'>Menu</Link></li>
            <li className='mx-3 text-white font-bold text-xl my-5'> <a href='#horary'> Hours </a></li>
            <li className='mx-3 text-white font-bold text-xl my-5'><a href='#activities'>Activities</a></li>
            <li className='mx-3 text-white font-bold text-xl my-5'> <a href='#Location'>Location </a></li>
          </ul>
          <ul className='hidden md:flex'>
            <li className='mx-3 text-white font-bold text-lg'><a href='#home'>Home</a></li>
            <li className='mx-3 text-white font-bold text-lg'> <a href='#About BlueJays'>About BlueJays</a></li>
            <li className='mx-3 text-white font-bold text-lg'><Link href='/menu'>Menu</Link></li>
            <li className='mx-3 text-white font-bold text-lg'> <a href='#horary'> Hours </a></li>
            <li className='mx-3 text-white font-bold text-lg'><a href='#activities'>Activities</a></li>
            <li className='mx-3 text-white font-bold text-lg'> <a href='#Location'>Location </a></li>
          </ul>
        </nav>
    )
}