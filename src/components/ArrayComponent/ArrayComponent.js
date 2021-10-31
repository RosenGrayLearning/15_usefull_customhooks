import React from 'react';
import useArray from '../../hooks/useArray';

const ArrayComponent = () => {
  const { array, push, filter, update, remove, clear, set } = useArray([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <div>
      <h1>{array.join(',')}</h1>
      <button onClick={() => push(9)}>add 9</button>
      <br />
      <button onClick={() => filter((n) => n > 3)}>
        Get Numbers Higher Then 3
      </button>
      <br />
      <button onClick={() => update(1, 9)}>change second element to 9</button>
      <br />
      <button onClick={() => remove(1)}> remove second element</button>
      <br />
      <button onClick={() => set([1, 2])}>set to 1,2</button>
      <br />
      <button onClick={() => clear()}>clear</button>
    </div>
  );
};

export default ArrayComponent;
