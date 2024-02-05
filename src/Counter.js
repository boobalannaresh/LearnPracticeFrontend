import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

// 15
//
// export function Counter(){
//   let [like, setLike] = useState(0);
//   let [disLike, setDisLike] = useState(0);
//   return(
// <div>
//   <button onClick = {() => setLike(like + 1)}>👍  {like}</button>

//   <button onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
// </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//16
// If 10 like above, it will color change ( "Red"  or  "Green")
//

// export function Counter(){
//     let [like, setLike] = useState(0);

//     let [disLike, setDisLike] = useState(0);

//     const likeStyles = {
//         color: like >= 10 ? "green" : "deepskyblue",
//         fontSize:"30px",
//         borderRadius:"10px"

//     }

//     const disLikeStyles = {
//         color : disLike >= 10 ? "red" : "deepskyblue",
//         fontSize:"30px",
//         borderRadius:"10px"
//     }
//     return(
//   <div>

//     <button style={likeStyles} onClick = {() => setLike(like + 1)}>👍  {like}</button>

//     <button style={disLikeStyles} onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
//   </div>
//     );
//   }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 17
// If 10 above come ( like or dislike ) "Awesome"------> This word Appear;
// After go to App.js component

// export function Counter(){
//     let [like, setLike] = useState(0);

//     let [disLike, setDisLike] = useState(0);

//     const likeStyles = {
//         color: like >= 10 ? "green" : "deepskyblue",
//         fontSize:"20px",
//         borderRadius:"7px",

//     }

//     const disLikeStyles = {
//         color : disLike >= 10 ? "red" : "deepskyblue",
//         fontSize:"20px",
//         borderRadius:"7px",
//         margin:"20px"
//     }
//     return(
//   <div>
//     { like - disLike >= 10 ? <h3>🤩 "You are Awesome" 🤗</h3> : null}   // This is a "Conditional Rendering" method
//     <button style={likeStyles} onClick = {() => setLike(like + 1)}>👍  {like}</button>

//     <button style={disLikeStyles} onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
//   </div>
//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 20
//

// export function Counter(){
//     let [like, setLike] = useState(0);

//     let [disLike, setDisLike] = useState(0);

//     return(
//   <div>

//     <button  onClick = {() => setLike(like + 1)}>👍  {like}</button>

//     <button onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
//   </div>
//     );
//   }
// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
//37
//OnClick function Changed, because button line is very length,
//So you have to separate write a code, that code varible Name  you will take and give to onclick function

//After go to Movielist.js component

// export function Counter(){
//   let [like, setLike] = useState(0);

//   let [disLike, setDisLike] = useState(0);

//   const increamentLike = () => setLike(like + 1);
//   const increamentDisLike =() => setDisLike(disLike + 1);

//   return(
// <div>

//   <button  onClick = {increamentLike}>👍  {like}</button>

//   <button onClick = {increamentDisLike}>👎  {disLike}</button>
// </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 40
// Button Icon's Import here, Color also Giving
// ( aria-label="Like" ) ----->  This is useful for Blind Person

// export function Counter() {
//   let [like, setLike] = useState(0);

//   let [disLike, setDisLike] = useState(0);

//   const increamentLike = () => setLike(like + 1);
//   const increamentDisLike = () => setDisLike(disLike + 1);

//   return (
//     <div>
//       <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
//         👍{like}
//       </IconButton>
//       <IconButton aria-label="Dislike" color="error" onClick={increamentDisLike}>
//       👎 {disLike}
//       </IconButton>

//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 41
//Import the badges icons 
// After Go to Movie.js components


// export function Counter() {
//   let [like, setLike] = useState(0);

//   let [disLike, setDisLike] = useState(0);

//   const increamentLike = () => setLike(like + 1);
//   const increamentDisLike = () => setDisLike(disLike + 1);

//   return (
//     <div>
//       <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
//         <Badge badgeContent={like} color="primary">
//           👍
//         </Badge>
//       </IconButton>
//       <IconButton
//         aria-label="Dislike"
//         color="error"
//         onClick={increamentDisLike}
//       >
//         <Badge badgeContent={disLike} color="error">
//           👎
//         </Badge>
//       </IconButton>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------- //
// 76
// useEffect used here
// UseEffect, Result will appear check the Inspect => console, If U Click Like button result will show in console
// But If u Click Dislike button that's also show in Console, Because You does not use Array Dependancies[] in useEffect 
// So, Whatever  you have STATE & PROPS, it  will show in Console, 
// What will you click any button depends in Props and State related button,Result will show in Console 
// It does not Consider to Which Props & State button you click 
// 

// export function Counter() {
//   let [like, setLike] = useState(0);

//   let [disLike, setDisLike] = useState(0);

//   const increamentLike = () => setLike(like + 1);
//   const increamentDisLike = () => setDisLike(disLike + 1);

//   useEffect(()=>{
//     console.log("The like Value is Updated", like)
//   })

//   return (
//     <div>
//       <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
//         <Badge badgeContent={like} color="primary">
//           👍
//         </Badge>
//       </IconButton>
//       <IconButton
//         aria-label="Dislike"
//         color="error"
//         onClick={increamentDisLike}
//       >
//         <Badge badgeContent={disLike} color="error">
//           👎
//         </Badge>
//       </IconButton>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------- //
// 77
// If You use in Array Dependancies, Which button U Click that's only Show in Inspect => Console

// export function Counter() {
//   let [like, setLike] = useState(0);

//   let [disLike, setDisLike] = useState(0);

//   const increamentLike = () => setLike(like + 1);
//   const increamentDisLike = () => setDisLike(disLike + 1);

//   useEffect(()=>{
//     console.log("The like Value is Updated", like)
//   },[like])

//   return (
//     <div>
//       <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
//         <Badge badgeContent={like} color="primary">
//           👍
//         </Badge>
//       </IconButton>
//       <IconButton
//         aria-label="Dislike"
//         color="error"
//         onClick={increamentDisLike}
//       >
//         <Badge badgeContent={disLike} color="error">
//           👎
//         </Badge>
//       </IconButton>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// 78
// If You will give only like inside the console.log, 
// But You will give Array Dependancise value give [like, disLike] , DisLike  Value also call in Inspect & Console 
// After go to App.js Components

export function Counter() {
  let [like, setLike] = useState(0);

  let [disLike, setDisLike] = useState(0);

  const increamentLike = () => setLike(like + 1);
  const increamentDisLike = () => setDisLike(disLike + 1);

  useEffect(()=>{
    console.log("The like Value is Updated", like)
  },[like, disLike])

  return (
    <div>
      <IconButton aria-label="Like" color="primary" onClick={increamentLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="Dislike"
        color="error"
        onClick={increamentDisLike}
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
