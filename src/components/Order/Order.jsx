import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Services from '../../services/Services'
import OrderItem from '../OrderItem/OrderItem';
import './order.css'
const Order = () => { 
   const res = new Services()
   const {id} = useParams()
   
   const [state, setState] = useState()
   const [server, setServer] = useState(1)
   useEffect(() => {
      res.getData("orders", id).then(res => setState(res))
   }, [server])
  
   const navigate = useNavigate()
   const changeData = () => {
      res.changeData("orders", JSON.stringify({status: 1}), id)
      navigate("/")
   }
   const cancelData = () => {
      res.changeData("orders", JSON.stringify({status: -1}), id)
      navigate("/")
   }
   let disable = state?.status==1?true:state?.status==-1?true:false
   let disableEnd = state?.foods.length<1?true:false
   console.log(disableEnd)
   const deleteItem = (idr) => {
      // res.deleteData(`orders`, `${id}/foods/${idr}`)
       
      res.changeData("orders", JSON.stringify({foods: state.foods?.filter(item => item.id !== idr)}), id)
      
      setServer(prev => prev + 1)
   } 
  
   return (
      <section className='order'>
         <h1 className='order_title'>Sifariş haqqında</h1>
         <table>
            <thead>
               <tr>
                  <th>Say</th>
                  <th>Məhsul adı</th>
                  <th>Miqdar</th>
                  <th>Məbləğ</th>
                  <th>Sirafiş saatı</th>
                  <th>Gözləmə</th>
                  <th>#</th>
                  <th>Geri</th>
               </tr>
            </thead>
            <tbody>
               {
                  state?.foods.map((state, i) => {
                     return <OrderItem deleteItem={deleteItem} disable={disable} row={i} state={state} key={state.id}/>
                  })
               }
            </tbody>
            <tbody>

            </tbody>
         </table>
        <div className="footer__wrapper">
         <div className="footer__result">
               {
                  state?.foods.reduce((a, b) => {
                     return a+(b.price * b.count)
               }, 0)
               
            } AZN
         </div>
         <button disabled={disable || disableEnd} onClick={changeData} className="btn btn-danger end__order">
               Sifarişi sonlandır
         </button>
         <button disabled={disable} onClick={cancelData} className="btn btn-primary end__order">
               Sifarişi Ləğv elə
         </button>
        </div>
      </section>
   );
};

export default Order;