import React, { useState } from 'react'
import { ColorBox } from './ColorBox'


//23

// export  function AddColor() {
//     const colorStyles={
//         backgroundColor:"yellow"
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think" />
//     </div>
//   )
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------//
//24
// what you have to type, that will appear on console.log  "inspect and console"

// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> console.log(event.target.value)}/>
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

//25
//
// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)}/>
//     </div>
//   )
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
//26
//What color, you have to type in Input box, that will appear in beside also ,,,, But not visible in Input Box to initial value Ex:"Orange"

// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)}/>
//         {color}
//     </div>
//   )
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 27
// Visible in Input box to initial value, so you have to another attribute " value={} "
// After Go to ColorBox.js Component

// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)} value={color}/>
//         {color}
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 29
// Add to ColorBox.js component

// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }
//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)} value={color}/>
//         

//         <button>Add-Color</button> {color}

//         <ColorBox/>
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 30
// Map the ColorList Array
// And Pass the Props to ColorBox.js Component
// After go to ColorBox.js Component

// export  function AddColor() {
//     const[color, setColor] = useState("orange")
    
//     const colorStyles={
//         backgroundColor: color
//     }

//     const colorList = ["Crimsson", "Black", "Blue", "green", "brown"]

//   return (
//     <div>
//         <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)} value={color}/>

//         <button>Add-Color</button>
//         {color}
           
//            {
//               colorList.map((clr)=> <ColorBox color={clr} />)
//            }
        
//     </div>
//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 31
// Onclick function using and Add the color in Bottom
// If you want Adding two color frequently so give one more Color in Array | <button onClick={()=> setColorList([...colorList, color, color])}>Add-Color</button>
// After go MovieList.js Component

export  function AddColor() {
    const[color, setColor] = useState("orange")
    
    const colorStyles={
        backgroundColor: color
    }

    const [colorList, setColorList] = useState(["Crimsson", "Black", "Blue", "green", "brown"]);

  return (
    <div className='add-color'>
        <input style={colorStyles} type="text" placeholder="Enter a new think"  onChange={(event)=> setColor(event.target.value)} value={color}/>
                          {/* Copy Existing colorList & Add New Color to it  */}
        <button onClick={()=> setColorList([...colorList, color])}>Add-Color</button>
        {color}
           
           {
              colorList.map((clr, index)=> <ColorBox key={index} color={clr} />)
           }
        
    </div>
  )
}