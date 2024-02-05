import React from 'react'

// 14
// Named Import & Export

// export function Welcome({name}){
// return(
//   <div>
//    <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//    </div>
// );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------- //
//15
// You have to give common " Export "

function Welcome({name}){
    return(
      <div>
       <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
       </div>
    );
}

const double = (n) => n*2 ;

export {Welcome, double}