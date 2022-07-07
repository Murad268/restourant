import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import OrderItem from '../OrderItem/OrderItem';
import './order.css'
const Order = () => { 
   const res = new Services()
   const [state, setState] = useState()
   useEffect(() => {
      res.getData("orders", 1).then(res => setState(res))
   }, [])
   console.log(state)
   return (
      <section className='order'>
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
                     return <OrderItem row={i} state={state} key={state.id}/>
                  })
               }
            </tbody>
            <tbody>

            </tbody>
         </table>
      </section>
   );
};

export default Order;