import React from 'react';
import ListDemo2 from '../listItem/ListDemo2';
{/*import ConditionalDemo2 from '../conditional/ConditionalDemo2'*/}

export default function Body() {
  return (
    <div>
     <div>
      <div style= {{minHeight:"100px"}}>This is Body Component</div>
      <ListDemo2 />
      {/*<ConditionalDemo2 />*/}
      </div>
     </div>
  )
}
