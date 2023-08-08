import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import imagen3_carusel from '../../public/img/cards/restaurant.png'
import imagen2_carusel from "../../public/img/cards/karaoke.png"
import imagen1_carusel from "../../public/img/cards/bar.png"
import TeamImg from '../../public/img/team.png'
import DrinkImg from '../../public/img/drink.png'
import AritosImg from '../../public/img/food/aritos.png'
import CarrotsImg from '../../public/img/food/carrots.png'
import LogotipoIcon from '../../public/logotipo.svg'
import SopeImg from '../../public/img/food/sope.png'
import Drink2Img from '../../public/img/drink-2.png'

export default function Home() {
  return (
    <>
      <main id='home' className='w-full h-screen bg-main md:bg-main-tablet lg:bg-main-desktop bg-cover md:bg-no-repeat flex items-center relative bg-grayjays'>
        <nav className='flex w-full justify-between items-center px-4 pt-4 absolute top-0 left-0'>
          <Image src="/img/logotipo.png" alt="logotipo Buejay's" width={59} height={60}/>
          <div className='nav-lines-container cursor-pointer h-fit md:hidden'>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
          </div>
          <ul className='hidden md:flex'>
            <li className='mx-3 text-white font-bold text-lg'><Link href='#home'>Home</Link></li>
            <li className='mx-3 text-white font-bold text-lg'> <Link href='#About BlueJays'>About BlueJays</Link></li>
            <li className='mx-3 text-white font-bold text-lg'><Link href='/menu'>Menu</Link></li>
            <li className='mx-3 text-white font-bold text-lg'> <Link href='#horary'> Horary </Link></li>
            <li className='mx-3 text-white font-bold text-lg'><Link href='#activities'>Activities</Link></li>
            <li className='mx-3 text-white font-bold text-lg'> <Link href='#Location'>Location </Link></li>
          </ul>
        </nav>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-white font-extrabold text-3xl my-2 md:my-5 md:text-6xl'>BLUE JAYS</h1>
          <h3 className='text-white font-extrabold text-sm my-2 md:my-5 md:text-2xl'>Bar & Restaurant Family</h3>
          <Link href="/menu" className='border-yellowjays border-2 px-12 py-2 text-yellowjays font-extrabold text-sm my-2 md:text-lg md:my-5' id='btn-menu'>See menu</Link>
        </div>
        <Image src={AritosImg} alt='img of food aritos' className='absolute bottom-0 negative-position w-72 h-96 md:w-100 md:h-100'/>
      </main>
      <section id='About BlueJays' className='w-screen min-h-screen bg-paper bg-cover pt-11 flex flex-col items-center px-4 pb-20 lg:flex-row'>
        <div className='md:flex md:flex-col md:items-center'>
          <h2 className='text-bluejays font-bold text-2xl mb-5 md:mt-28 md:text-3xl text-center'>About BlueJays</h2>
          <div className='mb-20 md:w-3/4'>
            <p className='mb-10 leading-9 text-center font-bold md:text-lg lg:text-left'>In September 2014 I opened <span className='text-bluejays md:text-lg'>BlueJays</span>, a restaurant that was named after the many birds called Blue Jay, thats where the name of this restaurant comes from.</p>
            <p className='leading-9 text-center font-bold md:text-lg lg:text-left'>Later in 2019 we changed our location to <span className='text-yellowjays md:text-lg'>Hillsboro Oregon</span> but kept the same name BlueJays. Since then we decided to expand and offer both bar and restaurant service since that is what we enjoy doing so much at <span className='text-bluejays md:text-lg'>BlueJays</span>.</p>
          </div>
        </div>
        <div className='relative w-64 h-44 md:w-4/5 lg:w-9/12 md:h-fit'>
          <Image src={TeamImg} alt='img from team' className='w-full'/>
          <Image src={DrinkImg} alt='img from team' className='absolute negative-drink w-16 h-24 md:w-28 md:h-36 lg:w-20 lg:h-24'/>
        </div>
      </section>
      <section className='bg-text bg-grayjays px-10 py-20 md:py-0 md:pt-10 bg-cover relative h-96 md:h-52 md:bg-contain flex flex-col items-center justify-start'>
        <p className='text-white font-bold text-center leading-9 mb-10 md:text-lg md:mb-5 lg:w-2/4'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
        <p className='text-white font-bold text-center  md:text-lg '>Hortensia founder of BlueJays</p>
        <Image src="/img/drink-2.png" alt='drink2' width={159} height={242} className='absolute negative-drink-2 z-10'/>
      </section>
      <section id='activities' className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center px-4 pb-20 relative'>
        <h2 className='text-bluejays font-bold text-2xl mb-5 md:text-3xl'>Activitie BlueJays</h2>
        <div className='md:flex md:flex-wrap md:justify-center'>
          <Card icon="karaoke" title="Karaoke" img_bg="bg-karaoke"/>
          <Card icon="restaurant" title="Restaurant" img_bg="bg-restaurant"/>
          <Card icon="bar" title="Bar" img_bg="bg-bar"/>
        </div>
        <Image src={SopeImg} alt='sope saucer' className='absolute negative-sope z-10 w-32 h-72'/>
      </section>
      <section id='horary'className='w-full min-h-screen bg-horary bg-contain pt-28 flex flex-col items-center px-4 pb-20 relative justify-center bg-grayjays'>
        <div className='w-full'>
          <div className="slider-wrapper md:w-9/12 md:mb-20 w-4/5">
            <div className="slider ">
                <Image  className="shadow-card" id="slide-1 " src={imagen1_carusel} alt="imagenes del espacio"/>
                <Image  className="shadow-card" id="slide-2" src={imagen2_carusel} alt="imagenes del espacio"/>
                <Image  className="shadow-card" id="slide-3" src={imagen3_carusel} alt="imagenes del espacio"/>
            </div>
            <div className="slider-nav ">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
          </div>
        </div>

          <h3 className='text-white font-bold text-2xl my-10 text-center'>OPEN EVERYDAY!</h3>
        </div>
        <div className='lg:flex lg:flex-col lg:items-center mt-5'>
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
        <Image src="/img/food/pulpe.png"  alt='food pulpe' width={196} height={189} className='absolute right-0 negative-pulpe z-10'/>
      </section>
      <section id='Location' className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center pb-24 px-10 relative'>
      <div className='flex flex-col items-center lg:items-start lg:pl-28'>
        <h2 className='text-bluejays font-bold text-2xl mb-5 relative md:text-3xl'>Location BlueJays</h2>
        <p className='text-base text-center leading-9 font-bold mb-5 md:md:text-lg'>We are located at: <Link className='text-yellowjays underline md:md:text-lg' href='https://goo.gl/maps/pxBEU7Aznj5vUGBK9' target='_blank'>446 SW Baseline St Hillsboro, OR 97123 EE. UU.</Link> </p>
        <p className='text-base text-center leading-9 font-bold md:md:text-lg'>Take your family to the restaurant or enjoy a nice evening with your friends in our bar section. We look forward to seeing you soon!</p>
        <div className='md:flex md:mt-10'>
          <Image src="/img/location/restaurant.png" alt='restaurant Bluejays' width={200} height={120}/>
          <Image src="/img/location/bar.png" alt='bar Bluejays' width={200} height={120}/>
          <Image src="/img/location/karaoke.png" alt='karaoke Bluejays' width={200} height={120}/>
        </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.509550669264!2d-122.99790952324128!3d45.51995072971649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54951a97f420e69f%3A0xba893c2926ab0b60!2s446%20SW%20Baseline%20St%2C%20Hillsboro%2C%20OR%2097123%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1691003797680!5m2!1ses-419!2smx" style={{border:0}} allowFullScreen="" loading="lazy" referrerFolicy="no-referrer-when-downgrade" className='w-11/12 h-72 rounded-3xl mt-16 shadow-card md:h-96 md:w-3/4 lg:w-2/4 lg:mr-28'></iframe>
        <Image src={CarrotsImg} alt='carrots Bluejays' className='absolute left-0 negative-carrots z-10 w-44 h-36 md:w-96 md:h-80'/>
      </section>
      <footer className='w-full min-h-screen bg-footer bg-cover relative bg-grayjays flex flex-col justify-center items-center'>
        <Image src={LogotipoIcon} alt='logotipo BlueJays' className='w-32 h-24 md:w-64 md:h-64 md:mb-10'/>
        <p className='text-white text-center leading-9 font-bold mt-5 mx-10 text-lg'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
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
        <div className='font-bold text-lg text-white mt-10 hidden md:flex'>
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
      </footer>
    </>
  )
}
