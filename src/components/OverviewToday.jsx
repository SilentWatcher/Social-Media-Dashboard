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
        <h2 className='text-slate-600 dark:text-slate-200 font-bold text-2xl md:text-2xl lg:text-3xl mb-5'>Overview - Today</h2>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

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