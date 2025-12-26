import axios from 'axios'
import {useState} from "react";

const App = () => {
    const [data, setData] = useState([]);

    const getData = async ()=>
    {
        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data);
        console.log(data);
    }
    return (
        <div>
            <button onClick={getData}>
                Get data
            </button>
            <div >{

                data.map(function (elem,index){
                    return <div>
                        <h3>Number {index}</h3>
                        <h4>{elem.author}</h4>
                        <img src={elem.url} alt={''}/>
                    </div>
                })
            }</div>
        </div>
    )
}
export default App
