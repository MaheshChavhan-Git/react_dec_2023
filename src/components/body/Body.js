import React from 'react';
import ListDemo1 from '../listItem/ListDemo1';
{/*import ConditionalDemo2 from '../conditional/ConditionalDemo2'*/}

export default function Body() {
  return (
    <div>
     <div>
      <div style= {{minHeight:"100px"}}>This is Body Component</div>
      <ListDemo1/>
      {/*<ConditionalDemo2 />*/}
      </div>
     </div>
  )
}
