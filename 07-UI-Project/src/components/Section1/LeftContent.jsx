import React from 'react'
import Hero from "./Hero.jsx";

const LeftContent = () => {
    return (
        <div className={'h-full flex-col justify-between w-1/4'}>
            <Hero/>
            <div className={'h-1/6'}>
            </div>
            <div className={'h-1/12'}></div>
            <div className={'h-1/12'}></div>
            <div className={'text-8xl'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="86" height="86" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
            </div>
        </div>
    )
}
export default LeftContent
