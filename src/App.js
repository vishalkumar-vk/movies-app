
import React, {useState} from "react";

let moviesData = [
    {id:1, title: "The Shawshank Redemption", year: 1994, runtime: 142, genres: ["Crime", "Drama"], poster:"https://cdn.siasat.com/wp-content/uploads/2022/05/srk-5.jpg"},
    {id:2, title: "The Godfather", year: 1972, runtime: 175, genres: ["Crime", "Drama"], poster:"https://cdn.siasat.com/wp-content/uploads/2022/05/srk-5.jpg"},
    {id:3, title: "The Dark Knight", year: 2008, runtime: 152, genres: ["Action", "Crime", "Drama", "Thriller"], poster:"https://cdn.siasat.com/wp-content/uploads/2022/05/srk-5.jpg"},
    {id:4, title: "The Godfather: Part II", year: 1974, runtime: 202, genres: ["Crime", "Drama"], poster:"https://image.cnbcfm.com/api/v1/image/106347675-1579665885541gettyimages-957028682.jpeg"},
    {id:5, title: "The Lord of the Rings: The Return of the King", year: 2003, runtime: 201, genres: ["Action", "Adventure", "Drama", "Fantasy"], poster:"https://image.cnbcfm.com/api/v1/image/106347675-1579665885541gettyimages-957028682.jpeg"},
    {id:6, title: "Pulp Fiction", year: 1994, runtime: 154, genres: ["Crime", "Drama"], poster: "https://image.cnbcfm.com/api/v1/image/106347675-1579665885541gettyimages-957028682.jpeg"},
    {id:7, title: "Schindler's List", year: 1993, runtime: 195, genres: ["Biography", "Drama", "History"], poster:"https://image.cnbcfm.com/api/v1/image/106347675-1579665885541gettyimages-957028682.jpeg"},
]


const App = () =>{
    const [selectedMovie, setSelectedMovie] = useState(null);
   // console.log(selectedMovie);
    return(
        <div className="App">
            <div className="display-movie" style={{background: "green", width:"80vw"}}>
                {
                    moviesData.map((movie)=>
                    <div className="movie">
                        <img src={movie.poster} alt ="{movie.title" />
                        <h1>{movie.tiltle}</h1>
                        <button onClick={()=>setSelectedMovie(movie)}>Movie Details</button>
                    </div>
                )
            }
            </div>

           <div className="movie-info" style={{width:"20vw", backgroundColor: "tomato"}}>
           {
                        selectedMovie && 
                        (
                            <div>
                                 <h1>{selectedMovie.title}</h1>
                                    <p>{selectedMovie.year}</p>
                                    <p>{selectedMovie.runtime}</p>
                                    <p>{selectedMovie.genres}</p>
                                    <img src={selectedMovie.poster} alt="{selectedMovie.title}" />
                            </div> 
                        )
                   }

            </div>
    

        </div>
    )
}
export default App