import React from 'react'

const App = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);
    return (
        <div>App</div>
    )
}
export default App
