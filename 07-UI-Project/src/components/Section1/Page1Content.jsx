import React from 'react'
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

const Page1Content = () => {
    return (
        <div className={'py-10 h-[90vh] flex items-center gap-10 px-18'}>
            <LeftContent/>
            <RightContent/>
        </div>
    )
}
export default Page1Content
