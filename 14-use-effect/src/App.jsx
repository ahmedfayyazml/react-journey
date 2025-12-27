import React, {useEffect} from 'react'

const App = () => {

    useEffect(() => {
        console.log('render');
    });
    return (
        <div>App</div>
    )
}
export default App
