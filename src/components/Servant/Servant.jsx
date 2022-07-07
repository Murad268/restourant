import React from 'react';

const Servant = ({servant}) => {
   return (
      <option value={servant.name}>
         {servant.name}
      </option>
   );
};

export default Servant;