import React, { useState } from 'react'
import { Counter } from './Counter'
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// 19
//
// export  function Movie({movieTake}) {

//     return (
//       <div className="movie-container">
//         <img className="movie-poster" src={movieTake.poster} />
//         <div className="movie-spec">
//           <h2 className="movie-name">{movieTake.name}</h2>
//           <h3 className="movie-rating">⭐{movieTake.rating}</h3>
//         </div>

//         <p className="movie-summary">{movieTake.summary}</p>
//         <Counter/>
//       </div>
//     )
// }

// -------------------------------------------------------------------------------------------------------------------------------- //
// 20
// Rating Star Color changing Value Given
// After go to Counter.js

// export  function Movie({movieTake}) {

//     const ratingStyles = {
//         color: movieTake.rating >= 8.5 ? "green":"red"
//     }
//     return (
//       <div className="movie-container">
//         <img className="movie-poster" src={movieTake.poster} />
//         <div className="movie-spec">
//           <h2 className="movie-name">{movieTake.name}</h2>
//           <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//         </div>

//         <p  className="movie-summary">{movieTake.summary}</p>
//         <Counter/>
//       </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 21
// If  you Will Click Toggle Button  randomly change "True  or  False" ;
// You Will See movie card side , Which is Current value appear on movie card 


// export  function Movie({movieTake}) {

//     const ratingStyles = {
//         color: movieTake.rating >= 8.5 ? "green":"red"
//     }

//     const [show, setShow] = useState(true);
//     return (
//       <div className="movie-container">
//         <img className="movie-poster" src={movieTake.poster} />
//         <div className="movie-spec">
//           <h2 className="movie-name">{movieTake.name}</h2>
//           <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//         </div>
//   <button onClick={()=> setShow(!show)}>
//     Toggle Description - {show + ""}
//   </button>

//         {show ? <p  className="movie-summary">{movieTake.summary}</p> : null}
//         <Counter/>
//       </div>
//     )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 22
// Remove current state value chnage
// After go to AddColor.js componrnts


// export  function Movie({movieTake}) {

//     const ratingStyles = {
//         color: movieTake.rating >= 8.5 ? "green":"red"
//     }

//     const [show, setShow] = useState(true);


//     return (
//       <div className="movie-container">
//         <img className="movie-poster" src={movieTake.poster} />
//         <div className="movie-spec">
//           <h2 className="movie-name">{movieTake.name}</h2>
//           <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//         </div>
//   <button onClick={()=> setShow(!show)}>
//     Toggle Description 
//   </button>

//         {show ? <p  className="movie-summary">{movieTake.summary}</p> : null}
//         <Counter/>
//       </div>
//     )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 43
// import icons & Toggle Button Also
//After go to MovieList.js components

// export function Movie({ movieTake }) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);


//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movieTake.poster} />
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)}  >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>
//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       <Counter />
//     </div>
//   )
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 51
// Info Button Added here & also Navigate given
// After go to MovieList.js Components.....

// export function Movie({ movieTake }) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);

//   const navigate = useNavigate()


//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movieTake.poster} />
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>

//           <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/color-game`)} >
//             <InfoIcon fontSize="medium"/>
//           </IconButton>
//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       <Counter />
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 53
// Index Value Giving Here And passed
// ID is appear on movie card 


// export function Movie({ movieTake, id }) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);

//   const navigate = useNavigate()


//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movieTake.poster} />
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>

//           <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/color-game`)} >
//             <InfoIcon fontSize="medium"/>
//           </IconButton>

//           {id}
//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       <Counter />
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 54
// ID was Given to Onclick Navigate method .... then change the Address URL 
// After go to MovieDetail.js Components
//

// export function Movie({ movieTake, id }) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);

//   const navigate = useNavigate()


//   return (
//     <div className="movie-container">
//       <img className="movie-poster" src={movieTake.poster} />
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>

//           <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/movies/${id}`)} >
//             <InfoIcon fontSize="medium"/>
//           </IconButton>

//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       <Counter />
//     </div>
//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //
// 69
// Card syntex code import from Material Icon's...
//  After go to App.js Component

// export function Movie({ movieTake, id }) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);

//   const navigate = useNavigate()


//   return (
//     <Card className="movie-container">
 
//       <img className="movie-poster" src={movieTake.poster} />

//       <CardContent>
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>

//           <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/movies/${id}`)} >
//             <InfoIcon fontSize="medium"/>
//           </IconButton>

//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       </CardContent>

//       <CardActions>

//       <Counter />

//       </CardActions>

//     </Card>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 87
// First time JSX Props passing from MovieList to here, This is called " Render Props Pattern ".
// After go to MovieList.js Components


// export function Movie({ movieTake, id, deleteButton}) {

//   const ratingStyles = {
//     color: movieTake.rating >= 8.5 ? "green" : "red"
//   }

//   const [show, setShow] = useState(true);

//   const navigate = useNavigate()


//   return (
//     <Card className="movie-container">
 
//       <img className="movie-poster" src={movieTake.poster} />

//       <CardContent>
//       <div className="movie-spec">
//         <h2 className="movie-name">{movieTake.name}
//           <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
//             {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
//           </IconButton>

//           <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/movies/${id}`)} >
//             <InfoIcon fontSize="medium"/>
//           </IconButton>

//         </h2>

//         <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
//       </div>

//       {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
//       </CardContent>

//       <CardActions>
      
//       <Counter />   {deleteButton} 

//       </CardActions>

//     </Card>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 118
// editButton Props came from MovieList.js Component to Here, then Edit Icon will be show in Each Movie card  
// After go to MovieList.js Components


export function Movie({ movieTake, id, deleteButton, editButton}) {

  const ratingStyles = {
    color: movieTake.rating >= 8.5 ? "green" : "red"
  }

  const [show, setShow] = useState(true);

  const navigate = useNavigate()


  return (
    <Card className="movie-container">
 
      <img className="movie-poster" src={movieTake.poster} />

      <CardContent>
      <div className="movie-spec">
        <h2 className="movie-name">{movieTake.name}
          <IconButton  color="primary" aria-label="Toggle-Description"  onClick={() => setShow(!show)} >
            {show ? <ExpandLessIcon fontSize="large"/> : <ExpandMoreIcon fontSize="large"/>}
          </IconButton>

          <IconButton  color="primary" aria-label="Movie-Info"  onClick={() => navigate(`/movies/${id}`)} >
            <InfoIcon fontSize="medium"/>
          </IconButton>

        </h2>

        <h3 style={ratingStyles} className="movie-rating">⭐{movieTake.rating}</h3>
      </div>

      {show ? <p className="movie-summary">{movieTake.summary}</p> : null}
      </CardContent>

      <CardActions>
      
      <Counter /> {editButton}   {deleteButton} 

      </CardActions>

    </Card>
  )
}

