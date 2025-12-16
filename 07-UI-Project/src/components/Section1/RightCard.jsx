import React from 'react'
import RightCardContent from "./RightCardContent.jsx";
const RightCard = (props) => {
    return (
        <div className={'h-full shrink-0 overflow-hidden w-80 relative rounded-4xl'}>
            <img className={'h-full w-fill object-cover'} src={props.img} alt={''}/>
            <RightCardContent intro={props.intro} tag={props.tag}/>

        </div>
    )
}
export default RightCard
