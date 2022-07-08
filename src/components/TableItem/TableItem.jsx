import React from 'react';
import { NavLink } from 'react-router-dom';
import './tableItem.css'
const TableItem = ({state, row, deleteItem}) => {

   let waitingTime = Math.abs(new Date(state.orderTime).getTime() - new Date(state.end).getTime())/1000>60?(Math.abs(new Date(state.orderTime).getTime() - new Date(state.end).getTime())/1000/60).toFixed(2) + " dəqiqə":Math.abs(new Date(state.orderTime).getTime() - new Date(state.end).getTime())/1000 + " saniyə"
  
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
         <td>{state.status != 0 && state.status != -1?waitingTime:null}</td>
         <td><NavLink  to={`/${state.id}`} className='btn btn-primary' href="">Bax <i className="fa fa-eye" aria-hidden="true"></i></NavLink></td>
      </tr>
   );
};

export default TableItem;

// state.status != -1 && state.status != 0?Math.floor((new Date(state.orderTime)- new Date(state.end))/1000/60/60):null