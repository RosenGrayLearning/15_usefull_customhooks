import {useState} from 'react';
import useDebounce from '../../hooks/useDebounce';

const DebounceComponent = () => {
    const [count,setCount] = useState(10);

    const debouncerHandler = () => {
        console.log(count)
    }
    useDebounce(debouncerHandler,1000,[count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(c => c+1)}>Increment</button>
        </div>
    )
}

export default DebounceComponent