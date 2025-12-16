import React from 'react'
import RightCard from "./RightCard.jsx";
const RightContent = (props) => {
    return (
        <div className={'h-full flex flex-nowrap gap-10 w-2/3 p-4'}>
            {
                props.users.map(function (elem){
                    return<RightCard img = {elem.img} intro = {elem.intro} tag = {elem.tag}/>
                })
            }
        </div>
    )
}
export default RightContent
