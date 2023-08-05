import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='w-full h-screen bg-main md:bg-main-tablet bg-cover md:bg-no-repeat flex items-center relative bg-grayjays'>
        <nav className='flex w-full justify-between items-center px-4 pt-4 absolute top-0 left-0'>
          <Image src="/img/logotipo.png" alt="logotipo Buejay's" width={59} height={60}/>
          <div className='nav-lines-container cursor-pointer h-fit md:hidden'>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
          </div>
          <ul className='hidden md:flex'>
            <li className='mx-3 text-white font-bold text-lg'>Home</li>
            <li className='mx-3 text-white font-bold text-lg'>About BlueJays</li>
            <li className='mx-3 text-white font-bold text-lg'>Menu</li>
            <li className='mx-3 text-white font-bold text-lg'>Horary</li>
            <li className='mx-3 text-white font-bold text-lg'>Activities</li>
            <li className='mx-3 text-white font-bold text-lg'>Location</li>
          </ul>
        </nav>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-white font-extrabold text-3xl my-2 md:my-5 md:text-6xl'>BLUE JAYS</h1>
          <h3 className='text-white font-extrabold text-sm my-2 md:my-5 md:text-2xl'>Bar & Restaurant Family</h3>
          <Link href="/menu" className='border-yellowjays border-2 px-12 py-2 text-yellowjays font-extrabold text-sm my-2 md:text-lg md:my-5'>See menu</Link>
        </div>
        <Image src="/img/food/aritos.png" alt='img of food aritos' width={294.7} height={314.22} className='absolute bottom-0 negative-position'/>
      </main>
      <section className='w-screen min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center px-4 pb-20'>
        <h2 className='text-bluejays font-bold text-2xl mb-5'>About BlueJays</h2>
        <div className='mb-20'>
          <p className='mb-10 leading-9 text-center font-bold'>In September 2014 I opened <span className='text-bluejays'>BlueJays</span>, a restaurant that was named after the many birds called Blue Jay, thats where the name of this restaurant comes from.</p>
          <p className='leading-9 text-center font-bold'>Later in 2019 we changed our location to <span className='text-yellowjays'>Hillsboro Oregon</span> but kept the same name BlueJays. Since then we decided to expand and offer both bar and restaurant service since that is what we enjoy doing so much at <span className='text-bluejays'>BlueJays</span>.</p>
        </div>
        <div className='relative'>
          <Image src="/img/team.png" alt='img from team' width={279} height={189}/>
          <Image src="/img/drink.png" alt='img from team' width={76} height={101} className='absolute negative-drink'/>
        </div>
      </section>
      <section className='bg-text bg-grayjays px-10 py-20 bg-cover relative h-96 flex flex-col items-center justify-start'>
        <p className='text-white font-bold text-center leading-9 mb-10'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
        <p className='text-white font-bold text-center'>Hortensia founder of BlueJays</p>
        <Image src="/img/drink2.png" alt='drink2' width={159} height={242} className='absolute negative-drink-2 z-10'/>
      </section>
      <section className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center px-4 pb-20 relative'>
        <h2 className='text-bluejays font-bold text-2xl mb-5'>Activitie BlueJays</h2>
        <Card icon="karaoke" title="Karaoke"/>
        <Card icon="restaurant" title="Restaurant"/>
        <Card icon="bar" title="Bar"/>
        <Image src="/img/food/sope.png" alt='sope saucer' width={223} height={103} className='absolute negative-sope z-10'/>
      </section>
      <section className='w-full min-h-screen bg-horary bg-contain pt-28 flex flex-col items-center px-4 pb-20 relative justify-center bg-grayjays'>
        <figure className="icon-cards mt-3">
          <div className="icon-cards__content">
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">🙂</span></div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😊</span></div>
            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😀</span></div>
          </div>
        </figure>
        <h3 className='text-white font-bold text-2xl my-10'>OPEN EVERYDAY!</h3>
        <h3 className='text-white font-bold text-3xl'>Horary</h3>
        <div className='mt-10 text-center'>
          <p className='text-white font-bold text-2xl mb-2'>Monday to Friday</p>
          <span className='text-white font-medium text-lg'>2:30pm to 2:30am</span>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-white font-bold text-2xl mb-2'>Saturday to Sunday</p>
          <span className='text-white font-medium text-lg'>8:00am to 2:30am</span>
        </div>
        <Image src="/img/food/pulpe.png"  alt='food pulpe' width={196} height={189} className='absolute right-0 negative-pulpe z-10'/>
      </section>
      <section className='w-full min-h-screen bg-paper bg-cover pt-28 flex flex-col items-center pb-24 px-10 relative'>
        <h2 className='text-bluejays font-bold text-2xl mb-5 relative'>Location BlueJays</h2>
        <p className='text-base text-center leading-9 font-bold mb-5'>We are located at: <Link className='text-yellowjays underline' href='https://goo.gl/maps/pxBEU7Aznj5vUGBK9' target='_blank'>446 SW Baseline St Hillsboro, OR 97123 EE. UU.</Link> </p>
        <p className='text-base text-center leading-9 font-bold'>Take your family to the restaurant or enjoy a nice evening with your friends in our bar section. We look forward to seeing you soon!</p>
        <div className='md:flex md:mt-10'>
          <Image src="/img/location/restaurant.png" alt='restaurant Bluejays' width={200} height={120}/>
          <Image src="/img/location/bar.png" alt='bar Bluejays' width={200} height={120}/>
          <Image src="/img/location/karaoke.png" alt='karaoke Bluejays' width={200} height={120}/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.509550669264!2d-122.99790952324128!3d45.51995072971649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54951a97f420e69f%3A0xba893c2926ab0b60!2s446%20SW%20Baseline%20St%2C%20Hillsboro%2C%20OR%2097123%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1691003797680!5m2!1ses-419!2smx" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-11/12 h-72 rounded-3xl mt-16 shadow-card'></iframe>
        <Image src="/img/food/carrots.png" alt='carrots Bluejays' width={176} height={72} className='absolute left-0 negative-carrots'/>
      </section>
      <footer className='w-full min-h-screen bg-footer bg-cover relative bg-grayjays flex flex-col justify-center items-center'>
        <Image src="/logotipo.svg" alt='logotipo BlueJays' width={120} height={85}/>
        <p className='text-white text-center leading-9 font-bold mt-5 mx-10 text-lg'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</p>
        <ul className='font-bold text-lg text-white mt-5 list-disc'>
          <li className='my-5'>All rights reserved by the author.</li>
          <li className='my-5'>bluejaysbar@gmail.com</li>
          <li className='my-5'>Location in Maps.</li>
          <li className='my-5'>Menú</li>
          <li className='my-5'>Horary</li>
          <li className='my-5'>About BlueJay’s</li>
          <li className='my-5'>Social networks:</li>
        </ul>
        <div className='mt-2 flex'>
          <div className='flex flex-col items-center mr-5'>
            <Image src="/instagram.svg" alt="instagram BlueJay's" width={30} height={30}/>
            <p className='text-white text-base font-bold text-center mt-2'>Instagram</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/facebook.svg" alt="facebook BlueJay's" width={30} height={30}/>
            <p className='text-white text-base font-bold text-center mt-2'>Facebook</p>
          </div>
        </div>
      </footer>
    </>
  )
}
