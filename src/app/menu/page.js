import Image from 'next/image'
import Menu1 from '../../../public/menu/menu-1.webp'
import Menu2 from '../../../public/menu/menu-2.webp'
import Link from 'next/link'

export default function Menu(){
    return(
        <main className='w-full min-h-screen bg-menu lg:h-screen'>
            <div className='flex items-center w-full justify-around px-10 py-5 font-bold text-white lg:pb-5 lg:justify-center'>
                <Link href="/">
                    <Image src="/img/logotipo.webp" alt="logotipo BlueJay's" width={44} height={44}/>
                </Link>
                <h3 className='md:text-2xl'>THE MENU BLUE JAYS - MENU</h3>
            </div>
            <div className='flex overflow-x-auto'>
                <div className='mx-2 px-4 py-1 rounded-2xl bg-white font-bold min-w-fit text-sm'>All</div>
                <div className='mx-2 px-4 py-1 rounded-2xl bg-white font-bold min-w-fit text-sm'>Hamburguers</div>
                <div className='mx-2 px-4 py-1 rounded-2xl bg-white font-bold min-w-fit text-sm'>Bebidas</div>
                <div className='mx-2 px-4 py-1 rounded-2xl bg-white font-bold min-w-fit text-sm'>Mariscos</div>
                <div className='mx-2 px-4 py-1 rounded-2xl bg-white font-bold min-w-fit text-sm'>Mexican Food</div>
            </div>
            <section className='mt-5 p-2 bg-paper bg-contain'>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm'>AVOCADO BURGER</h4>
                    <p className=' text-sm'>Chipotle sauce, pepper jack cheese, bacon jalapenos, tomato, pickles and onion.</p>
                </div>
            </section>
            {/* <div className='lg:flex lg:justify-around'>
                <div>
                    <Image src={Menu1} alt="Menu BlueJay's" className='mb-10 w-4/5 mx-auto rounded-2xl shadow-card lg:w-1/2 '/>
                </div>
                <div className='pb-20 lg:pb-0'>
                    <Image src={Menu2} alt="Menu BlueJay's" className='w-4/5 mx-auto rounded-2xl shadow-card lg:w-1/2 '/>
                </div>
            </div> */}
        </main>
    )
} 