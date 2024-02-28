import React from 'react';
//import Greet from '../props/Greet';
//import StateDemo1 from '../state/StateDemo1';
//import ForceUpdateDemo1 from '../forceUpdate/ForceUpdateDemo1';
//import ProductCard from '../listItem/ProductCard';
import SearchDemo from '../listItem/SearchDemo';
{/*import ConditionalDemo2 from '../conditional/ConditionalDemo2'*/}

export default function Body(){
  return (
    <div>
     <div>
      <div style= {{minHeight:"100px"}}>This is Body Component</div>
      {/*{<ProductCard />}*/}
      {/*<ConditionalDemo2 />*/}
      {/*<ForceUpdateDemo1 />*/}
      {/*<Greet name='mahesh' msg='Good Morning' />*/}
      {/*<Greet name='sanjay' msg='Good Evening' />*/}
      <SearchDemo />
      </div>
     </div>
  )
}
