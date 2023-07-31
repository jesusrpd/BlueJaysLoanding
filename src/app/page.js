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
      <section className='bg-text p-10 bg-effect-text bg-contain'>
        <q className='text-white font-bold text-center mb-5'>Giving work to other families and working as a team, I find it fulfilling because I want to help them as others helped me grow.</q>
        <p className='text-white font-bold text-center'>Hortensia founder of BlueJays</p>
        <Image src="/img/drink2.png" alt='drink2' width={249} height={332} className='absolute'/>
      </section>
    </>
  )
}
