import { HttpStatusCode } from 'axios';
import './App.css';
import api from './api/axiosConfig';
// import hooks from React
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

/* Write code to return an endpoint that will return an array of movie data */

function App() {


/* return a destructured array from the useState hook 
the first item - movies - will store an array of movie data returned from a call to relevant API endpoint.
the second item - setMovies - can be used to change the state of the movies variable.

when the state of the variable tracked by react through the useState hook is changed, 
the component is rerendered by react. Here, the App component will be re rendered when the state of the 
movies variable changes.
*/
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviewIds, setReviewIds] = useState([]);

/* create a function that will handle a HTTP GET request to an endpoint that returns an array of movie data
once the movie data is successfully returned, this code that changes the state of the movies array is executed*/

/* - the path will get appended onto the end of the baseURL
   - using async await for asynchronous thread management functionality on the client 
   (this functionality can be effective in ensuring the UI is not blocked. When long running operations e.g. a remote API call
    are processed, the UI thread won't be blocked and therefore e.g the user screen won't freeze/still be responsive, while 
    a potentially long IO bound operation is processing. Once the relevant task has completed, the code directly below the code that
    kicks off the awaited process will be executed. == promises made to return to the appropriate line of code once the task has completed)
    This async await functionality is useful in order to ensure a better UX 
   */
  const getMovies = async () => {

    /* wrap in a try-catch in case something goes wrong during the execution of the HTTP request. 
    in the catch block - log the relevant error to the brower console window */
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);

      // log the results returned from the call to the console window
      // console.log(response.data);

      // log the status
      // console.log(HttpStatusCode.Ok);
    } catch(err){
      console.log(err);
    }
  }

  // create a method that uses Axios to make a GET request for a data pertaining to a single movie.
  // an imdbId value will be passed in to the movieId param. The HTTP GET request (using the movieId value in the URL)
  // will be made to retrieve data for a single movie from the remote server.
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      //set the state for movie variable
      setMovie(singleMovie); 
      //extract the reviews array and track it's state
      setReviewIds(singleMovie.reviewIds); 
    } catch (error) {
      console.error(error);
    }
  };

  /* implement the useEffect hook so the getMovies function is executed when the App component first loads */
  useEffect(() => {
    getMovies();
  },[])

  // this is where jsx code is returned from our component
  return (
    // establish route mappings for our applications in React components
    /* ensure movies array is being passed down from the App to Home to Hero component*/
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviewIds={reviewIds}
                setReviewIds={setReviewIds}
              />
            }
          ></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
