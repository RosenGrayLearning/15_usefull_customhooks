import {useEffect,useRef} from 'react';

/**
 * runs only when our dependencies are changes but not in the first time as the component renders
 */
const useUpdateEffect = (dependencies,callback) => {
  const firstRenderRef = useRef(true);

  const someFunction = () => {
    console.log('someeefunctionnnn')
  }

  useEffect(()=>{
    if(firstRenderRef.current){
      firstRenderRef.current = false;
      return;
    }

    return callback();
    
  },dependencies);
}

export default useUpdateEffect;