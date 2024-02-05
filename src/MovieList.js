import React, { useEffect, useState} from "react";
import { Movie } from "./Movie";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AddMovie } from "./AddMovie";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";


// 19,
//

// export function MovieList() {

//   const movie = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ]

//   return (

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>

//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//32
// Add input box & Give useState value, and Result will appear toward bottom

// export function MovieList() {

//   const movie = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ]

//   const [name, setName] = useState("");

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event)=> setName(event.target.value)} />
//         {name}
//         <input type={"text"} placeholder='Enter a Poster' />
//         <input type={"text"} placeholder='Enter a Rating' />
//         <input type={"text"} placeholder='Enter a Summary' />
//         <button>Add-Movie</button>
//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//33
//

// export function MovieList() {

//   const movie = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ]

//   const [name, setName] = useState("");

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event)=> setName(event.target.value)} />
//         {name}
//         <input type={"text"} placeholder='Enter a Poster' />
//         <input type={"text"} placeholder='Enter a Rating' />
//         <input type={"text"} placeholder='Enter a Summary' />
//         <button>Add-Movie</button>
//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 34
// Give useState to All inputs value
// And Show in bottom, What will you type in input box, that will appear in bottom side
//

// export function MovieList() {

//   const movie = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ]

//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event)=> setName(event.target.value)} />
//         {name}
//         <input type={"text"} placeholder='Enter a Poster'  onChange={(event)=> setPoster(event.target.value)} />
//         {poster}
//         <input type={"text"} placeholder='Enter a Rating'  onChange={(event)=> setRating(event.target.value)} />
//         {rating}
//         <input type={"text"} placeholder='Enter a Summary'  onChange={(event)=> setSummary(event.target.value)} />
//         {summary}
//         <button>Add-Movie</button>
//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//35
//What will you type in input box. that will appear in Console side check (  Inspect and Console )

// export function MovieList() {

//   const [movie, setMovie] = useState([
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ])

//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event) => setName(event.target.value)} />
//         {name}
//         <input type={"text"} placeholder='Enter a Poster' onChange={(event) => setPoster(event.target.value)} />
//         {poster}
//         <input type={"text"} placeholder='Enter a Rating' onChange={(event) => setRating(event.target.value)} />
//         {rating}
//         <input type={"text"} placeholder='Enter a Summary' onChange={(event) => setSummary(event.target.value)} />
//         {summary}
//         <button onClick={() => {
//           const newMovie = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary
//           }

//           console.log(newMovie)

//         }}>Add-Movie</button>

//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 36
// New Movie Card Added but OnClick function is very long......
//After go to Counter.js Component

// export function MovieList() {

//   const [movie, setMovie] = useState([
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ])

//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event) => setName(event.target.value)} />
//         {name}
//         <input type={"text"} placeholder='Enter a Poster' onChange={(event) => setPoster(event.target.value)} />
//         {poster}
//         <input type={"text"} placeholder='Enter a Rating' onChange={(event) => setRating(event.target.value)} />
//         {rating}
//         <input type={"text"} placeholder='Enter a Summary' onChange={(event) => setSummary(event.target.value)} />
//         {summary}
//         <button onClick={() => {
//           const newMovie = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary
//           }

//          setMovie([...movie, newMovie])
//           console.log(movie)

//         }}>Add-Movie</button>

//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------- //
//38
//OnClick function Changed, because button line is very length,
//So you have to separate write a code, that code varible Name  you will take and give to onclick function

// export function MovieList() {

//   const [movie, setMovie] = useState([
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ])

//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary
//     }
// ////// Copy from Exsiting Value MovieList & add newMovie to it //

//    setMovie([...movie, newMovie])
//     console.log(movie);
//   }

//   return (

//     <div>

//       <div className='add-movie-form'>
//         <input type={"text"} placeholder='Enter a Name' onChange={(event) => setName(event.target.value)} />

//         <input type={"text"} placeholder='Enter a Poster' onChange={(event) => setPoster(event.target.value)} />

//         <input type={"text"} placeholder='Enter a Rating' onChange={(event) => setRating(event.target.value)} />

//         <input type={"text"} placeholder='Enter a Summary' onChange={(event) => setSummary(event.target.value)} />

//         <button onClick={addMovie}>Add-Movie</button>

//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 39
// Immport MUI Materials Icon's
// After go to Counter.js Components

// export function MovieList() {

//   const [movie, setMovie] = useState([
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ])

//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary
//     }
// ////// Copy from Exsiting Value MovieList & add newMovie to it //

//    setMovie([...movie, newMovie])
//     console.log(movie);
//   }

//   return (

//     <div>

//       <div className='add-movie-form'>

//       <TextField id="outlined-basic" label="Name" variant="outlined" placeholder='Enter a Name' onChange={(event) => setName(event.target.value)} />
//       <TextField id="outlined-basic" label="Poster" variant="outlined" placeholder='Enter a Poster' onChange={(event) => setPoster(event.target.value)}  />
//       <TextField id="outlined-basic" label="Rating" variant="outlined" placeholder='Enter a Rating' onChange={(event) => setRating(event.target.value)}  />
//       <TextField id="outlined-basic" label="Summary" variant="outlined" placeholder='Enter a Summary' onChange={(event) => setSummary(event.target.value)} />

//         <Button variant="contained" onClick={addMovie}>Add-Movie</Button>

//       </div>

//       <div className="movie-list">
//         {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 43
// Add New Movie Form Seperate from Movie-list
// Passing the useState Props to AddMovie.js Components
// After go to AddMovie.js Components

// export function MovieList() {

//   const [movie, setMovie] = useState([
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
//     },

//   ])

//   return (

//     <div>

//        <AddMovie movie={movie} setMovie={setMovie}/>

//       <div className="movie-list">
// {
//   movie.map((store, index) => (
//     <div key={index}>
//       <Movie  movieTake={store} />
//     </div>
//   ))
// }
//       </div>
//     </div>

//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//49
//useState [movie, setMovie] this is Commonly pass the props to [ MovieList and AddMovie ]
// So, [ movie, setMovie ] pass the props from App.js to Here.....
// Remove from here is AddMovie
// After go to App.js component
//

// export function MovieList({ movie, setMovie }) {
//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store, index) => (
//           <div key={index}>
//             <Movie movieTake={store} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 52
// Given the Maping index Value to Child Movie Component
// After go Movie.js Components......

// export function MovieList({ movie, setMovie }) {
//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store, index) => (
//           <div key={index}>
//             <Movie movieTake={store} id={index}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// -=---------------------------------------------------------------------------------------------------------------------------------- //
// 83
// Seprate give the Fetch call
// After go to MovieDetail.js Componenets

// export function MovieList() {

//   const [movie, setMovie] = useState([]);

// ////// After App Components is Mounted---
// /////

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {method : "GET"})
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store, index) => (
//           <div key={index}>
//             <Movie movieTake={store} id={index}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------- //
// 85
// You have to Change here Maping methods Name  and Remove index
// First you should check Mock.api in Each Object's data's " id " You Give or Not , Plz check go to Mock.api
// If you doesn't give the " id " value, Result's doesn't show

// export function MovieList() {

//   const [movie, setMovie] = useState([]);

// ////// After App Components is Mounted---
// /////

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {method : "GET"})
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie movieTake={store} id={store.id}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------ //
// 86
// Delete Button Props passing
// This is the First time JSX Props passing from here to Movie.js Components, This is called " Render Props Pattern "
// After go to Movie.js Components

// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   ////// After App Components is Mounted---
//   /////

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={<button>Delete Me</button>}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------------------- //
// 88
// Delete Function Created here, But Not Deleted,So Check only Specific ID Clicked and Passed in Inspect & Console
//

// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   ////// After App Components is Mounted---
//   /////

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   const deleteMovie = (id) => {
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={
//                 <button onClick={() => deleteMovie(store.id)}>Delete Me</button>
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 89
// Delete Function inside use in Fetch call & method is DELETE method.
// ID deleted, but WithOut Refresh Deleted Item's Show in Display and also Inspect => Console Side
// After Deleted, You Should Refresh your Data's

// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   ////// After App Components is Mounted---
//   /////

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     })
//     .then((data) => data.json()) 
//      console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={
//                 <button onClick={() => deleteMovie(store.id)}>Delete Me</button>
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 90
// After Delete your item's then Auto Refreshing Your data's

// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={
//                 <button onClick={() => deleteMovie(store.id)}>Delete Me</button>
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 91
// Delete material icon & also Color give here, But They are not Correct Align


// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={
//                 <IconButton
//                   aria-label="delete"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 92
// Delete Button and Counter Like Button Correctly Alignment
// So,You have to give the display flex Already, you should check the Inspect => Console " FLEX Is or Not "
// Delete button Tag give the " Margin-left= Auto "  inSide
// Inline Css given 


// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>
//             <Movie
//               movieTake={store}
//               id={store.id}
//               deleteButton={
//                 <IconButton
//                 style={{marginLeft:"auto"}}
//                   aria-label="delete"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------- //
// 93
// SX does not InLine Css, But SX & Inline Css Doing Same Work
// SX Only Working in Material icon's.
// After go to App.js  Components

// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>

//             <Movie
//               movieTake={store}
//               id={store.id}

//               deleteButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="delete"
//                   color="error"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon  />
//                 </IconButton>
//               }

//             
//             />

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 117
// Edit button give to Child Component of " Movie " and also passed the Props
// After go to Movie.js Components


// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };

//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>

//             <Movie
//               movieTake={store}
//               id={store.id}

//               deleteButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="delete"
//                   color="error"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon  />
//                 </IconButton>
//               }

//               editButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="edit"
//                   color="secondary" 
//                 >
//                   <EditIcon />
//                 </IconButton>
//               }
//             />
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 119
// onClick Attribute give to editButton Props, then navigate given, after you will click the edit icon then ID's will show on Address bar  
// After go to EditMovie.js Components


// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`https://63b7a60e4f17e3a931d8be11.mockapi.io/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };


//   const navigate = useNavigate()
//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>

//             <Movie
//               movieTake={store}
//               id={store.id}

//               deleteButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="delete"
//                   color="error"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon  />
//                 </IconButton>
//               }

//               editButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="edit"
//                   color="secondary" 
//                   onClick={()=> navigate(`/movies/edit/${store.id}`)}
//                 >
//                   <EditIcon />
//                 </IconButton>
//               }
//             />
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 129
// import global.js here
// Now you have to change MockApi link to { API } 



// export function MovieList() {
//   const [movie, setMovie] = useState([]);

//   const getMovies = () => {
//     fetch(`${API}/movies`, {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   };

//   useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

//   const deleteMovie = (id) => {
//     fetch(`${API}/movies/${id}`, {
//       method: "DELETE",
//     }).then((data) => getMovies());
//     console.log("Deleting Movie", id);
//   };


//   const navigate = useNavigate()
//   return (
//     <div>
//       <div className="movie-list">
//         {movie.map((store) => (
//           <div key={store.id}>

//             <Movie
//               movieTake={store}
//               id={store.id}

//               deleteButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="delete"
//                   color="error"
//                   onClick={() => deleteMovie(store.id)}
//                 >
//                   <DeleteIcon  />
//                 </IconButton>
//               }

//               editButton={
//                 <IconButton
//                 sx={{marginLeft:"auto"}}
//                   aria-label="edit"
//                   color="secondary" 
//                   onClick={()=> navigate(`/movies/edit/${store.id}`)}
//                 >
//                   <EditIcon />
//                 </IconButton>
//               }
//             />
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 130
// if you will check Address Bar & console Network option, Check the header id will come own data id, MongoDB ID does not Come and 
// So, you have to change initial mapping id's { store._id } 
// After give " store._id " ,then If you click Info Button, Edit button, and Delete Button => check the Address bar MongoDB ID Appear


export function MovieList() {
  const [movie, setMovie] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };

  useEffect(() => getMovies(), []); //// => This is happening Auto Refresh

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
    console.log("Deleting Movie", id);
  };


  const navigate = useNavigate()
  return (
    <div>
      <div className="movie-list">
        {movie.map((store) => (
          <div key={store._id}>

            <Movie
              movieTake={store}
              id={store._id}

              deleteButton={
                <IconButton
                sx={{marginLeft:"auto"}}
                  aria-label="delete"
                  color="error"
                  onClick={() => deleteMovie(store._id)}
                >
                  <DeleteIcon  />
                </IconButton>
              }

              editButton={
                <IconButton
                sx={{marginLeft:"auto"}}
                  aria-label="edit"
                  color="secondary" 
                  onClick={()=> navigate(`/movies/edit/${store._id}`)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}
