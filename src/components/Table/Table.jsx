import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import TableItem from '../TableItem/TableItem';
import './table.css'
const Table = () => {
   const res = new Services()
   const [states, setStates] = useState()
   const getData = () => {
      res.getData("orders").then(res => setStates(res))
   }
   useEffect(() => {
      getData()
   }, [])

   const result = () => {
      let res = 0;
      for(let i = 0; i < states?.length; i++) {
         if(states[i].status == -1) {
            continue
         }
         res += states[i].foods.reduce((a, b) => {
            return a+(b.price * b.count)
          }, 0)
      }
      return res
   }
   console.log(result())
   return (
    <section className="tables container">
        <table>
        <thead>
         <tr>
               <th>Say</th>
               <th>Masa</th>
               <th>Xidmət edən</th>
               <th>Qiymət</th>
               <th>Status</th>
               <th>Bitirmə tarixi</th>
               <th>Ətraflı</th>
            </tr>
        </thead>
        <tbody>
            {/* {
               states?.map(state => {
                  return <TableItem state={state} key={state.id}/>
               })
            } */}
             {
               states?.sort((a, b) => {
                  return -a.status - -b.status
               }).map((state, i) => {
                  return <TableItem row={i} state={state} key={state.id}/>
               })
            }
        </tbody>
      
      </table>
      <footer>
         Cəmi məbləğ : <span> {
            result()
         } AZN</span>
        </footer>
    </section>
   );
};



export default Table;