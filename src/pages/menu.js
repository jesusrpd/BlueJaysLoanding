import Image from 'next/image'
import Menu1 from '../../public/menu/menu-1.webp'
import Menu2 from '../../public/menu/menu-2.webp'
import Head from 'next/head'

export default function Menu(){
    return(
        <>
        <Head>
            <title>Blue Jay&apos;s Menu</title>
        </Head>
        <main className='w-full h-fit bg-menu lg:h-screen'>
            <div className='flex items-center w-full justify-around px-10 py-10 font-bold text-white lg:pb-5 lg:justify-center'>
                <Image src="/img/logotipo.webp" alt="logotipo BlueJay's" width={64} height={64}/>
                <h3 className='md:text-2xl'>THE MENU BLUE JAY&apos;S</h3>
            </div>
            <div className='lg:flex lg:justify-around'>
                <div>
                    <Image src={Menu1} alt="Menu BlueJay's" className='mb-10 w-4/5 mx-auto rounded-2xl shadow-card lg:w-1/2 '/>
                </div>
                <div className='pb-20 lg:pb-0'>
                    <Image src={Menu2} alt="Menu BlueJay's" className='w-4/5 mx-auto rounded-2xl shadow-card lg:w-1/2 '/>
                </div>
            </div>
        </main>
        </>
    )
} 