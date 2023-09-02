package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
//instead of it mapping to localhost:8080/, we make it map to /api/v1/movies.
//so any requests sent to /api/v1/movies will be handled by this controller.
@RequestMapping("/api/v1/movies")

public class MovieController {
    @Autowired
    private MovieService movieService;

    /*GetMapping lets the framework know that this method is a good endpoint.
    * HttpStatus.OK = 200
    * in the terminal, run curl -i http://localhost:8080/api/v1/movies , it will return the response code.
    * */
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    //@PathVariable lets the framework know that we will be passing the information we got in the mapping as a path variable.
    // So whatever we're taking through this path variable /{id} we want to convert to that to String called imdbId
    // But I don’t want to expose the object ids of my collection entities to the public.
    // Instead, I want to use the IMDB ID to search for new movies
    @GetMapping("/{imdbId}") //search for a movie uses its imdbId
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }



}
