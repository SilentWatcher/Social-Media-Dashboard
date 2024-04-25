import React from 'react'


import facebook from '../images/icon-facebook.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import instagram from '../images/icon-instagram.svg'
import ArticaleOverview from './Resuable/ArticaleOverview'

function OverviewToday() {
  return (
    <>
        <h2 className='text-slate-600 font-bold text-2xl md:text-2xl lg:text-3xl mb-5'>Overview Today</h2>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50'>
                <ul className='flex justify-between items-center'>
                    <li className='text-slate-600 font-bold text-sm mb-2'>Page Views</li>
                    <li><img src={facebook} alt="facebook" /></li>
                </ul>
                <ul className='flex justify-between items-baseline'>
                    <li className='text-4xl font-bold text-slate-800'>87</li>
                    <li className='flex justify-center items-center text-emerald-600 font-semibold text-sm'><img src={up}  className="mr-1 w-3" alt="up" />3%</li>
                </ul>
            </article>
            <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50'>
                <ul className='flex justify-between items-center mb-2'>
                    <li className='text-slate-600 font-bold text-sm'>Likes</li>
                    <li><img src={facebook} alt="facebook" /></li>
                </ul>
                <ul className='flex justify-between items-baseline '>
                    <li className='text-4xl font-bold text-slate-800'>87</li>
                    <li className='flex justify-center items-center text-rose-600 font-semibold text-sm'><img src={down}  className="mr-1 w-3" alt="up" />2%</li>
                </ul>
            </article>
            <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50'>
                <ul className='flex justify-between items-center mb-2'>
                    <li className='text-slate-600 font-bold text-sm'>Likes</li>
                    <li><img src={instagram} alt="facebook" /></li>
                </ul>
                <ul className='flex justify-between items-baseline '>
                    <li className='text-4xl font-bold text-slate-800'>5468</li>
                    <li className='flex justify-center items-center text-emerald-600 font-semibold text-sm'><img src={up}  className="mr-1 w-3" alt="up" />2257%</li>
                </ul>
            </article>
            <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50'>
                <ul className='flex justify-between items-center mb-2'>
                    <li className='text-slate-600 font-bold text-sm'>Profile Views</li>
                    <li><img src={instagram} alt="facebook" /></li>
                </ul>
                <ul className='flex justify-between items-baseline '>
                    <li className='text-4xl font-bold text-slate-800'>52k</li>
                    <li className='flex justify-center items-center text-emerald-600 font-semibold text-sm'><img src={up}  className="mr-1 w-3" alt="up" />1375%</li>
                </ul>
            </article>
            <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50'>
                <ul className='flex justify-between items-center mb-2'>
                    <li className='text-slate-600 font-bold text-sm'>Profile Views</li>
                    <li><img src={instagram} alt="facebook" /></li>
                </ul>
                <ul className='flex justify-between items-baseline '>
                    <li className='text-4xl font-bold text-slate-800'>52k</li>
                    <li className='flex justify-center items-center text-emerald-600 font-semibold text-sm'><img src={up}  className="mr-1 w-3" alt="up" />1375%</li>
                </ul>
            </article> */}
            {/* stats, icon ,cardName, arrow ,percentage */}
            <ArticaleOverview
                cardName={"Page Views"}
                icon={facebook}
                stats={'87'}
                arrow={up}
                percentage={'3%'}
                

            />
            <ArticaleOverview
                cardName={"Likes"}
                icon={facebook}
                stats={'52'}
                arrow={down}
                percentage={'2%'}
                
            />
            <ArticaleOverview
                cardName={"Profile Views"}
                icon={instagram}
                stats={'52k'}
                arrow={up}
                percentage={'1375%'}
                
            />
            <ArticaleOverview
                cardName={"Likes"}
                icon={instagram}
                stats={'5462'}
                arrow={up}
                percentage={'2257%'}
                
            />

            <ArticaleOverview
                cardName={"Retweets"}
                icon={twitter}
                stats={'117'}
                arrow={up}
                percentage={'303%'}
                
            />
            <ArticaleOverview
                cardName={"Likes"}
                icon={twitter}
                stats={'507'}
                arrow={up}
                percentage={'2257%'}
                
            />
            <ArticaleOverview
                cardName={"Likes"}
                icon={youtube}
                stats={'107'}
                arrow={down}
                percentage={'19%'}
                
            />
            <ArticaleOverview
                cardName={"Profile Views"}
                icon={youtube}
                stats={'1407'}
                arrow={up}
                percentage={'12%'}
                
            />
        </section>
    </>
  )
}

export default OverviewToday