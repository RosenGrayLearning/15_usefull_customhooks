import {useState} from 'react';
import useUpdateEffect from '../../hooks/useUpdateEffect';

const UpdateEffectComponent = () => {
  const [count,setCount] = useState(0)


  const someCallback = () => {
    console.log('calllbackkkkk')
  }
  useUpdateEffect([count],someCallback);
  return (
    <div>
      <h1>{count}</h1>
       <button onClick={() =>{
         setCount(p => ++p)
       }}>increment</button>
    </div>
  )
}

export default UpdateEffectComponent;