import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { double, Welcome } from "./Welcome";
import { User } from "./User";
import { MovieList } from "./MovieList";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";
import { MovieDetail } from "./MovieDetail";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";

// function App() {

// let name= "Naresh";

//   return (
//     <div className="App">
//       <User />
//       <User />
//       <User />
//       <User/>
//     </div>
//   );
// }

// // User component (Declaration) but this function declaration;

// function User(){
//  let name="Boobalan";
//  console.log(name)
//   return(
//     <h1>Hello {name} Who are You...!!!-{10*20} Followers 😧😵🤫</h1>
//   )
// }
// export default App;
// ----------------------------------------------------------------------------------------------------------------------------------- //
//1,
//

// function App() {

//   let name= "Naresh";

//     return (
//       <div className="App">
//         <User name="Insta" pic="https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054" />
//         <User name="Whatsapp" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"/>
//         <User name="Emoji's" pic="https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"/>
//         <User name="Flower" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"/>
//       </div>
//     );
//   }

// //props is a Object data-type

// function User(props){

//   console.log(props, typeof props)
//    return(
//      <h1>Hello {props.name} Who are You...!!!-{10*20} Followers 😧😵🤫</h1>
//    )
//  }
//  export default App;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//1, 2,
//

// function App() {

//   let name= "Naresh";

//     return (
//       <div className="App">
//         <User name="Insta" pic="https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054" />
//         <User name="Whatsapp" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"/>
//         <User name="Emoji's" pic="https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"/>
//         <User name="Flower" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"/>
//       </div>
//     );
//   }

////Giving css go to App.css

// function User(props){

//   console.log(props, typeof props)
//    return(
//      <h1 className="user-head">Hello {props.name} Who are You...!!!-{10*20} Followers 😧😵🤫</h1>
//    )
//  }
//  export default App;
// -----------------------------------------------------------------------------------------------------------------------------------------------------------//
//1, 2, 3,
//

// function App() {

//   let name= "Naresh";

//     return (
//       <div className="App">
//         <User name="Insta" pic="https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054" />
//         <User name="Whatsapp" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"/>
//         <User name="Emoji's" pic="https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"/>
//         <User name="Flower" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"/>
//       </div>
//     );
//   }

// function User(props){

//   console.log(props, typeof props)
//    return(
//     <div>
//     <img className="pic" src={props.pic} />
//      <h1 className="user-head">Hello,<span className="name"> {props.name} </span></h1>
//      </div>
//    )
//  }
// -------------------------------------------------------------------------------------------------------------------------------------------//
//1, 2, 3, 4,
//

// function App() {

//   let name= "Naresh";

//     return (
//       <div className="App">
//         <User name="Insta" pic="https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054" />
//         <User name="Whatsapp" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"/>
//         <User name="Emoji's" pic="https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"/>
//         <User name="Flower" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"/>
//       </div>
//     );
//   }
//

////Props Destructure
////Another Type Destructure

// function User(props){

// const {name, pic} = props
//    return(
//     <div>
//     <img className="pic" src={pic} />
//      <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//      </div>
//    )
//  }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//1, 2, 3, 4, 5
//

// function App() {

//   let name= "Naresh";

//     return (
//       <div className="App">
//         <User name="Insta" pic="https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054" />
//         <User name="Whatsapp" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"/>
//         <User name="Emoji's" pic="https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"/>
//         <User name="Flower" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"/>
//       </div>
//     );
//   }

// //Props Destructure
//

// function User({ name, pic}){

//   return(
//    <div>
//    <img className="pic" src={pic} />
//     <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//     </div>
//   )
// }

// export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
//6
//

// function App() {

//     return (
//       <div className="App">
//         <Welcome name="Naresh" />
//         <Welcome name="Ninja" />
//         <Welcome name="Boom" />
//       </div>
//     );
//   }

// function Welcome({name}){
//   return(
//     <div>
//      <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//      </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 7
// DRY (Don't Repeat Yourself)
// So, Maping use

// function App() {
//  const names= ["Naresh", "Ninja", "Boom"];
//   return (
//     <div className="App">
//     {
//       names.map((nm) => <Welcome name={nm} />)
//     }
//     </div>
//   );
// }

// function Welcome({name}){
// return(
//   <div>
//    <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//    </div>
// );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 8
//

// function App() {
//   const profile = [
//     {
//       name:"Insta",
//       pic:"https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054"
//     },
//     {
//       name:"Whatsapp",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"
//     },
//     {
//       name:"Emoji's",
//       pic:"https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"
//     },
//     {
//       name:"Flower",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"
//     }
//   ]
//    return (
//      <div className="App">
//      {
//        profile.map((list) => <User name={list.name} pic={list.pic} /> )
//      }
//      </div>
//    );
//  }

// // Props Destructure
// //

// function User({ name, pic}){

//   return(
//    <div>
//    <img className="pic" src={pic} />
//     <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//     </div>
//   )
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 9
//
//

// function App() {
//   const movie = [
//     {
//       title: "Love Today",
//       rating:"8",
//       pic: "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
//       description: "Love Today was released theatrically on 4 November 2022, and received highly positive reviews from critics and audience. The film was a critical and commercial success at the box office."
//     },
//     {
//       title: "Beast",
//       rating:"8.4",
//       pic: "https://www.cinejosh.com/reviewsimg/big/beast-review_b_1304220116.jpg",
//       description: "Beast Movie Review: Vijay Fails To ‘Master’ This One, But It’s Still A Celebration For Thalapathy Fans!"
//     },
//     {
//       title: "Ponniyin Selvan - 1",
//       rating:"9.5",
//       pic: "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
//       description: "On 17 September 2022, Mani Ratnam in a press meet, confirmed that Ponniyin Selvan: II (PS2) would be released in six to nine months after the theatrical release of Ponniyin Selvan: "
//     },
//     {
//       title: "Sardar",
//       rating:"7.8",
//       pic: "https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/sardar-20220901165519-20078.jpg",
//       description: "The sequel to blockbuster movie Sardar, which stars actor Karthi in the lead role, has officially been announced with the title Sardar Part 2. The announcement took place during Sardar's success meet."
//     }
//   ]
//   return (
//     <div className="App-movie">
//       {
//         movie.map((list) => <User title={list.title} rating={list.rating} pic={list.pic} description={list.description} />)
//       }
//     </div>
//   );
// }

// // Props Destructure
// //

// function User({ title, pic, description, rating }) {

//   return (
//     <div className="user">
//       <img className="poster" src={pic} />
//       <div className="title-rating">
//         <h2 className="title">{title}</h2>
//         <h3 className="rating">⭐{rating}</h3>
//       </div>

//       <p className="details">{description}</p>
//     </div>
//   )
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 10
// Result will Appear in Console --> Inspect

// function App() {

//   return (
//     <div className="App-movie">

//       <Counter/>

//     </div>
//   );
// }

// function Counter(){
//   let like = 10;
//   return(
// <div>
//   <button onClick = {() =>{ console.log(like++)}}>Like</button>
//   <p>{like}</p>
// </div>
//   );
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 11
// // Now We Are using  "const [state, setState] = useState(initialValue) "
// // And also Import { useState } from "react";

// function App() {

//   return (
//     <div className="App-movie">

//       <Counter/>

//     </div>
//   );
// }

// function Counter(){
//   let [like, setLike] = useState(10);
//   return(
// <div>
//   <button onClick = {() => setLike(like + 1)}>Like</button>
//   <p>{like}</p>
// </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 12
// Now We Are using  "const [state, setState] = useState(initialValue) "
// And also Import { useState } from "react";

// function App() {

//   return (
//     <div className="App-movie">

//       <Counter/>

//     </div>
//   );
// }

// function Counter(){
//   let [like, setLike] = useState(0);
//   let [disLike, setDisLike] = useState(0);
//   return(
// <div>
//   <button onClick = {() => setLike(like + 1)}>👍  {like}</button>

//   <button onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
// </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//13

// function App() {
//   const profile = [
//     {
//       name:"Insta",
//       pic:"https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054"
//     },
//     {
//       name:"Whatsapp",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"
//     },
//     {
//       name:"Emoji's",
//       pic:"https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"
//     },
//     {
//       name:"Flower",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"
//     }
//   ]
//    return (
//      <div className="App">
//      {
//        profile.map((list) => <User name={list.name} pic={list.pic} />  )
//      }

//      </div>
//    );
//  }

// // Props Destructure
// //

// function User({ name, pic}){

//   return(
//    <div>
//    <img className="pic" src={pic} />
//     <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//     <Counter/>
//     </div>
//   )
// }

// function Counter(){
//   let [like, setLike] = useState(0);
//   let [disLike, setDisLike] = useState(0);
//   return(
// <div>
//   <button onClick = {() => setLike(like + 1)}>👍  {like}</button>

//   <button onClick = {() => setDisLike(disLike + 1)}>👎  {disLike}</button>
// </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------- //
//14
// Named import & export  ( Ex: import {Welcome} from "./Welcome" )
// Go to Welocme Component

// function App() {
//  const names= ["Naresh", "Ninja", "Boom"];
//   return (
//     <div className="App">
//     {
//       names.map((nm) => <Welcome name={nm} />)
//     }
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//15
// Go to Welcome Component;
// And import & export --> "common line"

// console.log(double(80));

// function App() {
//   const names= ["Naresh", "Ninja", "Boom"];
//    return (
//      <div className="App">
//      {
//        names.map((nm) => <Welcome name={nm} />)
//      }
//      </div>
//    );
//  }

//  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
//16, 17
// Go to Counter.js component

// function App() {
//   const profile = [
//     {
//       name:"Insta",
//       pic:"https://www.businessinsider.in/photo/92182664/instagram-profile-how-to-pin-photos-and-videos-on-your-instagram-profile.jpg?imgsize=13054"
//     },
//     {
//       name:"Whatsapp",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_kg7PLT43QBL-3v-MMeF5QTACk2-A5XF643Tx6TeKTrBW7xgLI2vlVCbi5m9ubWJyV0&usqp=CAU"
//     },
//     {
//       name:"Emoji's",
//       pic:"https://hips.hearstapps.com/hmg-prod/images/two-emoji-badges-in-love-royalty-free-image-1603731603.jpg"
//     },
//     {
//       name:"Flower",
//       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVg86iCzgM4Mw1yKl5aFf2YjWCVqK9lao_A&usqp=CAU"
//     }
//   ]
//    return (
//      <div className="App">
//      {
//        profile.map((list) => <User name={list.name} pic={list.pic} />  )
//      }

//      </div>
//    );
//  }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 18
// Movie Card Create Now

// function App() {
//   const movie = [
//     {
//       name: "Black Adam",
//       rating:"8",
//       poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating:"8.4",
//       poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating:"9.5",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating:"7.8",
//       poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
//     }
//   ]
//   return (
//     <div className="App-movie">
//       {
//         movie.map((list) => <User name ={list.name} rating={list.rating} poster={list.poster} summary={list.summary} />)
//       }
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------- //
//19,20,21,22
//

// function App() {
//   return (
//     <div className='App'>

//       <MovieList/>

//     </div>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
//23, 24, 25, 26, 27, 28,29,30,31,32
//

// function App() {
//   return (
//     <div className='App'>
//       <AddColor />
//       <MovieList/>

//     </div>
//   )
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 28
//

// function App() {
//   return (

// <div className='App'>
// <AddColor />
// <MovieList />

// </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------ //
//45
// Import Routes

// function App() {
//     return (

//   <div className='App'>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<MovieList />} />
//         <Route path="/color-game" element={<AddColor />} />

//         {/* <Route path="about" element={<About />} /> */}
//       </Routes>

//   {/* <AddColor />
//   <MovieList /> */}

//   </div>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// 46
// Import Anchor Tag Instead of this ("Link Used")
//

// function App() {
//   return (

// <div className='App'>

//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList />} />
//       <Route path="/color-game" element={<AddColor />} />

//       {/* <Route path="about" element={<About />} /> */}
//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 47
// Page Not Found Added the Routes

// function App() {
//   return (

// <div className='App'>

//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList />} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />

//       {/* <Route path="about" element={<About />} /> */}
//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 48
// Navigate the Route to Replace the URL
// After go to MovieList.js Components

// function App() {
//   return (

// <div className='App'>

//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList />} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//       {/* <Route path="about" element={<About />} /> */}
//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 50
// useState commonly gave here " [movie, setMovie]=useState() "
// So, pass the Props from here to child components
//After go to Movie.js Components

// function App() {

  // const [movie, setMovie] = useState([
  //   {
  //     name: "Black Adam",
  //     rating: "8.6",
  //     poster: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
  //     summary: "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). "
  //   },
  //   {
  //     name: "Thor: Love and Thunder",
  //     rating: "8.4",
  //     poster: "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
  //     summary: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. "
  //   },
  //   {
  //     name: "Avatar: The Way of Water",
  //     rating: "9.5",
  //     poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
  //     summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora"
  //   },
  //   {
  //     name: "Transformers: Rise of the Beasts",
  //     rating: "7.8",
  //     poster: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
  //     summary: "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons."
  //   },
  //   {
  //     name: "Ninja Assassin",
  //     rating: "7.8",
  //     poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
  //     summary: "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. "
  //   },

  // ])

//   return (

// <div className='App'>

//   <ul>

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/movies/add">Add-Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/add" element={<AddMovie movie={movie} setMovie={setMovie}/>} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------- //
// 51
// useNavigate use here
//

// function App() {

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

// <div className='App'>

//   <ul>

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/movies/add">Add-Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/add" element={<AddMovie movie={movie} setMovie={setMovie}/>} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 56
// Add New Route MovieDetail.js Components
// Match (" Address url and Routh path ") , so  that Reason i  gave  the Same URL path here
// what did you give Route Path, that id only working if you click " I "  icon Button
// So,If you Click Others I icon's, Route will go Error Page ( 404 Page Not Found )
//

// function App() {

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

// <div className='App'>

//   <ul>

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/movies/add">Add-Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/1" element={< MovieDetail/>} />
//       <Route path="/movies/add" element={<AddMovie movie={movie} setMovie={setMovie}/>} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 57
//// Match (" Address url and Routh path ") , so  that Reason i  gave  the Same URL path here
// If you give Route Path :id  in element={ MovieDetail} that will show, whatever will you click I icon's button go to all MovieDetail components page
// This method ----> Variable ( match any movie ID ) <------
// And also What I icon's click in movie, that ID will store in Route path EX= ("/movie/:id")
// This :id store data , you can take and pass the Another  components useParams()
// After go to MovieDetail.js components

// function App() {

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

// <div className='App'>

//   <ul>

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/movies/add">Add-Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/:id" element={< MovieDetail/>} />
//       <Route path="/movies/add" element={<AddMovie movie={movie} setMovie={setMovie}/>} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------- //
// 59
// [movie, setMovie] = useState() pass the props to Route path element MovieDetail components
// After go to MovieDetail .js Components

// function App() {

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

// <div className='App'>

//   <ul>

//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/movies">Movies</Link></li>
//     <li><Link to="/movies/add">Add-Movies</Link></li>
//     <li><Link to="/color-game">Color-Game</Link></li>

//   </ul>

//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<MovieList movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/:id" element={< MovieDetail movie={movie} setMovie={setMovie}/>} />
//       <Route path="/movies/add" element={<AddMovie movie={movie} setMovie={setMovie}/>} />
//       <Route path="/color-game" element={<AddColor />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/films" element={<Navigate replace to="/movies" />} />

//     </Routes>

// {/* <AddColor />
// <MovieList /> */}

// </div>
//   )
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 65
// Movie-data's give's and take Seprate data's and Assign give UseState inside
// And Also Added Trailer URL link in INITIAL_MOVIE_LIST
// After go to MovieDetail.js Components

// function App() {

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer:"https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer:"https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer:"https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer:"https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer:"https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   return (
//     <div className="App">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/movies">Movies</Link>
//         </li>
//         <li>
//           <Link to="/movies/add">Add-Movies</Link>
//         </li>
//         <li>
//           <Link to="/color-game">Color-Game</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/movies"
//           element={<MovieList movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/:id"
//           element={<MovieDetail movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/add"
//           element={<AddMovie movie={movie} setMovie={setMovie} />}
//         />
//         <Route path="/color-game" element={<AddColor />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/films" element={<Navigate replace to="/movies" />} />
//       </Routes>

//       {/* <AddColor />
// <MovieList /> */}
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 67
// Nav bar using here

// function App() {

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer:"https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer:"https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer:"https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer:"https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer:"https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   return (
//     <div className="App">

// <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>

//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/movies">Movies</Link>
//         </li>
//         <li>
//           <Link to="/movies/add">Add-Movies</Link>
//         </li>
//         <li>
//           <Link to="/color-game">Color-Game</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/movies"
//           element={<MovieList movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/:id"
//           element={<MovieDetail movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/add"
//           element={<AddMovie movie={movie} setMovie={setMovie} />}
//         />
//         <Route path="/color-game" element={<AddColor />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/films" element={<Navigate replace to="/movies" />} />
//       </Routes>

//       {/* <AddColor />
// <MovieList /> */}
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 68
// Value's give the Navbar and also Onclick
// After go to Movie.js Componenets

// function App() {

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Avengers: Endgame",
//       rating: "9.2",
//       trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//       poster:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//       summary:
//         "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame"
//     },
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate()

//   return (
//     <div className="App">
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add-Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/color-game")}>Color-Game</Button>
//         </Toolbar>
//       </AppBar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/movies"
//           element={<MovieList movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/:id"
//           element={<MovieDetail movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/add"
//           element={<AddMovie movie={movie} setMovie={setMovie} />}
//         />
//         <Route path="/color-game" element={<AddColor />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/films" element={<Navigate replace to="/movies" />} />
//       </Routes>

//       {/* <AddColor />
// <MovieList /> */}
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 70
// Go to Material UI and Check the Customizatiom Option then Click and Ckeck Dark Mode then Copy the Syntex
// Copy and Paste the Code ( datkTheme,  <ThemeProvider/> )
// You Can change Value in darkTheme Ex: mode: "dark"  or mode: "light"

// function App() {

//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Avengers: Endgame",
//       rating: "9.2",
//       trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//       poster:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//       summary:
//         "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame"
//     },
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate()

//   return (
//     <ThemeProvider theme={darkTheme}>
//     <div className="App">
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add-Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/color-game")}>Color-Game</Button>
//         </Toolbar>
//       </AppBar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/movies"
//           element={<MovieList movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/:id"
//           element={<MovieDetail movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/add"
//           element={<AddMovie movie={movie} setMovie={setMovie} />}
//         />
//         <Route path="/color-game" element={<AddColor />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/films" element={<Navigate replace to="/movies" />} />
//       </Routes>

//       {/* <AddColor />
// <MovieList /> */}
//     </div>
//     </ThemeProvider>

//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// 71
// useState Apply here
// Create the Button in Navbar side

// function App() {

// const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode
//     },
//   });

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Avengers: Endgame",
//       rating: "9.2",
//       trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//       poster:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//       summary:
//         "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame"
//     },
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate()

//   return (
//     <ThemeProvider theme={darkTheme}>
//     <div className="App">
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add-Movies</Button>
//           <Button color="inherit" onClick={()=> navigate("/color-game")}>Color-Game</Button>

//           <Button color="inherit" onClick={()=> setMode(mode === "light" ? "dark" : "light")}>Dark Theme</Button>

//         </Toolbar>
//       </AppBar>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/movies"
//           element={<MovieList movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/:id"
//           element={<MovieDetail movie={movie} setMovie={setMovie} />}
//         />
//         <Route
//           path="/movies/add"
//           element={<AddMovie movie={movie} setMovie={setMovie} />}
//         />
//         <Route path="/color-game" element={<AddColor />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/films" element={<Navigate replace to="/movies" />} />
//       </Routes>

//     </div>
//     </ThemeProvider>

//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 72
// Go to Material UI and click the Components option then scroll down click Srface option then click Paper Material UI
// <Paper/> Material UI Used Here
// But If u click Dark button in Navbar side, that won't show full page of black color.

// function App() {

//   const [mode, setMode] = useState("light");

//     const darkTheme = createTheme({
//       palette: {
//         mode: mode
//       },
//     });

//     const INITIAL_MOVIE_LIST = [
//       {
//         name: "Avengers: Endgame",
//         rating: "9.2",
//         trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//         poster:
//           "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//         summary:
//           "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame"
//       },
//       {
//         name: "Black Adam",
//         rating: "8.6",
//         trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//         poster:
//           "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//         summary:
//           "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//       },
//       {
//         name: "Thor: Love and Thunder",
//         rating: "8.4",
//         trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//         poster:
//           "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//         summary:
//           "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//       },
//       {
//         name: "Avatar: The Way of Water",
//         rating: "9.5",
//         trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//         poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//         summary:
//           "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//       },
//       {
//         name: "Transformers: Rise of the Beasts",
//         rating: "7.8",
//         trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//         poster:
//           "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//         summary:
//           "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//       },
//       {
//         name: "Ninja Assassin",
//         rating: "7.8",
//         trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//         poster:
//           "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//         summary:
//           "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//       },
//     ];

//     const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//     const navigate = useNavigate()

//     return (
//       <ThemeProvider theme={darkTheme}>
//            <Paper elevation={0} >
//       <div className="App">
//         <AppBar position="static">
//           <Toolbar>
//             <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
//             <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
//             <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add-Movies</Button>
//             <Button color="inherit" onClick={()=> navigate("/color-game")}>Color-Game</Button>

//             <Button color="inherit" onClick={()=> setMode(mode === "light" ? "dark" : "light")}>Dark Theme</Button>

//           </Toolbar>
//         </AppBar>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/movies"
//             element={<MovieList movie={movie} setMovie={setMovie} />}
//           />
//           <Route
//             path="/movies/:id"
//             element={<MovieDetail movie={movie} setMovie={setMovie} />}
//           />
//           <Route
//             path="/movies/add"
//             element={<AddMovie movie={movie} setMovie={setMovie} />}
//           />
//           <Route path="/color-game" element={<AddColor />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/films" element={<Navigate replace to="/movies" />} />
//         </Routes>

//       </div>

//       </Paper>
//       </ThemeProvider>

//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 73
//  You have to the styles in <Paper/>
// If u click Dark button in Navbar side, Background black color will show in full pages
// <Paper elevation={0} /> If u change the elevation value, it will affect background color change.

// function App() {

//   const [mode, setMode] = useState("light");

//     const darkTheme = createTheme({
//       palette: {
//         mode: mode
//       },
//     });

//     const INITIAL_MOVIE_LIST = [
//       {
//         name: "Avengers: Endgame",
//         rating: "9.2",
//         trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//         poster:
//           "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//         summary:
//           "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame"
//       },
//       {
//         name: "Black Adam",
//         rating: "8.6",
//         trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//         poster:
//           "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//         summary:
//           "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//       },
//       {
//         name: "Thor: Love and Thunder",
//         rating: "8.4",
//         trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//         poster:
//           "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//         summary:
//           "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//       },
//       {
//         name: "Avatar: The Way of Water",
//         rating: "9.5",
//         trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//         poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//         summary:
//           "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//       },
//       {
//         name: "Transformers: Rise of the Beasts",
//         rating: "7.8",
//         trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//         poster:
//           "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//         summary:
//           "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//       },
//       {
//         name: "Ninja Assassin",
//         rating: "7.8",
//         trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//         poster:
//           "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//         summary:
//           "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//       },
//     ];

//     const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//     const navigate = useNavigate()

//     return (
//       <ThemeProvider theme={darkTheme}>
//            <Paper style={{ minHeight : "100vh" , borderRadius: "0%"}} elevation={9} >
//       <div className="App">
//         <AppBar position="static">
//           <Toolbar>
//             <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
//             <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
//             <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add-Movies</Button>
//             <Button color="inherit" onClick={()=> navigate("/color-game")}>Color-Game</Button>

//             <Button color="inherit" onClick={()=> setMode(mode === "light" ? "dark" : "light")}>Dark Theme</Button>

//           </Toolbar>
//         </AppBar>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/movies"
//             element={<MovieList movie={movie} setMovie={setMovie} />}
//           />
//           <Route
//             path="/movies/:id"
//             element={<MovieDetail movie={movie} setMovie={setMovie} />}
//           />
//           <Route
//             path="/movies/add"
//             element={<AddMovie movie={movie} setMovie={setMovie} />}
//           />
//           <Route path="/color-game" element={<AddColor />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/films" element={<Navigate replace to="/movies" />} />
//         </Routes>

//       </div>

//       </Paper>
//       </ThemeProvider>

//     );
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 74
// Dynamically Change "Dark Mode" or "Light Mode" So, You have to give Conditional Rendering.

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Avengers: Endgame",
//       rating: "9.2",
//       trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//       poster:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//       summary:
//         "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame",
//     },
//     {
//       name: "Black Adam",
//       rating: "8.6",
//       trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: "8.4",
//       trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: "9.5",
//       trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: "7.8",
//       trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button startIcon={ mode === "light" ?  <Brightness4Icon /> : <Brightness7Icon /> }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 75
// Fatch Call using here & go to check Inspect and Console
// Result will come Check Inspect => Console
// After go to Counter.js Components

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const INITIAL_MOVIE_LIST = [
//     {
//       name: "Avengers: Endgame",
//       rating: 9.2,
//       trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
//       poster:
//         "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//       summary:
//         "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame",
//     },
//     {
//       name: "Black Adam",
//       rating: 8.6,
//       trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
//       poster:
//         "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
//       summary:
//         "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
//     },
//     {
//       name: "Thor: Love and Thunder",
//       rating: 8.4,
//       trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
//       poster:
//         "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
//       summary:
//         "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//     },
//     {
//       name: "Avatar: The Way of Water",
//       rating: 9.5,
//       trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
//       poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
//       summary:
//         "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
//     },
//     {
//       name: "Transformers: Rise of the Beasts",
//       rating: 7.8,
//       trailer: "https://www.youtube.com/embed/WWWDskI46Js",
//       poster:
//         "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
//       summary:
//         "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
//     },
//     {
//       name: "Ninja Assassin",
//       rating: 7.5,
//       trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
//       poster:
//         "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
//       summary:
//         "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
//     },
//   ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate();

//   fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies")
//   .then((data )=> data.json())
//   .then((mvs) => console.log(mvs))

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button startIcon={ mode === "light" ?  <Brightness4Icon /> : <Brightness7Icon /> }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------- //
// 78
// UseEffect used here & fetch data's give inside  in UseEffect
// Result will show in Inspect => Console


// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

  // const INITIAL_MOVIE_LIST = [
  //   {
  //     name: "Avengers: Endgame",
  //     rating: 9.2,
  //     trailer: "https://www.youtube.com/embed/xZS0J9X43fg",
  //     poster:
  //       "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
  //     summary:
  //       "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame",
  //   },
  //   {
  //     name: "Black Adam",
  //     rating: 8.6,
  //     trailer: "https://www.youtube.com/embed/cBNyTQM10Cg",
  //     poster:
  //       "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
  //     summary:
  //       "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
  //   },
  //   {
  //     name: "Thor: Love and Thunder",
  //     rating: 8.4,
  //     trailer: "https://www.youtube.com/embed/P68XVJWtUZU",
  //     poster:
  //       "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
  //     summary:
  //       "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
  //   },
  //   {
  //     name: "Avatar: The Way of Water",
  //     rating: 9.5,
  //     trailer: "https://www.youtube.com/embed/Fy-LvBx9m6o",
  //     poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
  //     summary:
  //       "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
  //   },
  //   {
  //     name: "Transformers: Rise of the Beasts",
  //     rating: 7.8,
  //     trailer: "https://www.youtube.com/embed/WWWDskI46Js",
  //     poster:
  //       "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
  //     summary:
  //       "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
  //   },
  //   {
  //     name: "Ninja Assassin",
  //     rating: 7.5,
  //     trailer: "https://www.youtube.com/embed/AcBPlzZS1mw",
  //     poster:
  //       "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUgi2fHFIDzmk7aNWT9oMV2WiESVUSA2pwZxgB/jpg",
  //     summary:
  //       "Trained in methods of killing from an early age, Raizo (Rain) is a member of the secret clan of assassins known as the Ozunu. ",
  //   },
  // ];

//   const [movie, setMovie] = useState(INITIAL_MOVIE_LIST);

//   const navigate = useNavigate();

// useEffect(()=>{
//   fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies")
//   .then((data )=> data.json())
//   .then((mvs) => console.log(mvs))
// },[])

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button startIcon={ mode === "light" ?  <Brightness4Icon /> : <Brightness7Icon /> }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// 79
// At SetMovie give the data's changed
// Erase the const INITIAL_MOVIE_LIST instead of Mock Api used here, So At setMovie give useEffect MockAPI

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies")
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------- //
// 80
// If You will use GET method,It does not mention in Your Code, Because No Needed to Mention GET Method, 
// But will working Get Method default's 

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();


////// After App Components is Mounted---
/////  

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies")
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------ //
// 81
// Get Method Not Needed Neccessary to Mention
// Get Method Syntex
// Fetch is a default's in React.js, So Does Not Needed Axios Packages

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();


// ////// After App Components is Mounted---
// ///// 

//   useEffect(() => {
//     fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies", {method : "GET"})
//       .then((data) => data.json())
//       .then((mvs) => setMovie(mvs));
//   }, []);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------- //
// 82
// Fetch call Data's transfer to MovieList.js Componenets
// After go to MovieList.js Components

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------ //
// 94
// Theme Button give Margin-left : "auto"
// After go to AddMovie.js Components


// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button sx={{marginLeft:"auto"}}
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />
//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------- //
// 98
// Add New Route for BasicForm
// After go to BasicForm.js Components.



// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });

//   const [movie, setMovie] = useState([]);

//   const navigate = useNavigate();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
//         <div className="App">
//           <AppBar position="static">
//             <Toolbar>
//               <Button color="inherit" onClick={() => navigate("/")}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies")}>
//                 Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/movies/add")}>
//                 Add-Movies
//               </Button>
//               <Button color="inherit" onClick={() => navigate("/color-game")}>
//                 Color-Game
//               </Button>

//               <Button sx={{marginLeft:"auto"}}
//                 startIcon={
//                   mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
//                 }
//                 color="inherit"
//                 onClick={() => setMode(mode === "light" ? "dark" : "light")}
//               >
//                 {mode === "light" ? "dark" : "light"} Mode
//               </Button>
//             </Toolbar>
//           </AppBar>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/movies"
//               element={<MovieList movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/:id"
//               element={<MovieDetail movie={movie} setMovie={setMovie} />}
//             />
//             <Route
//               path="/movies/add"
//               element={<AddMovie movie={movie} setMovie={setMovie} />}
//             />
//             <Route path="/color-game" element={<AddColor />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/films" element={<Navigate replace to="/movies" />} />

//             <Route path="/basic-form" element={<BasicForm />} />

//           </Routes>
//         </div>
//       </Paper>
//     </ThemeProvider>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 121
// Added Route path & import the EditMovie.js Components
// After go to EditMovie.js Components



function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add-Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color-Game
              </Button>

              <Button sx={{marginLeft:"auto"}}
                startIcon={
                  mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={<MovieList movie={movie} setMovie={setMovie} />}
            />
            <Route
              path="/movies/:id"
              element={<MovieDetail movie={movie} setMovie={setMovie} />}
            />
            <Route
              path="/movies/add"
              element={<AddMovie movie={movie} setMovie={setMovie} />}
            />

            <Route
              path="/movies/edit/:id"
              element={<EditMovie />}
            />

            <Route path="/color-game" element={<AddColor />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />

            <Route path="/basic-form" element={<BasicForm />} />

          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
