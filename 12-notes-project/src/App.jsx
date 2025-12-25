import React from 'react'
const App = () => {



    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitHandler')
    }

    return (
        <div className={'h-screen lg:flex bg-black text-white overflow-auto'}>
                <form onSubmit={(e)=>submitHandler(e)}
                    className={'flex lg:w-1/2 p-10 items-start flex-col gap-4'}>
                    <h1 className={'text-3xl font-bold'}>Add Notes</h1>
                        <input type={'text'} className={'font-medium px-5 w-full py-2 outline-none border-2 rounded'} placeholder={'Enter Task Heading'}/>
                        <textarea className={'font-medium px-5 h-32 w-full py-2 outline-none border-2 rounded'} placeholder={'Enter Details'}/>
                        <button className={'font-medium bg-white text-black w-full px-5 py-2 outline-none rounded'}>Add Notes</button>
                </form>
                <div className={'lg:w-1/2 lg:border-l-2 p-10'}>
                    <h1 className={'text-3xl font-bold'}>Your Notes</h1>
                    <div className={'flex gap-5 mt-5 flex-wrap h-full overflow-auto '}>
                        <div className={'h-52 w-40 rounded-2xl bg-white'}></div>
                        <div className={'h-52 w-40 rounded-2xl bg-white'}></div>
                        <div className={'h-52 w-40 rounded-2xl bg-white'}></div>
                    </div>
                </div>
        </div>
    )
}
export default App
