import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
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
      <Image src="/img/food/aritos.png" alt='img of food aritos' width={294.7} height={314.22} className='absolute bottom-0 left-0'/>
    </main>
  )
}
