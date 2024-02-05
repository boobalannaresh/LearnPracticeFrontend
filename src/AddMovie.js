import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

//44
//After go to Home.js Components......

// export  function AddMovie({movie, setMovie}) {

//     const [name, setName] = useState("");
//     const [poster, setPoster] = useState("");
//     const [rating, setRating] = useState("");
//     const [summary, setSummary] = useState("");

//     const addMovie = () => {
//         const newMovie = {
//           name: name,
//           poster: poster,
//           rating: rating,
//           summary: summary
//         }

// ////// Copy from Exsiting Value MovieList & add newMovie to it //
//    setMovie([...movie, newMovie]);
//    console.log(movie);
//  }

//   return (
//     <div className='add-movie-form'>

//     <TextField id="outlined-basic" label="Name" variant="outlined" placeholder='Enter a Name' onChange={(event) => setName(event.target.value)} />
//     <TextField id="outlined-basic" label="Poster" variant="outlined" placeholder='Enter a Poster' onChange={(event) => setPoster(event.target.value)}  />
//     <TextField id="outlined-basic" label="Rating" variant="outlined" placeholder='Enter a Rating' onChange={(event) => setRating(event.target.value)}  />
//     <TextField id="outlined-basic" label="Summary" variant="outlined" placeholder='Enter a Summary' onChange={(event) => setSummary(event.target.value)} />

//     <Button variant="contained" onClick={addMovie}>Add-Movie</Button>

//     </div>
//   )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 95
// Now Added Trailer Input BOX
// fetch Post also Given 

// export function AddMovie({ movie, setMovie }) {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [trailer, setTrailer] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       trailer: trailer,
//       rating: rating,
//       summary: summary,
//     };

//    ////-----> Follow 3 step's <-----////

//    //// Step's
//    //// 1. Method => POST
//    //// 2. body => data & JSON(string)
//    //// 3. header => JSON 

//    fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//     method: "POST",
//     body: JSON.stringify(newMovie),
//     headers: {"Content-type" : "application/json"},
//    });

//   };

//   return (
//     <div className="add-movie-form">
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         placeholder="Enter a Name"
//         onChange={(event) => setName(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Poster"
//         variant="outlined"
//         placeholder="Enter a Poster"
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Trailer"
//         variant="outlined"
//         placeholder="Enter a Trailer"
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Rating"
//         variant="outlined"
//         placeholder="Enter a Rating"
//         onChange={(event) => setRating(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Summary"
//         variant="outlined"
//         placeholder="Enter a Summary"
//         onChange={(event) => setSummary(event.target.value)}
//       />

//       <Button variant="contained" onClick={addMovie}>
//         Add-Movie
//       </Button>
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 96
// If New Movie Added Done then Atomatically Navigate to Movies Routes 
// After go to BasicForm.js Components


// export function AddMovie({ movie, setMovie }) {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [trailer, setTrailer] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

// const navigate = useNavigate();

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       trailer: trailer,
//       rating: rating,
//       summary: summary,
//     };

//    ////-----> Follow 3 step's <-----////

//    //// Step's
//    //// 1. Method => POST
//    //// 2. body => data & JSON(string)
//    //// 3. header => JSON 

//    fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//     method: "POST",
//     body: JSON.stringify(newMovie),
//     headers: { "Content-type" : "application/json" },
//    }).then (()=> navigate("/movies"));

//   };

//   return (
//     <div className="add-movie-form">
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         placeholder="Enter a Name"
//         onChange={(event) => setName(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Poster"
//         variant="outlined"
//         placeholder="Enter a Poster"
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Trailer"
//         variant="outlined"
//         placeholder="Enter a Trailer"
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Rating"
//         variant="outlined"
//         placeholder="Enter a Rating"
//         onChange={(event) => setRating(event.target.value)}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Summary"
//         variant="outlined"
//         placeholder="Enter a Summary"
//         onChange={(event) => setSummary(event.target.value)}
//       />

//       <Button variant="contained" onClick={addMovie}>
//         Add-Movie
//       </Button>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 113
// Using useFormik & yup. require()
//



// export function AddMovie({ movie, setMovie }) {

//    const movieValidationSchema = yup.object({
//     name:yup.string().required(),
//     poster:yup.string().required().min(4),
//     trailer:yup.string().required().min(4).url(),
//     rating:yup.number().required().min(0).max(10),
//     summary:yup.string().required().min(20),
//    })

//   const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
//     initialValues: {
//       name: "",
//       poster: "",
//       trailer:"",
//       rating:"",
//       summary:"",
//     },
    
//     validationSchema : movieValidationSchema,

//     onSubmit:(newMovie)=>{
//       console.log("Form Values:", newMovie)
//       addMovie(newMovie)
//     },

//   })

//   const navigate = useNavigate();

//   const addMovie = (newMovie) => {

//    ////-----> Follow 3 step's <-----////

//    //// Step's
//    //// 1. Method => POST
//    //// 2. body => data & JSON(string)
//    //// 3. header => JSON 

//    fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//     method: "POST",
//     body: JSON.stringify(newMovie),
//     headers: { "Content-type" : "application/json" },
//    }).then (()=> navigate("/movies"));

//   };

//   return (
//     <form onSubmit={handleSubmit} className="add-movie-form"  >
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         placeholder="Enter a Name"
//         value={values.name}
//         onChange={handleChange}
//         name="name"
//         onBlur={handleBlur}

//       />
//       {touched.name && errors.name ? errors.name : null}

//       <TextField
//         id="outlined-basic"
//         label="Poster"
//         variant="outlined"
//         placeholder="Enter a Poster"
//         value={values.poster}
//         onChange={handleChange}
//         name="poster"
//         onBlur={handleBlur}
//       />
//       {touched.poster && errors.poster ? errors.poster : null}

//       <TextField
//         id="outlined-basic"
//         label="Trailer"
//         variant="outlined"
//         placeholder="Enter a Trailer"
//         value={values.trailer}
//         onChange={handleChange}
//         name="trailer"
//         onBlur={handleBlur}
//       />
//       {touched.trailer && errors.trailer ? errors.trailer : null}

//       <TextField
//         id="outlined-basic"
//         label="Rating"
//         variant="outlined"
//         placeholder="Enter a Rating"
//         value={values.rating}
//         onChange={handleChange}
//         name="rating"
//         onBlur={handleBlur}
//       />
//       {touched.rating && errors.rating ? errors.rating : null}

//       <TextField
//         id="outlined-basic"
//         label="Summary"
//         variant="outlined"
//         placeholder="Enter a Summary"
//         value={values.summary}
//         onChange={handleChange}
//         name="summary"
//         onBlur={handleBlur}
//       />
//       {touched.summary && errors.summary ? errors.summary : null}

//       <Button variant="contained" type="submit">
//         Add-Movie
//       </Button>
//     </form>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 114
// If You will do Mistake, Error Validation Alert show in Red Color Box
// If You will Filled correctly, But Error Validation does not go to normal stage  



// export function AddMovie({ movie, setMovie }) {

//   const movieValidationSchema = yup.object({
//    name:yup.string().required(),
//    poster:yup.string().required().min(4),
//    trailer:yup.string().required().min(4).url(),
//    rating:yup.number().required().min(0).max(10),
//    summary:yup.string().required().min(20),
//   })

//  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
//    initialValues: {
//      name: "",
//      poster: "",
//      trailer:"",
//      rating:"",
//      summary:"",
//    },
   
//    validationSchema : movieValidationSchema,

//    onSubmit:(newMovie)=>{
//      console.log("Form Values:", newMovie)
//      addMovie(newMovie)
//    },

//  })

//  const navigate = useNavigate();

//  const addMovie = (newMovie) => {

//   ////-----> Follow 3 step's <-----////

//   //// Step's
//   //// 1. Method => POST
//   //// 2. body => data & JSON(string)
//   //// 3. header => JSON 

//   fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//    method: "POST",
//    body: JSON.stringify(newMovie),
//    headers: { "Content-type" : "application/json" },
//   }).then (()=> navigate("/movies"));

//  };

//  return (
//    <form onSubmit={handleSubmit} className="add-movie-form"  >
//      <TextField
//        id="outlined-basic"
//        label="Name"
//        variant="outlined"
//        placeholder="Enter a Name"
//        value={values.name}
//        onChange={handleChange}
//        name="name"
//        onBlur={handleBlur}
//        error

//      />
//      {touched.name && errors.name ? errors.name : null}

//      <TextField
//        id="outlined-basic"
//        label="Poster"
//        variant="outlined"
//        placeholder="Enter a Poster"
//        value={values.poster}
//        onChange={handleChange}
//        name="poster"
//        onBlur={handleBlur}
//        error
//      />
//      {touched.poster && errors.poster ? errors.poster : null}

//      <TextField
//        id="outlined-basic"
//        label="Trailer"
//        variant="outlined"
//        placeholder="Enter a Trailer"
//        value={values.trailer}
//        onChange={handleChange}
//        name="trailer"
//        onBlur={handleBlur}
//        error
//      />
//      {touched.trailer && errors.trailer ? errors.trailer : null}

//      <TextField
//        id="outlined-basic"
//        label="Rating"
//        variant="outlined"
//        placeholder="Enter a Rating"
//        value={values.rating}
//        onChange={handleChange}
//        name="rating"
//        onBlur={handleBlur}
//        error
//      />
//      {touched.rating && errors.rating ? errors.rating : null}

//      <TextField
//        id="outlined-basic"
//        label="Summary"
//        variant="outlined"
//        placeholder="Enter a Summary"
//        value={values.summary}
//        onChange={handleChange}
//        name="summary"
//        onBlur={handleBlur}
//        error
//      />
//      {touched.summary && errors.summary ? errors.summary : null}

//      <Button variant="contained" type="submit">
//        Add-Movie
//      </Button>
//    </form>
//  );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 115
// Added One More Error Validation Input field
// If You will Filled correctly, But Error Validation does not go to normal stage  
// 


// export function AddMovie({ movie, setMovie }) {

//   const movieValidationSchema = yup.object({
//    name:yup.string().required(),
//    poster:yup.string().required().min(4),
//    trailer:yup.string().required().min(4).url(),
//    rating:yup.number().required().min(0).max(10),
//    summary:yup.string().required().min(20),
//   })

//  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
//    initialValues: {
//      name: "",
//      poster: "",
//      trailer:"",
//      rating:"",
//      summary:"",
//    },
   
//    validationSchema : movieValidationSchema,

//    onSubmit:(newMovie)=>{
//      console.log("Form Values:", newMovie)
//      addMovie(newMovie)
//    },

//  })

//  const navigate = useNavigate();

//  const addMovie = (newMovie) => {

//   ////-----> Follow 3 step's <-----////

//   //// Step's
//   //// 1. Method => POST
//   //// 2. body => data & JSON(string)
//   //// 3. header => JSON 

//   fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//    method: "POST",
//    body: JSON.stringify(newMovie),
//    headers: { "Content-type" : "application/json" },
//   }).then (()=> navigate("/movies"));

//  };

//  return (
//    <form onSubmit={handleSubmit} className="add-movie-form"  >
//      <TextField
//        id="outlined-basic"
//        label="Name"
//        variant="outlined"
//        placeholder="Enter a Name"
//        value={values.name}
//        onChange={handleChange}
//        name="name"
//        onBlur={handleBlur}
//        error
//        helperText="Incorrect entry."


//      />
//      {touched.name && errors.name ? errors.name : null}

//      <TextField
//        id="outlined-basic"
//        label="Poster"
//        variant="outlined"
//        placeholder="Enter a Poster"
//        value={values.poster}
//        onChange={handleChange}
//        name="poster"
//        onBlur={handleBlur}
//        error
//        helperText="Incorrect entry."
//      />
//      {touched.poster && errors.poster ? errors.poster : null}

//      <TextField
//        id="outlined-basic"
//        label="Trailer"
//        variant="outlined"
//        placeholder="Enter a Trailer"
//        value={values.trailer}
//        onChange={handleChange}
//        name="trailer"
//        onBlur={handleBlur}
//        error
//        helperText="Incorrect entry."
//      />
//      {touched.trailer && errors.trailer ? errors.trailer : null}

//      <TextField
//        id="outlined-basic"
//        label="Rating"
//        variant="outlined"
//        placeholder="Enter a Rating"
//        value={values.rating}
//        onChange={handleChange}
//        name="rating"
//        onBlur={handleBlur}
//        error
//        helperText="Incorrect entry."
//      />
//      {touched.rating && errors.rating ? errors.rating : null}

//      <TextField
//        id="outlined-basic"
//        label="Summary"
//        variant="outlined"
//        placeholder="Enter a Summary"
//        value={values.summary}
//        onChange={handleChange}
//        name="summary"
//        onBlur={handleBlur}
//        error
//        helperText="Incorrect entry."
//      />
//      {touched.summary && errors.summary ? errors.summary : null}

//      <Button variant="contained" type="submit">
//        Add-Movie
//      </Button>
//    </form>
//  );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 116
// you gave 3 Error Validation Added, 
// That Attribute you can Customize and change for Correctly Filled the Input fields then Error validation go to normal Stage
// error attribute you can customize Ex: error={true} means => that attribute  will be Enable " or " error={false} means => that attribute  will be Disable
// Added Input field Box " Color " Attribut, You can Customize Input field box border color
// After go to MovieList.js Components

// export function AddMovie() {

//   const movieValidationSchema = yup.object({
//    name:yup.string().required(),
//    poster:yup.string().required().min(4),
//    trailer:yup.string().required().min(4).url(),
//    rating:yup.number().required().min(0).max(10),
//    summary:yup.string().required().min(20),
//   })

//  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
//    initialValues: {
//      name: "",
//      poster: "",
//      trailer:"",
//      rating:"",
//      summary:"",
//    },
   
//    validationSchema : movieValidationSchema,

//    onSubmit:(newMovie)=>{
//      console.log("Form Values:", newMovie)
//      addMovie(newMovie)
//    },

//  })

//  const navigate = useNavigate();

//  const addMovie = (newMovie) => {

//   ////-----> Follow 3 step's <-----////

//   //// Step's
//   //// 1. Method => POST
//   //// 2. body => data & JSON(string)
//   //// 3. header => JSON 

//   fetch("https://63b7a60e4f17e3a931d8be11.mockapi.io/movies",{
//    method: "POST",
//    body: JSON.stringify(newMovie),
//    headers: { "Content-type" : "application/json" },
//   }).then (()=> navigate("/movies"));

//  };

//  return (
//    <form onSubmit={handleSubmit} className="add-movie-form"  >
//      <TextField
//        id="outlined-basic"
//        label="Name"
//        variant="outlined"
//        placeholder="Enter a Name"
//        value={values.name}
//        onChange={handleChange}
//        name="name"
//        onBlur={handleBlur}
//        error={touched.name && errors.name}
//        helperText={touched.name && errors.name ? errors.name : null}
//        color="success"

//      />
     

//      <TextField
//        id="outlined-basic"
//        label="Poster"
//        variant="outlined"
//        placeholder="Enter a Poster"
//        value={values.poster}
//        onChange={handleChange}
//        name="poster"
//        onBlur={handleBlur}
//        error={touched.poster && errors.poster}
//        helperText={touched.poster && errors.poster ? errors.poster : null}
//      />
     

//      <TextField
//        id="outlined-basic"
//        label="Trailer"
//        variant="outlined"
//        placeholder="Enter a Trailer"
//        value={values.trailer}
//        onChange={handleChange}
//        name="trailer"
//        onBlur={handleBlur}
//        error={touched.trailer && errors.trailer}
//        helperText= {touched.trailer && errors.trailer ? errors.trailer : null}
//      />
    

//      <TextField
//        id="outlined-basic"
//        label="Rating"
//        variant="outlined"
//        placeholder="Enter a Rating"
//        value={values.rating}
//        onChange={handleChange}
//        name="rating"
//        onBlur={handleBlur}
//        error={touched.rating && errors.rating}
//        helperText={touched.rating && errors.rating ? errors.rating : null}
//      />
     

//      <TextField
//        id="outlined-basic"
//        label="Summary"
//        variant="outlined"
//        placeholder="Enter a Summary"
//        value={values.summary}
//        onChange={handleChange}
//        name="summary"
//        onBlur={handleBlur}
//        error={touched.summary && errors.summary }
//        helperText={touched.summary && errors.summary ? errors.summary : null}
//      />
     

//      <Button variant="contained" type="submit">
//        Add-Movie
//      </Button>
//    </form>
//  );
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 126
// import global.js here
// Now you have to change MockApi link to { API } 
// Next go to EditMovie.js components

export function AddMovie() {

  const movieValidationSchema = yup.object({
   name:yup.string().required(),
   poster:yup.string().required().min(4),
   trailer:yup.string().required().min(4).url(),
   rating:yup.number().required().min(0).max(10),
   summary:yup.string().required().min(20),
  })

 const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
   initialValues: {
     name: "",
     poster: "",
     trailer:"",
     rating:"",
     summary:"",
   },
   
   validationSchema : movieValidationSchema,

   onSubmit:(newMovie)=>{
     console.log("Form Values:", newMovie)
     addMovie(newMovie)
   },

 })

 const navigate = useNavigate();

 const addMovie =  (newMovie) => {

  ////-----> Follow 3 step's <-----////

  //// Step's
  //// 1. Method => POST
  //// 2. body => data & JSON(string)
  //// 3. header => JSON 

   fetch(`${API}/movies`,{
   method: "POST",
   body: JSON.stringify(newMovie),
   headers: { "Content-type" : "application/json" },
  }).then (()=> navigate("/movies"));

 };

 return (
   <form onSubmit={handleSubmit} className="add-movie-form"  >
     <TextField
       id="outlined-basic"
       label="Name"
       variant="outlined"
       placeholder="Enter a Name"
       value={values.name}
       onChange={handleChange}
       name="name"
       onBlur={handleBlur}
       error={touched.name && errors.name}
       helperText={touched.name && errors.name ? errors.name : null}
       color="success"

     />
     

     <TextField
       id="outlined-basic"
       label="Poster"
       variant="outlined"
       placeholder="Enter a Poster"
       value={values.poster}
       onChange={handleChange}
       name="poster"
       onBlur={handleBlur}
       error={touched.poster && errors.poster}
       helperText={touched.poster && errors.poster ? errors.poster : null}
     />
     

     <TextField
       id="outlined-basic"
       label="Trailer"
       variant="outlined"
       placeholder="Enter a Trailer"
       value={values.trailer}
       onChange={handleChange}
       name="trailer"
       onBlur={handleBlur}
       error={touched.trailer && errors.trailer}
       helperText= {touched.trailer && errors.trailer ? errors.trailer : null}
     />
    

     <TextField
       id="outlined-basic"
       label="Rating"
       variant="outlined"
       placeholder="Enter a Rating"
       value={values.rating}
       onChange={handleChange}
       name="rating"
       onBlur={handleBlur}
       error={touched.rating && errors.rating}
       helperText={touched.rating && errors.rating ? errors.rating : null}
     />
     

     <TextField
       id="outlined-basic"
       label="Summary"
       variant="outlined"
       placeholder="Enter a Summary"
       value={values.summary}
       onChange={handleChange}
       name="summary"
       onBlur={handleBlur}
       error={touched.summary && errors.summary }
       helperText={touched.summary && errors.summary ? errors.summary : null}
     />
     

     <Button variant="contained" type="submit">
       Add-Movie
     </Button>
   </form>
 );
}
