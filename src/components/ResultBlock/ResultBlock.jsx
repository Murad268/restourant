import React from 'react';

const ResultBlock = ({food, deleteOrderWith}) => {
   return (
      <>
       <tr>
         <td>{food.name}</td>
         <td>{food.price} AZN</td>
         <td>{food.count} ədəd</td> 
         <td onClick={()=>deleteOrderWith(food.id)} style={{cursor: "pointer"}} className='cancelİt'>Sil</td>
       </tr>
      
      </>
   );
};

export default ResultBlock;