"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DrinksImg from '../../../public/menu/drinks.webp'
import bersImg from '../../../public/menu/bers.webp'
import BirriaImg from '../../../public/menu/birria.webp'
import SopeCamaronImg from '../../../public/menu/sopecamaron.webp'
import PulpeImg from '../../../public/menu/pulpe.webp'
import TacosImg from '../../../public/menu/tacos.webp'
import CarnitasImg from '../../../public/menu/carnitas.webp'
import Hamburguer1Img from '../../../public/menu/hamburguer1.webp'
import Hamburguer2Img from '../../../public/menu/hamburguer2.webp'

export default function Menu(){

    const [slect, setSelect] = useState('All')

    return(
        <main className='w-full min-h-screen bg-menu lg:h-screen'>
            <div className='flex items-center w-full justify-around px-10 py-5 font-bold text-white lg:pb-5 lg:justify-center'>
                <Link href="/">
                    <Image src="/img/logotipo.webp" alt="logotipo BlueJay's" width={44} height={44}/>
                </Link>
                <h3 className='md:text-2xl'>THE MENU BLUE JAYS - MENU</h3>
            </div>
            <div className='flex overflow-x-auto mb-5'>
                <div className={slect === 'All'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('All')}>All</div>
                <div className={slect === 'Hamburguer'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('Hamburguer')}>Hamburguers</div>
                <div className={slect === 'MexicanFood'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('MexicanFood')}>Mexican Food</div>
                <div className={slect === 'Seafood'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('Seafood')}>Seafood</div>
                <div className={slect === 'Cravings'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('Cravings')}>Cravings</div>
                <div className={slect === 'Drinks'?`mx-2 px-4 py-1 rounded-2xl border-white bg-white text-bold border font-bold min-w-fit text-sm`:`mx-2 px-4 py-1 rounded-2xl border-white text-white border font-bold min-w-fit text-sm`} onClick={() => setSelect('Drinks')}>Drinks</div>
            </div>
            {slect === 'All' || slect === 'Hamburguer' ?<section className='p-2 bg-paper bg-contain relative'>
                <h3 className='font-bold text-lg text-center my-2'>HAMBURGUERS</h3>
                <Image src={Hamburguer1Img} alt='hamburguer' className='w-40 h-auto absolute right-0 top-20'/>
                <Image src={Hamburguer2Img} alt='hamburguer' className='w-40 h-auto absolute right-0 top-80'/>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>AVOCADO BURGER <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12.95</span></h4>
                    <p className=' text-sm leading-5'>Chipotle sauce, pepper jack cheese, bacon jalapenos, tomato, pickles and onion.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>JALA-JALAPENO BURGER <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12.95</span></h4>
                    <p className=' text-sm leading-5'>Pepper jack cheese, bacon jalapenos and avocado.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CHICKEN BURGER <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12.95</span></h4>
                    <p className=' text-sm leading-5'>Tomato, lettuce, onion, pickles and mayonnaise.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CALIFORNIA,CHICKEN BURGER <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12.95</span></h4>
                    <p className=' text-sm leading-5'>Onion, tomato, lettuce, grilled chicken, jack cheese, bacon and avocado.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CHEESE BURGER <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12.95</span></h4>
                    <p className=' text-sm leading-5'>Cheddar cheese, onion, pickles, tomato, lettuce, onion and mayonnaise.</p>
                </div>
            </section>: null}
            {slect === 'All' || slect === 'MexicanFood'?<section className='p-2 bg-paper bg-contain relative'>
                <h3 className='font-bold text-lg text-center my-2'>MEXICAN FOOD</h3>
                <Image src={BirriaImg} alt='birria' className='w-40 h-auto absolute bottom-32 right-0'/>
                <Image src={TacosImg} alt='tacos' className='w-40 h-auto absolute bottom-10 right-0'/>
                <Image src={CarnitasImg} alt='carnitas' className='w-40 h-auto absolute top-20 right-0'/>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CARNITAS MICHOACANAS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15</span></h4>
                    <p className=' text-sm leading-5'>Shredded pork cooked Michoacan style.<br/>Served with pico de gallo and green pickled jalapeno peppers.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>ENCHILADAS MICHOACANAS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$16</span></h4>
                    <p className=' text-sm leading-5'>Three enchiladas filled with cotija cheese chopped onions. Served with either chicken or beef and fried potatoes and carrots.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CARNE ASADA <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$18.50</span></h4>
                    <p className=' text-sm leading-5'>Grilled steak with rice, beans, avocado and salsa.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>TACOS BLUE JAYS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$10</span></h4>
                    <p className=' text-sm leading-5'>Two tacos flour tortilla with grilled steak melted mozzarella cheese and guacamole.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>FLAUTAS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$14</span></h4>
                    <p className=' text-sm leading-5'>Four corn tortillas rolled and filled with beef or chicken. Topped with sour cream, lettuce, and cotija cheese.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>BURRITO <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12</span></h4>
                    <p className=' text-sm leading-5'>Beans, rice, tomatoes, onions, cilantro, avocado and sour cream. Served with fries. Choice of meat: Pork, chicken, chorizo, pastor or beef (stack).</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>TAMALE PLATE <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12</span></h4>
                    <p className=' text-sm leading-5'>One tamale of pork or chicken.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>QUESADILLA <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$6 each</span></h4>
                    <p className=' text-sm leading-5'>Fresh homemade corn tortilla topped with sour cream. lettuce and cotija cheese your choice of filling.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>QUESADILLA DE HARINA</h4>
                    <span className='bg-bluejays rounded-full p-1 px-2 text-white'>$With meet $12</span> <span className='ml-1 bg-bluejays rounded-full p-1 px-2 text-white'>$Without meet $8</span>
                    <p className=' text-sm leading-5 mt-1'>Flour tortilla filled with melted mozzarella cheese. Served with sour cream and cotija chease.<br/> Meat of your choice...Carne Asada (beef), Carnitas (pork), Pollo Asado (chicken), Al Pastor (pork), Chorizo, Lengua.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>WEEKEND <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15</span></h4>
                    <p className=' text-sm leading-5'>Menudo or Birria (Tortillas hechas a mano).</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>TORTAS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12</span></h4>
                    <p className=' text-sm leading-5'>Carnitas (pork), Pollo Asado (chicken), Al Pastor (pork), Carne Asada (beef), Jamon (ham).</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>STREET TACOS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$3</span></h4>
                    <p className=' text-sm leading-5'>Carne Asada (beef), Carnitas (pork), Pollo Asado (chicken), Al pastor (pork), Chorizo.</p>
                </div>
            </section>:null}
            {slect === 'All' || slect === 'Seafood'?<section className='p-2 bg-paper bg-contain relative'>
                <h3 className='font-bold text-lg text-center my-2'>SEAFOOD</h3>
                <Image src={SopeCamaronImg} alt='sope camaron' className='w-60 h-auto absolute negative-menu-sope top-5'/>
                <Image src={PulpeImg} alt='cocktel camaron' className='w-40 h-auto absolute right-0 bottom-0'/>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>COCKTEL DE CAMARON <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15</span></h4>
                    <p className=' text-sm leading-5'>Large shrimp cocktail prepared with cilantro, avocado, onions, tomato, chile pepper and cocktail sauce.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CALDO DE CAMARON <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15.50</span></h4>
                    <p className=' text-sm leading-5'>Spicy shrimp soup.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>SOPA DE 7 MARES <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15.95</span></h4>
                    <p className=' text-sm leading-5'>Spicy seafood.</p>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>BOTANA DE CAMARON <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$18</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>ENSALDA DE CAMARON <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$15</span></h4>
                </div>
            </section>:null}
            {slect==='All' || slect === 'Cravings'?<section className='p-2 bg-paper bg-contain'>
                <h3 className='font-bold text-lg text-center my-2'>CRAVINGS</h3>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>TOSTADAS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$6</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>DEEP FRIED PRAWNS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$6</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>SPRINGROLLS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$10</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CHICKEN WINGS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CHEESE STICKS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$8</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>FISH AND CHIPS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$12</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>CHICKEN STRIPS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$11</span></h4>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>JALAPENOS PEPPERS <span className='ml-5 bg-bluejays rounded-full p-1 px-2 text-white'>$10</span></h4>
                </div>
            </section>:null}
            {slect==='All' || slect === 'Drinks'?<section className='p-2 bg-paper bg-contain'>
                <h3 className='font-bold text-lg text-center my-2'>DRINKS</h3>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>Beverages</h4>
                    <Image src={DrinksImg} alt='blue jays drinks' className='w-auto h-auto'/>
                </div>
                <div className='w-3/4 pl-2 py-2'>
                    <h4 className='font-bold  text-sm mb-2'>Special Drinks & Bears</h4>
                    <Image src={bersImg} alt='blue jays drinks' className='w-auto h-auto'/>
                </div>
            </section>:null}
        </main>
    )
} 