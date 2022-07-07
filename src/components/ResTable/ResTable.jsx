import React from 'react';

const ResTable = ({table}) => {
   return (
      <option value={table.table}>
         {table.table}
      </option>
   );
};

export default ResTable;