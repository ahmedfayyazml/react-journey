import {useState} from "react";

const App = () => {

    const [num, setNum] = useState(0);

    function increase(){
        setNum(num + 1);
    }
    function decrease()
    {
        if(num===0)
        {
            setNum(0)
        }
        else {
            setNum(num - 1);
        }
    }
    return (
        <div>
            <h1>Count {num}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease} >Decrease</button>
        </div>
    )
}
export default App




// let [a, setA] = useState(20);
// const [user, setUser] = useState('Ahmed');
// const [arr, setArr] = useState([10,20,30,40,50,60]);
//
//
// function changeNum()
// {
//     setA(a++)
//     setUser('Awan')
// }

// {/*<h1>The Value of A is {a}</h1>*/}
// {/*<h1>The name of user is {user}</h1>*/}
// {/*<h1>{arr}</h1>*/}
// {/*<button onClick={changeNum}>*/}
// {/*    Click me*/}
// {/*</button>*/}

