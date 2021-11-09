import { useRef,useEffect } from "react";

const useEventListener = (eventType,callback,element = window) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    },[callback]);
    
    useEffect(() => {
        const handler = e => callbackRef.current(e);
        element.addEventListener(eventType,handler);

        return () => element.removeEventListener(eventType,handler);
    },[]);
}

export default useEventListener;