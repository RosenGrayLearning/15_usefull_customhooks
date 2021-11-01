import React ,{useState}from 'react';
import usePrevious from '../../hooks/usePrevious';


const PreviousComponent  = () => {
   const [count,setCount] = useState(0);
   const [name,setName] = useState('Vladi');
   const previousCount = usePrevious(count);

    return (
        <div>
            <div>
                <h1>{count} - {previousCount}</h1>
            </div>
            <div>{name}</div>
            <button onClick={() => {
                setCount(prevCount => prevCount + 1);
            }}>setCount</button>
            <button onClick={() => {
                setName('Johny')
            }}>changeName</button>
        </div>
    )
}

export default PreviousComponent;