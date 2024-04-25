import React from 'react'

// import facebook from '../../images/icon-facebook.svg'
import up from '../../images/icon-up.svg'
// import down from '../../images/icon-down.svg'
// import twitter from '../../images/icon-twitter.svg'
// import youtube from '../../images/icon-youtube.svg'
// import instagram from '../../images/icon-instagram.svg'

function ArticaleOverview({ stats, icon ,cardName, arrow ,percentage } ) {
  return (
    <>
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700 cursor-pointer dark:hover:bg-slate-700 hover:bg-slate-300'>
            <ul className='flex justify-between items-center mb-2'>
                <li className='text-slate-600 dark:text-slate-400 font-bold text-sm'>{cardName}</li>
                <li><img src={icon} alt={icon}/></li>
            </ul>
            <ul className='flex justify-between items-baseline '>
                <li className='text-3xl font-bold text-slate-800 dark:text-slate-200'>{stats}</li>
                <li  className={`flex justify-center items-center ${arrow == up ? 'text-emerald-600': 'text-rose-600'} font-semibold text-sm`}><img src={arrow} alt={arrow} className="mr-1 w-3" />{percentage}</li>
            </ul>
        </article>
    </>
  )
}

export default ArticaleOverview