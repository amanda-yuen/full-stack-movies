import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Hero displays items in a carousel that are representative of movies to the users

// destructure the props passes into this component - include only 1 destructured value containing an array of movie data
// implement the carousel functionality
// within the carousel element, map each item in the movies array to an item displayed in the carousel.
// the paper element encapsulates each movie item displayed in the carousel
// include div tags so the movie poster and title is displayed for each item

// include a gradient from the bottom of each carousel item to the title

// create the link so when play button is clicked, the trailer component is invoked and the appropriate parameters passed 
// through to the trailer component. The trailer link property retrieved from the server contains the entire URL to the YT
// video - we only want to pass the ID to the trailer from the hero component. Extract the ID using substring last 11 chars.

const Hero = ({ movies }) => {
  
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  // whenever implementing a list of uniquely identifiable items in JSX code, need to appropriately include the key property
  // for each list item. To uniquely identify each item in the carousel, set the key to it's imdbId value passed down 
  // in the moviedata array retrieved from the remote server using the appropriate HTTP get request
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(movie.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
