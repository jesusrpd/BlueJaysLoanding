import Image from 'next/image'
import Menu1 from '../../../public/menu/menu-1.jpg'
import Menu2 from '../../../public/menu/menu-2.jpg'

export default function Menu(){
    return(
        <>
            <div>
                <Image src={Menu1} alt="Menu BlueJay's" layout='fill' className='img-menu'/>
            </div>
            <div>
                <Image src={Menu2} alt="Menu BlueJay's" layout='fill' className='img-menu'/>
            </div>
        </>
    )
} 