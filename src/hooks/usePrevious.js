import {useRef} from 'react';

const usePrevious = (value) => {
    const currentRef = useRef(value);
    const previousRef = useRef();

    console.log(123)
    
    if(currentRef.current !== value){
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current
}

export default usePrevious;