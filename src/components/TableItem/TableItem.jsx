import React from 'react';
import './tableItem.css'
const TableItem = ({state, row}) => {
   const classNameStatus = state.status == 1?"statusEnd":state.status == -1?"statusCanceled":null
   const classNameEndTime = state.status == -1?"endCancel":null
   return (
     
      <tr>
         <td>{row+1}</td>
         <td>{state.table}</td>
         <td>{state.servant}</td>
         <td>{state.foods.reduce((a, b) => {
            return a+(b.price * b.count)
         }, 0)} AZN</td>
         <td className={classNameStatus}>{state.status == 1?"sonlandırılıb":state.status == 0?"sonlandırılmayıb":"Ləğv edilib"}</td>
         <td className={classNameEndTime}>{state.end?state.end:"---"}</td>
         <td><a className='btn btn-primary' href="">Bax</a></td>
      </tr>
   );
};

export default TableItem;