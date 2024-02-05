import { Counter } from "./Counter";


// export function User({ name, pic}){

//     return(
//      <div>
//      <img className="pic" src={pic} />
//       <h1 className="user-head">Hello,<span className="name"> {name} </span></h1>
//       <Counter/>
//       </div>
//     )
//   }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 18
//

export function User({ name, poster, summary, rating }) {

  return (
    <div className="user">
      <img className="poster" src={poster} />
      <div className="title-rating">
        <h2 className="title">{name}</h2>
        <h3 className="rating">⭐{rating}</h3>
      </div>

      <p className="details">{summary}</p>
      <Counter/>
    </div>
  )
}