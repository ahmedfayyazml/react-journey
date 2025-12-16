import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className={'absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'}>
            <h2 className={'bg-white rounded-full text-2xl font-semibold h-12 w-12 flex justify-center items-center'}>1</h2>
            <div>
                <p className={'text-white mb-14 text-xl leading-relaxed overflow-x-auto'}>
                    {props.intro}
                </p>
                <div className={'flex justify-between'}>
                    <button className={'bg-blue-600 text-white font-medium px-8 py-2 rounded-full'}>{props.tag} </button>
                    <button className={'bg-blue-600 text-white font-medium px-4 py-3 rounded-full '}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
                </div>
            </div>
        </div>
    )
}
export default RightCardContent
