import React from 'react';

const OrderItem = ({state, row, disable, deleteItem}) => {

   return (
      <tr>
         <td>{row+1}</td>
         <td>{state.name}</td>
         <td>{state.count}</td>
         <td>{state.price}</td>
         <td>{new Date(state.orderTime).toLocaleTimeString()}</td>
       
         <td><button onClick={() => deleteItem(state.id)} disabled={disable} className="btn btn-success">geri al <i className="fa fa-sign-out" aria-hidden="true"></i></button></td>
      </tr>
   );
};

export default OrderItem;