import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../Redux/slices/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
      <div className="text-white mt-10 p-6 rounded-lg shadow-md text-center">
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            onClick={() => dispatch(increment())}
          >
            +
          </button>

          <div className="text-3xl font-bold">{count}</div>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>

        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          onClick={() => dispatch(reset())}
        > 
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;



