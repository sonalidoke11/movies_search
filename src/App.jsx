import {useState, useEffect} from "react";
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

export default function App(){
  // Constant with your API Key
  const apiKey = "d398cb9b";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
  
    try {
    // Make fetch request and store the response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

    // Parse JSON response into a JavaScript object
    const data = await response.json();

    // Set the Movie state to the received data
    setMovie(data);
      
    } catch (error) {

    console.error(error)

    }
    
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return(
    <div className="App">
      {/** We pass the getMovie function as a prop called moviesearch */} 

      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  )
}
