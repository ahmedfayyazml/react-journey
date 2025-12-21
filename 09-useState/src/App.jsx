import {useState} from "react";

const App = () => {

    let [a, setA] = useState(20);
    const [user, setUser] = useState('Ahmed');
    const [arr, setArr] = useState([10,20,30,40,50,60]);


    function changeNum()
    {
        setA(a++)
        setUser('Awan')
        setArr(arr[1]=200)
    }
    return (
        <div>
            <h1>The Value of A is {a}</h1>
            <h1>The name of user is {user}</h1>
            <h1>{arr}</h1>
            <button onClick={changeNum}>
                Click me
            </button>
        </div>
    )
}
export default App
