// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "../../redux/slice/counterSlice";

// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   const [amount, setAmount] = useState(0);

//   const handleChange = (e) => {
//     const data = parseInt(e.target.value);
//     setAmount(data);
//   };
//   return (
//     <div>
//       <button
//         aria-label="Increment value"
//         onClick={() => dispatch(increment())}
//       >
//         Increment
//       </button>
//       <span>{count}</span>
//       <button
//         aria-label="Decrement value"
//         onClick={() => dispatch(decrement())}
//       >
//         Decrement
//       </button>
//       <input type="number" value={amount} onChange={handleChange} />
//       <button onClick={() => dispatch(incrementByAmount(amount))}>
//         Increment by amount
//       </button>
//     </div>
//   );
// };

// export default Counter;
