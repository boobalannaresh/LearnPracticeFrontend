import React from 'react'


// 28, 29
// Create to Empty div
// After go to AddColor.js component

// export function ColorBox() {
//     const colorBoxStyles={
//         width:"200px",
//         height:"30px",
//         background: "orange",
//         marginTop:"10px"
//     }
//   return (
//     <div style={colorBoxStyles}></div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------ ///
// 31
// Give background color here pass props value

export function ColorBox( {color}) {
    const colorBoxStyles={
        width:"200px",
        height:"30px",
        background: color,
        marginTop:"10px"
    }
  return (
    <div style={colorBoxStyles}>
      
    </div>
  )
}
