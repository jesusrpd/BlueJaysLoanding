import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='w-full h-screen bg-main bg-cover flex items-center relative'>
        <nav className='flex w-full justify-between px-4 pt-4 absolute top-0 left-0'>
          <Image src="/img/logotipo.png" alt="logotipo Buejay's" width={59} height={60}/>
          <div className='nav-lines-container cursor-pointer h-fit'>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
            <div className='w-8 h-1 bg-white rounded-2xl my-2'></div>
          </div>
        </nav>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-white font-extrabold text-3xl my-2'>BLUE JAYS</h1>
          <h3 className='text-white font-extrabold text-sm my-2'>Bar & Restaurant Family</h3>
          <Link href="/menu" className='border-yellowjays border-2 px-12 py-2 text-yellowjays font-extrabold text-sm my-2'>See menu</Link>
        </div>
        <Image src="/img/food/aritos.png" alt='img of food aritos' width={294.7} height={314.22} className='absolute bottom-0 negative-position'/>
      </main>
      <section className='w-screen min-h-screen bg-paper bg-cover bg-paper-effect pt-28 flex flex-col items-center px-4'>
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
      <section className='bg-text px-10 py-20 bg-effect-text bg-contain relative h-96 flex flex-col items-center justify-start'>
        <p className='text-white font-bold text-center leading-9 mb-10'>"Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow."</p>
        <p className='text-white font-bold text-center'>Hortensia founder of BlueJays</p>
        <Image src="/img/drink2.png" alt='drink2' width={159} height={242} className='absolute negative-drink-2'/>
      </section>
      <section className='w-full min-h-screen bg-paper bg-cover bg-paper-effect-2 pt-28 flex flex-col items-center px-4'>
        <h2 className='text-bluejays font-bold text-2xl mb-5'>Activitie BlueJays</h2>
        <div className='relative rounded-3xl w-48 h-72 bg-karaoke bg-contain bg-no-repeat flex items-end p-2'>
          <div className='absolute w-full h-full bg-black opacity-5 rounded-3xl top-0 left-0'></div>
          <div className='flex items-center'>
            <Image src="img/cards/icons/karaoke.svg" alt="karaoke BlueJay's" width={35} height={35}/>
            <h3 className='text-white font-bold ml-2 text-2xl'>Karaoke</h3>
          </div>
        </div>
      </section>
    </>
  )
}
