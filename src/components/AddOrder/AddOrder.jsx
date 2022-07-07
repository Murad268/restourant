import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Services from '../../services/Services';
import Servant from '../Servant/Servant';
import ResultBlock from '../ResultBlock/ResultBlock';
import Food from '../Food/Food';
import ResTable from '../ResTable/ResTable';
import "./addOrder.css"
const AddOrder = () => {
   let random = Math.random()
   let time = new Date()
   const [count, setCount] = useState(1)
   const [foods, setFoods] = useState([])
   const res = new Services()
   let navigate = useNavigate()
   const [state, setState] = useState({
      foods: [],
      servants: [],
      tables: [],
   })
   const [order, setOrder] = useState({
      id: random,
      table: "m1",
      servant: "Fedai",
      status: 0,
      orderTime: time,
      end: "",
      foods: []   
   })


  const addFood = (e, id, name, price, count, oderTime) => {
   setFoods(prev => [...prev, {id, name, price, count, oderTime}])
  
  }
   const ordering = (e) => {
      addFood(e, random,  document.querySelector("#foodName").value.split('/')[0], document.querySelector("#foodName").value.split('/')[1], document.querySelector("#count").value, time)
      
     
   }
   const countRes = () => {
      return  foods.reduce((a, b) => {
         return a+(b.price * b.count)
      }, 0)
   }
  
   
   const getDatas = () => {
      res.getData("foods").then(res => {
         setState(prev => ({...prev, foods: res}))
      });
      res.getData("tables").then(res => {
         setState(prev => ({...prev, tables: res}))
      });
      res.getData("servants").then(res => {
         setState(prev => ({...prev, servants: res}))
      })
   }

   useEffect(() => {
      getDatas()
   }, [])

   const postDatas = (e) => {
      e.preventDefault()
     
      res.postData("orders", JSON.stringify(order))
      .then((res) =>  console.log(res))
      .catch(() => alert("müəyyən problemlər baş verdi xahiş edirik bir az sonra cəhd edin"))
      
      navigate('/')
   }
   const deleteOrderWith = (id) => {
      setFoods(prev => {
         return prev.filter(food => {
            if(food.id !== id) {
               return food
            }
         })
      })
   }
   const agree = () => {
      setOrder(prev => {
         return {...prev, foods}
      })
   }
   const disable = order.foods.length>0?false:true
   let agreed = foods.length>0?"agree  agree__active":"agree"
   return (
      <section className='order'>
         <h1 className='order__title'>Aşağıdakı siyahıdan məhsul seçiminizi edin</h1>
         <div className="container">
            <form onSubmit={postDatas} >

               <div className="input-groups">
                     <label htmlFor="table">
                        Masa
                     </label>
                     <select onChange={e => setOrder(prev => ({...prev, table: e.target.value}))} name="" id="table">
                     {
                           state?.tables.map(table => {
                              return <ResTable table={table} key={table.id}/>
                           })
                        }
                     </select>
                  
               </div>
               <div className="input-groups">
                     <label htmlFor="servant">
                        Xidmət edəcək şəxs
                     </label>
                     <select onChange={e => setOrder(prev => ({...prev, servant: e.target.value}))}  name="servant" id="table">
                        {
                           state?.servants.map(servant => {
                              return <Servant servant={servant} key={servant.id}/>
                           })
                        }
                     </select>
            
               </div>
               <div className="input-groups">
                     <label htmlFor="servant">
                        Məhsulun adı
                     </label>
                     <select name="servant" id="foodName">
                     {  
                           
                           state?.foods.map(food => {
                              return <Food food={food} key={food.id}/>
                           })
                        }
                     </select>
            
               </div>
                  <div className="res__wrapper">
                  <div className="input-groups res">
                     <label  htmlFor="count">
                        Miqdar
                     </label>
                        <input onInput={e=>setCount(e.target.value)} value={count} type="text" id="count" />
                     </div>
                     <table>
                        <thead>
                           <tr>
                              <th>Məhsulun adı</th>
                              <th>Qiyməti</th>
                              <th>Miqdarı</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              foods.map(food => {
                                 return <ResultBlock deleteOrderWith={deleteOrderWith} key={food.id} food={food}/>
                              })
                           }
                        </tbody>
                     </table>
                    <div style={{marginLeft: "30px"}} className="input__groups res">
                        <label htmlFor="result">
                           Qiymət
                        </label>
                        <div id='result'>{countRes()}</div>
                     
                     </div>
                  </div>
                  <div className="btns__wrapper">
                     <button disabled = {disable} className="btn btn-success addBtn">Əlavə et</button>
                     <div  onClick={ordering} className="btn btn-primary ordering">Səbətə əlavə et</div>
                     <div  onClick={agree} className={agreed}>Razıyam</div>
                  </div>
            </form>
         </div>
      </section>
   );
};

export default AddOrder;