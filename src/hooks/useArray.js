import { useState } from 'react';

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element) => {
    setArray((prevArray) => [...prevArray, element]);
  };

  const filter = (callback) => {
    setArray((prevArray) => prevArray.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      newElement,
      ...prevArray.slice(index + 1, prevArray.length),
    ]);
  };

  const remove = (index) => {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      ...prevArray.slice(index + 1, prevArray.length),
    ]);
  };
  const clear = () => {
    setArray([]);
  };
  return {
    array,
    push,
    filter,
    update,
    remove,
    clear,
    set: setArray,
  };
};

export default useArray;
