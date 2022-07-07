import React from 'react';

const Food = ({food}) => {
 
   return (
      <option value={`${food.name}/${food.price}/${food.id}`}>
         {food.name}/{food.price} AZN
      </option>
   );
};

export default Food;