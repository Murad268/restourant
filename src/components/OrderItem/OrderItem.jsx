import React from 'react';

const OrderItem = ({state, row}) => {
   console.log(state)
   return (
      <tr>
         <td>{row+1}</td>
         <td>{state.name}</td>
         <td>{state.count}</td>
         <td>{state.price}</td>
         <td>{state.orderTime}</td>
         <td>4</td>
         <td>6</td>
         <td><button className="btn btn-success">geri al</button></td>
      </tr>
   );
};

export default OrderItem;