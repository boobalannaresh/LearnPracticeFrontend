import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// 97
// Just BasicForm Created Done
// After go to App.js Components

// export function BasicForm() {
//   return (
//     <form>

//         <input  type="text" placeholder='Enter your Email Id'/>
//         <input  type="text" placeholder='Enter your Password'/>
//         <button>Submit</button>

//     </form>
//   )
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 99
// UseFormik Used Here.
// You could not change or Edit or Erase any value, Because You should have to OnChange Attribute

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         }
//     })
//     return (
//       <form>

//           <input value={formik.values.email}   type="email" placeholder='Enter your Email Id' />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password'/>
//           <button>Submit</button>

//       </form>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 100
// onChange={formik.handleChange}  used here but not Work Edit or Erase or change
// Because what did you give in InitialValues in Key value that Name you have to give in INPUT box in same InitialValues Name's

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         }
//     })
//     return (
//       <form>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' onChange={formik.handleChange}/>
//           <button>Submit</button>

//       </form>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// 101
// After give Each Input box Attribute " name ", Now U can Edit or Erase 0r Change in Input Box

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         }
//     })
//     return (
//       <form>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' name="email" onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' name="password" onChange={formik.handleChange}/>
//           <button>Submit</button>

//       </form>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 102
// <form onSubmit={formik.handleSubmit} /> This will tigger on OnSubmit Function
// What will you type in Input box, that will show in Inspect => Console side
// If you Click Submit Button, That Result will come with ERROR also

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         },

//         onSubmit:(values) => {
//             console.log("Form Values:", values)
//         }

//     })
//     return (
//       <form onSubmit={formik.handleSubmit}>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' name="email" onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' name="password" onChange={formik.handleChange}/>
//           <button>Submit</button>

//       </form>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 103
// <input/> || trigger on <button type="submit"/> || trigger on <form onSubmit="handleSubmit"/> || trigger on " onSubmit function " ||
// button type="submit" given then, Submit Button Properly Working
// Result will show in Inspects => Console

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         },

//         onSubmit:(values) => {
//             console.log("Form Values:", values)
//         },

//     })
//     return (
//       <form onSubmit={formik.handleSubmit}>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' name="email" onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' name="password" onChange={formik.handleChange}/>
//           <button type="submit">Submit</button>

//       </form>
//     )
//   }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 104
// import yup
// yup validation Using here, password values you must given minimum 4 letters
// If does not give 4 letters, it won't allowed submit button

// const formValidationSchema = yup.object({
//     password: yup.string().min(4)
// })

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         },

//         validationSchema : formValidationSchema,

//         onSubmit:(values) => {
//             console.log("Form Values:", values)
//         },

//     })
//     return (
//       <form onSubmit={formik.handleSubmit}>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' name="email" onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' name="password" onChange={formik.handleChange}/>
//           <button type="submit">Submit</button>

//       </form>
//     )
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 105
// Email min(8) & Password min(4) this condition Satisfied then submit allows the values in Inspect => console

// const formValidationSchema = yup.object({
//     email: yup.string().min(8),
//     password: yup.string().min(4)
// })

// export function BasicForm() {

//     const formik = useFormik({
//         initialValues :{
//             email:"NareshBabu@gmail.com",
//             password: "abcd1234",
//         },

//         validationSchema : formValidationSchema,

//         onSubmit:(values) => {
//             console.log("Form Values:", values)
//         },

//     })
//     return (
//       <form onSubmit={formik.handleSubmit}>

//           <input value={formik.values.email}  type="email" placeholder='Enter your Email Id' name="email" onChange={formik.handleChange} />
//           <input value={formik.values.password}  type="text" placeholder='Enter your Password' name="password" onChange={formik.handleChange}/>
//           <button type="submit">Submit</button>

//       </form>
//     )
//   }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 106
// Error messages show in Display if Minimum character give below , Errors Will show in Your Display
//

// const formValidationSchema = yup.object({
//   email: yup.string().min(8),
//   password: yup.string().min(4),
// });

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: {
//       email: "NareshBabu@gmail.com",
//       password: "abcd1234",
//     },

//     validationSchema: formValidationSchema,

//     onSubmit: (values) => {
//       console.log("Form Values:", values);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input
//         value={formik.values.email}
//         type="email"
//         placeholder="Enter your Email Id"
//         name="email"
//         onChange={formik.handleChange}
//       />
//       {formik.errors.email}

//       <input
//         value={formik.values.password}
//         type="text"
//         placeholder="Enter your Password"
//         name="password"
//         onChange={formik.handleChange}
//       />
//       {formik.errors.email}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 107
// You Can customization, Alert Error Messages
// But If you fill " email " only, Not filled password then submit button click allowed the data's passing in Inspect => console

// const formValidationSchema = yup.object({
//     email: yup.string().min(8, "Need a bigger Email"),
//     password: yup.string().min(4, "Need a bigger Password"),
//   });

//   export function BasicForm() {
//     const formik = useFormik({
//       initialValues: {
//         email: "NB@g.co",
//         password: "abc",
//       },

//       validationSchema: formValidationSchema,

//       onSubmit: (values) => {
//         console.log("Form Values:", values);
//       },
//     });
//     return (
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           value={formik.values.email}
//           type="email"
//           placeholder="Enter your Email Id"
//           name="email"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.email}

//         <input
//           value={formik.values.password}
//           type="text"
//           placeholder="Enter your Password"
//           name="password"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.password}

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 108
// If you won't give required(), not filled any input box then allowed the submit and check the Inspect => console.
// If you Will give requird(), not filled any input box then does not allowed in Your Inspect => console, then Alert ERROR messages showed

// const formValidationSchema = yup.object({
//     email: yup.string().min(8, "Need a bigger Email").required(),
//     password: yup.string().min(4, "Need a bigger Password").required(),
//   });

//   export function BasicForm() {
//     const formik = useFormik({
//       initialValues: {
//         email: "NB@g.co",
//         password: "abc",
//       },

//       validationSchema: formValidationSchema,

//       onSubmit: (values) => {
//         console.log("Form Values:", values);
//       },
//     });
//     return (
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           value={formik.values.email}
//           type="email"
//           placeholder="Enter your Email Id"
//           name="email"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.email}

//         <input
//           value={formik.values.password}
//           type="text"
//           placeholder="Enter your Password"
//           name="password"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.password}

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 109
// Required() Alert Error Messages also You can Customization

// const formValidationSchema = yup.object({
//     email: yup.string().min(8, "Need a bigger Email").required("A cool Email is in need"),
//     password: yup.string().min(4, "Need a bigger Password").required("A cool Password is in need"),
//   });

//   export function BasicForm() {
//     const formik = useFormik({
//       initialValues: {
//         email: "NB@g.co",
//         password: "abc",
//       },

//       validationSchema: formValidationSchema,

//       onSubmit: (values) => {
//         console.log("Form Values:", values);
//       },
//     });
//     return (
//       <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//         <input
//           value={formik.values.email}
//           type="email"
//           placeholder="Enter your Email Id"
//           name="email"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.email}

//         <input
//           value={formik.values.password}
//           type="text"
//           placeholder="Enter your Password"
//           name="password"
//           onChange={formik.handleChange}
//         />
//         {formik.errors.password}

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------- //
// 110
// Conditional Rendering using here,
// If You filled first input field after go to Next input field, ERRORS will be Show for If you did mistake in Input fields

// const formValidationSchema = yup.object({
//     email: yup.string().min(8, "Need a bigger Email").required("A cool Email is in need"),
//     password: yup.string().min(4, "Need a bigger Password").required("A cool Password is in need"),
//   });

//   export function BasicForm() {
//     const formik = useFormik({
//       initialValues: {
//         email: "NB@g.co",
//         password: "abc",
//       },

//       validationSchema: formValidationSchema,

//       onSubmit: (values) => {
//         console.log("Form Values:", values);
//       },
//     });
//     return (
//       <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//         <input
//           value={formik.values.email}
//           type="email"
//           placeholder="Enter your Email Id"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.email && formik.errors.email ? formik.errors.email : null}

//         <input
//           value={formik.values.password}
//           type="text"
//           placeholder="Enter your Password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.password && formik.errors.password ? formik.errors.password : null}

//         <h2>Errors</h2>
//         <pre>{JSON.stringify(formik.errors)}</pre>

//         <h2>Touched</h2>
//         <pre>{JSON.stringify(formik.touched)}</pre>

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
// 111
// Email input fields ADD more sensitive, So yup Matches add in Yup Objects

// const formValidationSchema = yup.object({
//   email: yup
//     .string()
//     .min(8, "Need a bigger Email")
//     .required("A cool Email is in need")
//     .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
//   password: yup
//     .string()
//     .min(4, "Need a bigger Password")
//     .required("A cool Password is in need"),
// });

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: {
//       email: "NB@g.co",
//       password: "abc",
//     },

//     validationSchema: formValidationSchema,

//     onSubmit: (values) => {
//       console.log("Form Values:", values);
//     },
//   });
//   return (
//     <form className="add-movie-form" onSubmit={formik.handleSubmit}>
//       <input
//         value={formik.values.email}
//         type="email"
//         placeholder="Enter your Email Id"
//         name="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.email && formik.errors.email ? formik.errors.email : null}

//       <input
//         value={formik.values.password}
//         type="text"
//         placeholder="Enter your Password"
//         name="password"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       {formik.touched.password && formik.errors.password
//         ? formik.errors.password
//         : null}

//       <h2>Errors</h2>
//       <pre>{JSON.stringify(formik.errors)}</pre>

//       <h2>Touched</h2>
//       <pre>{JSON.stringify(formik.touched)}</pre>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------- //
// 112
// Destructuring Using Here
// After go to AddMovie.js Components



const formValidationSchema = yup.object({
    email: yup
      .string()
      .min(8, "Need a bigger Email")
      .required("A cool Email is in need")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    password: yup
      .string()
      .min(4, "Need a bigger Password")
      .required("A cool Password is in need"),
  });
  
  export function BasicForm() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
  
      validationSchema: formValidationSchema,
  
      onSubmit: (values) => {
        console.log("Form Values:", values);
      },
    });
    return (
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input
          value={values.email}
          type="email"
          placeholder="Enter your Email Id"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? errors.email : null}
  
        <input
          value={values.password}
          type="text"
          placeholder="Enter your Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password
          ? errors.password
          : null}
  
        <h2>Errors</h2>
        <pre>{JSON.stringify(errors)}</pre>
  
        <h2>Touched</h2>
        <pre>{JSON.stringify(touched)}</pre>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
