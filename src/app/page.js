import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import imagen3_carusel from '../../public/slider/Ccamarones.webp'
import imagen2_carusel from "../../public/slider/chickenwings.webp"
import imagen1_carusel from "../../public/slider/cocktelcamaron.webp"
import BluejaysImg from '../../public/img/bluejays.webp'
import DrinkImg from '../../public/img/drink.webp'
import AritosImg from '../../public/img/food/aritos.webp'
import AritosDesktopImg from '../../public/img/food/aritos-desktop.webp'
import CarrotsImg from '../../public/img/food/carrots.webp'
import LogotipoIcon from '../../public/logotipo.svg'
import SopeImg from '../../public/img/food/sope.webp'
import Drink2Img from '../../public/img/drink-2.webp'
import PulpeImg from '../../public/img/food/pulpe.webp'
import NavBar from '@/components/Navbar'
import {openGraphImage} from './shared-metadata'

export const metadata = {
  metadataBase: new URL("https://bluejayshillsboro.com/"),
  alternates: {
    canonical: "/",
  },
  title: 'Blue Jay\'s Bar',
  description: 'Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.',
  keywords: "mexican food, bar, restaurant, family, hamburger, tacos, cocktails, cakes, beverages, blue jays, bluejays, bluejay's, bluejay's restaurant",
  openGraph: {
    ...openGraphImage,
    title: "BlueJay's Bar and Restaurant Family",
    description: 'Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.'
  },
  creator: "Jesús Rodrigo",
  locale: "en-US",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: "/favicon.ico"
  }
}

export default function Home() {

  return (
    <>
      <main id='home' className='w-full h-screen bg-main md:bg-main-tablet lg:bg-main-desktop bg-cover md:bg-no-repeat flex items-center relative bg-grayjays'>
        <NavBar/>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-white font-extrabold text-3xl my-2 md:my-5 md:text-6xl'>BLUE JAYS</h1>
          <h2 className='text-white font-extrabold text-sm my-2 md:my-5 md:text-2xl'>Bar & Restaurant Family</h2>
          <Link href="/menu" className='border-yellowjays border-2 px-12 py-2 text-yellowjays font-extrabold text-sm my-2 md:text-lg md:my-5' id='btn-menu'>See menu</Link>
        </div>
        <Image src={AritosImg} alt='img of food aritos' className='absolute bottom-0 negative-position w-101 h-101 md:w-100 md:h-100 lg:hidden'/>
        <Image src={AritosDesktopImg} alt='img of food aritos' className='absolute bottom-0 negative-position w-72 h-96 md:w-100 md:h-100 hidden lg:inline-block'/>
      </main>
      <section id='About BlueJays' className='w-screen min-h-screen bg-paper bg-cover pt-11 flex flex-col items-center px-4 pb-20 lg:flex-row lg:justify-center lg:pr-24'>
        <div className='md:flex md:flex-col md:items-center lg:w-fit'>
          <h2 className='text-bluejays font-bold text-2xl mb-5 md:mt-28 md:text-3xl text-center'>About BlueJays</h2>
          <div className='mb-20 md:w-3/4'>
            <p className='mb-10 leading-9 text-center font-bold md:text-lg lg:text-left'>In September 2014 I opened <span className='text-bluejays md:text-lg'>BlueJays</span>, a restaurant that was named after the many birds called Blue Jay, thats where the name of this restaurant comes from.</p>
            <p className='leading-9 text-center font-bold md:text-lg lg:text-left'>Later in 2019 we changed our location to <span className='text-yellowjays md:text-lg'>Hillsboro Oregon</span> but kept the same name BlueJays. Since then we decided to expand and offer both bar and restaurant service since that is what we enjoy doing so much at <span className='text-bluejays md:text-lg'>BlueJays</span>.</p>
          </div>
        </div>
        <div className='relative w-64 h-44 md:w-4/5 lg:w-9/12 md:h-fit'>
          <Image src={BluejaysImg} alt='img from bluejays' className='w-full shadow-card rounded-md'/>
          <Image src={DrinkImg} alt='img from drink' className='absolute negative-drink w-104 h-104 md:w-28 md:h-36 lg:w-20 lg:h-24'/>
        </div>
      </section>
      <section className='bg-text bg-grayjays px-10 py-20 md:py-0 md:pt-10 bg-cover relative h-96 md:h-52 md:bg-contain flex flex-col items-center justify-start'>
        <p className='text-white font-bold text-center leading-9 mb-10 md:text-lg md:mb-5 lg:w-2/4'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
        <p className='text-white font-bold text-center  md:text-lg '>Hortensia founder of BlueJays</p>
        <Image src={Drink2Img} alt='drink2' className='w-103 h-103 absolute negative-drink-2 z-10 md:w-32 md:h-72'/>
      </section>
      <section id='activities' className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center px-4 pb-20 relative'>
        <h2 className='text-bluejays font-bold text-2xl mb-5 md:text-3xl'>Activitie BlueJays</h2>
        <div className='md:flex md:flex-wrap md:justify-center'>
          <Card icon="karaoke" title="Karaoke" img_bg="bg-karaoke"/>
          <Card icon="restaurant" title="Restaurant" img_bg="bg-restaurant"/>
          <Card icon="bar" title="Bar" img_bg="bg-bar"/>
        </div>
        <Image src={SopeImg} alt='sope saucer' className='absolute negative-sope z-10 w-102 h-102 md:w-72 md:h-72'/>
      </section>
      <section id='horary' className='w-full min-h-screen bg-horary bg-contain pt-28 flex flex-col items-center px-4 pb-20 relative justify-center bg-grayjays lg:flex-row lg:justify-evenly lg:items-center'>
        <div className='w-full lg:w-1/2'>
        <div className='w-full'>
          <div className="slider-wrapper md:w-9/12 md:mb-20 w-4/5 lg:mb-5">
            <div className="slider ">
                <Image  className="shadow-card" id="slide-1 " src={imagen1_carusel} alt="imagenes del espacio"/>
                <Image  className="shadow-card" id="slide-2" src={imagen2_carusel} alt="imagenes del espacio"/>
                <Image  className="shadow-card" id="slide-3" src={imagen3_carusel} alt="imagenes del espacio"/>
            </div>
            <div className="slider-nav ">
              <a href="#slide-1" aria-label='slide 1'></a>
              <a href="#slide-2" aria-label='slide 2'></a>
              <a href="#slide-3" aria-label='slide 3'></a>
          </div>
        </div>

          <h3 className='text-white font-bold text-2xl my-10 text-center lg:mt-5'>OPEN EVERYDAY!</h3>
        </div>
        </div>
        <div className='lg:flex lg:flex-col lg:items-center mt-5 lg:mt-0'>
          <h3 className='text-white font-bold text-3xl text-center'>Horary</h3>
          <div className='mt-10 text-center'>
            <p className='text-white font-bold text-2xl mb-2 md:text-2xl'>Monday to Friday</p>
            <span className='text-white font-medium text-lg md:text-lg'>2:30pm to 2:30am</span>
          </div>
          <div className='mt-10 text-center'>
            <p className='text-white font-bold text-2xl mb-2 md:text-2xl'>Saturday to Sunday</p>
            <span className='text-white font-medium text-lg md:text-lg'>8:00am to 2:30am</span>
          </div>
        </div>
        <Image src={PulpeImg}  alt='food pulpe' className='absolute right-0 negative-pulpe z-10 w-36 h-44 md:w-56 md:h-72'/>
      </section>
      <section id='Location' className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center pb-24 px-10 relative lg:flex-row lg:justify-evenly lg:items-center'>
      <div className='flex flex-col items-center lg:items-start lg:pl-20'>
        <h2 className='text-bluejays font-bold text-2xl mb-5 relative md:text-3xl'>Location BlueJays</h2>
        <p className='text-base text-center leading-9 font-bold mb-5 md:text-lg lg:text-left lg:w-4/5'>We are located at: <Link className='text-yellowjays underline md:text-lg' href='https://goo.gl/maps/pxBEU7Aznj5vUGBK9' target='_blank'>446 SW Baseline St Hillsboro, OR 97123 EE. UU.</Link> </p>
        <p className='text-base text-center leading-9 font-bold md:text-lg lg:text-left lg:w-4/5'>Take your family to the restaurant or enjoy a nice evening with your friends in our bar section. We look forward to seeing you soon!</p>
        <div className='md:flex md:mt-10'>
          <Image src="/img/location/restaurant.webp" alt='restaurant Bluejays' width={200} height={120}/>
          <Image src="/img/location/bar.webp" alt='bar Bluejays' width={200} height={120}/>
          <Image src="/img/location/karaoke.webp" alt='karaoke Bluejays' width={200} height={120}/>
        </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.786711980167!2d-122.99655561780138!3d45.51973091509433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54951b2bb7976d9d%3A0x5650f9c4e5c47e81!2sBlue%20Jay&#39;s%20Bar!5e0!3m2!1ses-419!2smx!4v1692216840610!5m2!1ses-419!2smx" title="BlueJay's in Maps" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-11/12 h-72 rounded-3xl mt-16 shadow-card md:h-96 md:w-3/4 lg:w-1/2 lg:mt-0'></iframe>
        <Image src={CarrotsImg} alt='carrots Bluejays' className='absolute left-0 negative-carrots z-10 w-44 h-36 md:w-96 md:h-80 lg:w-52 lg:h-44'/>
      </section>
      <Link href="https://www.ubereats.com/store/blue-jays-restaurant-&-bar/3wYJcLaDVZuTF8dX9B44tA?diningMode=DELIVERY" target='_blank'>
        <div className='fixed bottom-2 right-2 z-40'>
          <Image src="/uber_eats.svg" alt='icon uber eats' width={74} height={74}/>
        </div>
      </Link>
      <footer className='w-full min-h-screen bg-footer lg:bg-footer-desktop bg-cover relative bg-grayjays flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center lg:pt-20'>
        <Image src={LogotipoIcon} alt='logotipo BlueJays' className='w-32 h-24 md:w-64 md:h-64 md:mb-10 lg:w-52 lg:h-52'/>
        <div className='lg:w-1/2 flex flex-col items-center'>
          <p className='text-white text-center leading-9 font-bold mt-5 mx-10 text-lg lg:w-11/12'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
          <ul className='font-bold text-lg text-white mt-5 list-disc md:hidden'>
            <li className='my-5'>All rights reserved by the author.</li>
            <li className='my-5'>bluejaysbar@gmail.com</li>
            <li className='my-5'>Location in Maps.</li>
            <li className='my-5'>Menú</li>
            <li className='my-5'>Horary</li>
            <li className='my-5'>About BlueJay’s</li>
            <li className='my-5'>Social networks:</li>
          </ul>
          <div className='mt-2 flex md:hidden'>
            <Link className='flex flex-col items-center mr-5' href="https://www.instagram.com/blue.jays.bar/" target='_blank'>
              <Image src="/instagram.svg" alt="instagram BlueJay's" width={30} height={30}/>
              <p className='text-white text-base font-bold text-center mt-2'>Instagram</p>
              </Link>       
            <Link className='flex flex-col items-center'  href="https://www.facebook.com/blue.jays.bar/" target='_blank'>
              <Image src="/facebook.svg" alt="facebook BlueJay's" width={30} height={30}/>
              <p className='text-white text-base font-bold text-center mt-2'>Facebook</p>
              </Link>
          </div>
          <div className='font-bold text-lg text-white mt-10 hidden md:flex lg:w-fit'>
            <ul className='list-disc mr-24'>
              <li className='my-5'>All rights reserved by the author.</li>
              <li className='my-5'>bluejaysbar@gmail.com</li>
              <li className='my-5'>Location in Maps.</li>
              <li className='my-5'>Menú</li>
            </ul>
            <div>
              <ul className='list-disc'>
                <li className='my-5'>Horary</li>
                <li className='my-5'>About BlueJay’s</li>
                <li className='my-5'>Social networks:</li>
              </ul>
              <div className='mt-2 flex'>
                <Link className='flex flex-col items-center mr-5' href="https://www.instagram.com/blue.jays.bar/" target='_blank'>
                  <Image src="/instagram.svg" alt="instagram BlueJay's" width={30} height={30}/>
                  <p className='text-white text-base font-bold text-center mt-2'>Instagram</p>
                  </Link>       
                <Link className='flex flex-col items-center'  href="https://www.facebook.com/blue.jays.bar/" target='_blank'>
                  <Image src="/facebook.svg" alt="facebook BlueJay's" width={30} height={30}/>
                  <p className='text-white text-base font-bold text-center mt-2'>Facebook</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
