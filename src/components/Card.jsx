import Image from 'next/image'

export default function Card({icon, title}){
    return(
        <div className={`relative rounded-3xl w-48 h-72 bg-restaurant bg-contain bg-no-repeat flex items-end p-2 my-5`}>
          <div className='flex items-center'>
            <Image src={`img/cards/icons/${icon}.svg`} alt={`${title} BlueJay's`} width={35} height={35}/>
            <h3 className='text-white font-bold ml-2 text-2xl'>{title}</h3>
          </div>
          <div className='absolute w-full h-full bg-black opacity-5 rounded-3xl top-0 left-0'></div>
        </div>
    )
}