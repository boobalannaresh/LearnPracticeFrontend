import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";

// 55
// After go to App.js Components...

// export function MovieDetail() {
//   return (
//     <div>
//         <h1> Movie Detail Page ✨✨⭐✨✨</h1>
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// 58
// Route path :id store data came from App.js to Here , So that ID you can use here
// Store :id data you can use here to UseParams via....
// After go to App.js Components

// export function MovieDetail() {
//     const {id} = useParams()
//     return (
//       <div>
//           <h1> Movie Detail Page ✨✨⭐✨✨ {id} </h1>
//       </div>
//     )
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 60
// Props came from App.js to Here
// Check And  Inspect => Console
// All movie card value's Only Show in inspect and console

// export function MovieDetail({movie, setMovie}) {

//     const {id} = useParams()
//     console.log(movie);

//     return (
//       <div>
//           <h1> Movie Detail Page ✨✨⭐✨✨ {id} </h1>
//       </div>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 61
// That ID you can Pass and Assign another varible then check the inspect and console Single data's came
//

// export function MovieDetail({movie, setMovie}) {

//     const {id} = useParams();
//     const singleData = movie[id];

//     console.log(movie, singleData);

//     return (
//       <div>
//           <h1> Movie Detail Page ✨✨⭐✨✨ {id} </h1>
//       </div>
//     )
//   }

// --------------------------------------------------------------------------------------------------------------------------------------------- //
// 62
// You can Filter data in H1 Tag's

// export function MovieDetail({movie, setMovie}) {

//     const {id} = useParams();
//     const singleData = movie[id];

//     console.log(movie, singleData);

//     return (
//       <div>
//           <h1> Movie Detail Page ✨✨⭐✨✨ {singleData.name} </h1>
//       </div>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// 63
// YouTube Embaded Code Copy and Paste here
//

// export function MovieDetail({ movie, setMovie }) {
//   const { id } = useParams();
//   const singleData = movie[id];

//   console.log(movie, singleData);

//   return (
//     <div>

//       <iframe
//         width="853"
//         height="480"
//         src="https://www.youtube.com/embed/cBNyTQM10Cg"
//         title="ப்ளக் ஆடம் (Black Adam) - Official Tamil Trailer 1"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe>

//       <h1> Movie Detail Page ✨✨⭐✨✨ {singleData.name} </h1>
//     </div>
//   );
// }

// -----------------------------------------------------------------------------------------------------------------------  ///
// 64
// Give the Width & Height value in < ifame /> tag
// After go to App.js Components

// export function MovieDetail({ movie, setMovie }) {
//   const { id } = useParams();
//   const singleData = movie[id];

//   console.log(movie, singleData);

//   const ratingStyles = {
//     color: singleData.rating >= 8.5 ? "green" : "red",
//   };

//   return (
//     <div>
//       <iframe
//         width="100%"
//         height="900px"
//         src={singleData.trailer}
//         title={singleData.name}
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe>

//       <div className="movie-detail-container">
//         <div className="movie-spec">
//           <h2 className="movie-name">{singleData.name}</h2>

//           <h3 style={ratingStyles} className="movie-rating">
//             ⭐{singleData.rating}
//           </h3>
//         </div>

//         <p className="movie-summary">{singleData.summary}</p>
//       </div>

//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------- //
// 66
// Back Button using Here and useNavigate use Also
// After go to App.js Components


// export function MovieDetail({ movie, setMovie }) {
//     const { id } = useParams();
//     const singleData = movie[id];
  
//     console.log(movie, singleData);
  
//     const ratingStyles = {
//       color: singleData.rating >= 8.5 ? "green" : "red",
//     };
  
//     const navigate = useNavigate();

//     return (
//       <div>
//         <iframe
//           width="100%"
//           height="900px"
//           src={singleData.trailer}
//           title={singleData.name}
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
  
//         <div className="movie-detail-container">
//           <div className="movie-spec">
//             <h2 className="movie-name">{singleData.name}</h2>
  
//             <h3 style={ratingStyles} className="movie-rating">
//               ⭐{singleData.rating}
//             </h3>
//           </div>
  
//           <p className="movie-summary">{singleData.summary}</p>
//         </div>
         
//         <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1) }>
//        Back
//       </Button>

//       </div>
//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 84
// Seprate fetch call given
// If You Click, Result's won't show , Because you have to change Maping method's  index => .id
// So go to MovieList.js Components


// export function MovieDetail() {
//   const { id } = useParams();

//   const [movie, setMovie] = useState([]);

//   ////// After App Components is Mounted---
//   ///// 
  
//     useEffect(() => {
//       fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {method : "GET"})
//         .then((data) => data.json())
//         .then((mv) => setMovie(mv));
//     }, []);

//     console.log(movie);

//     const ratingStyles = {
//       color: movie.rating >= 8.5 ? "green" : "red",
//     };
  
//     const navigate = useNavigate();

//   return (
//     <div>
//       <iframe
//         width="100%"
//         height="900px"
//         src={movie.trailer}
//         title={movie.name}
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe>

//       <div className="movie-detail-container">
//         <div className="movie-spec">
//           <h2 className="movie-name">{movie.name}</h2>

//           <h3 style={ratingStyles} className="movie-rating">
//             ⭐{movie.rating}
//           </h3>
//         </div>

//         <p className="movie-summary">{movie.summary}</p>
//       </div>
       
//       <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1) }>
//      Back
//     </Button>

//     </div>
//   );
// }
  

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 128
// import global.js here
// Now you have to change MockApi link to { API } 
// Next go to MovieList.js



export function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  ////// After App Components is Mounted---
  ///// 
  
    useEffect(() => {
      fetch(`${API}/movies/${id}`, {method : "GET"})
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    }, []);

    console.log(movie);

    const ratingStyles = {
      color: movie.rating >= 8.5 ? "green" : "red",
    };
  
    const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="900px"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>

          <h3 style={ratingStyles} className="movie-rating">
            ⭐{movie.rating}
          </h3>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
       
      <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1) }>
     Back
    </Button>

    </div>
  );
}
  