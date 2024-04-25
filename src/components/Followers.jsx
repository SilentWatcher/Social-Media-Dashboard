import React from 'react'

import facebook from '../images/icon-facebook.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import instagram from '../images/icon-instagram.svg'

function Followers() {
  return (
    <>
        <section className='py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <article className='border-t-8 border-blue-700 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer bg-slate-200 dark:bg-slate-800 dark:shadow-slate-700 p-5 rounded-lg shadow shadow-slate-50 text-center '  >
                <ul className='flex justify-center '>
                    <li className='mr-2'><img src={facebook} alt="facebook" /></li>
                    <li className='font-bold text-sm text-slate-600 dark:text-slate-400'>@nathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 dark:text-white font-bold  my-5'>1987 <span className=' block text-sm dark:text-slate-400 text-slate-600 font-normal uppercase tracking-widest'>Followers</span></h2>
                <p className='text-emerald-500 flex items-center justify-center text-sm font-bold'>
                    <img src={up} alt="up"  className='mr-2 w-3'/>
                    12 today
                </p>

            </article>
            <article className='border-t-8 border-blue-500 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer bg-slate-200 dark:bg-slate-800 dark:shadow-slate-700 p-5 rounded-lg shadow shadow-slate-50 text-center '  >
                <ul className='flex justify-center'>
                    <li className='mr-2'><img src={twitter} alt="twitter" /></li>
                    <li className='font-bold text-sm dark:text-slate-400 text-slate-600'>@nathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 dark:text-white font-bold  my-5'>1044 <span className=' block text-sm text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>Followers</span></h2>
                <p className='text-emerald-500 flex items-center justify-center text-sm font-bold'>
                    <img src={up} alt="up"  className='mr-2 w-3'/>
                    99 today
                </p>

            </article>
            <article className='relative hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer bg-slate-200 dark:bg-slate-800 dark:shadow-slate-700 p-5 rounded-lg shadow shadow-slate-50 text-center '  >
                <div className="w-full rounded-tr-lg rounded-tl-lg h-2 absolute top-0 left-0  instagram"></div>
                <ul className='flex justify-center'>
                    <li className='mr-2'><img src={instagram} alt="instagram" /></li>
                    <li className='font-bold text-sm dark:text-slate-400 text-slate-600'>@realnathanf</li>
                </ul>
                <h2 className='text-5xl text-slate-800 dark:text-white font-bold  my-5'>11K <span className=' block text-sm text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>Followers</span></h2>
                <p className='text-emerald-600 flex items-center justify-center text-sm font-bold'>
                    <img src={up} alt="up"  className='mr-2 w-3'/>
                    1099 today
                </p>

            </article>
            <article className='border-t-8 border-red-600 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer bg-slate-200 dark:bg-slate-800 dark:shadow-slate-700 p-5 rounded-lg shadow shadow-slate-50 text-center '  >
                <ul className='flex justify-center'>
                    <li className='mr-2'><img src={youtube} alt="youtube" /></li>
                    <li className='font-bold text-sm dark:text-slate-400 text-slate-600'>Nathan F</li>
                </ul>
                <h2 className='text-5xl dark:text-white text-slate-800 font-bold  my-5'>8239 <span className=' block text-sm dark:text-slate-400 text-slate-600 font-normal uppercase tracking-widest'>Subscribers</span></h2>
                <p className='text-rose-600 flex items-center justify-center text-sm font-bold'>
                    <img src={down} alt="up"  className='mr-2 w-3'/>
                    144 today
                </p>

            </article>
        </section> 
    </>
  )
}

export default Followers