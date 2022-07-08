import React, {useState, useEffect} from 'react';
import Services from '../../services/Services'
import TableItem from '../TableItem/TableItem';
import './table.css'
const Table = () => {
   const res = new Services()
   const [states, setStates] = useState()
   const [filter, setFilter] = useState("all")
   const [options, setOptions] = useState([
      {id: 1, name: "hamısı", value: "all"},
      {id: 2, name: "ləğv edilmiş", value: "cancel"},
      {id: 3, name: "bitirilmiş", value: "end"},
      {id: 4, name: "davam edən", value: "contunio"}
   ])
   const getData = () => {
      res.getData("orders").then(res => setStates(res)).catch(() => alert("səhifənin yüklənməsində müəyyən problemlər baş verdi"))
   }
   useEffect(() => {
      getData()
   }, [])
   const filtering = (filter, items) => {
      switch(filter) {
         case "all": 
            return items
         case "cancel":
            return items.filter(item => {
               return item.status === -1
            })
         case "end":
            return items.filter(item => {
               return item.status === 1
            })
         case "contunio":
            return items.filter(item => {
               return item.status === 0
            })
      }
   }
   const filteredArray = filtering(filter, states)
   const changeFilter = (e) => {
      setFilter(e.target.value)
   }

   const result = () => {
      let res = 0;
      for(let i = 0; i < filteredArray?.length; i++) {
         if(filteredArray[i].status == -1) {
            continue
         }
         res += states[i].foods.reduce((a, b) => {
            return a+(b.price * b.count)
          }, 0)
      }
      return res
   }
  
   
   return (
    <section className="tables container">
         <div className="status__filter">
            statusa görə filterlə
            <select onChange={changeFilter} name="" id="">
               {
                  options.map(option => {
                     return <option key={option.id} value={option.value}>{option.name}</option>
                  })
               }
              {/* bura mən ayrıca qovluğdan da option componentini elavə edə bilərdim. Amma bu dərəcədə kiçik hissəcik üçün bunu etməyə dəyməz MƏNCƏ */}
            </select>
         </div>
            {
               filteredArray?.length>0?
               <table>
        <thead>
         <tr>
               <th>Say</th>
               <th>Masa</th>
               <th>Xidmət edən</th>
               <th>Qiymət</th>
               <th>Status</th>
               <th>Bitirmə tarixi</th>
               <th>Gözləmə</th>
               <th>Ətraflı</th>
            </tr>
        </thead>
        <tbody>
            
             {
             
              filteredArray?.sort((a, b) => {
               return -a.status - -b.status
            }).map((state, i) => {
               return <TableItem row={i} state={state} key={state.id}/>
            })
            
            }
        </tbody>
      
      </table>:<div className='alert__message'>Hazırda bu statusa uyğun sifariş yoxdur</div> }
      <footer>
         Cəmi məbləğ : <span> {
            result()
         } AZN</span>
        </footer>
    </section>
   );
};



export default Table;