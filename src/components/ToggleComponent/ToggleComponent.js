import React from 'react';
import useToggle from '../../hooks/useToggle';

const ToggleComponent = () => {
const [value,toggleValue] = useToggle(false);

    return (
        <div>
            <div><h1>{value.toString()}</h1></div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make true</button>
            <button onClick={() => toggleValue(false)}>Make false</button>
        </div>
    )
}

export default ToggleComponent;