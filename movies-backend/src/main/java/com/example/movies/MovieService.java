package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
//    The Autowired notation will let the framework know that we want it to instantiate this class for us.
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
//        the .findAll() method is part of the MongoRepository Class - here it will return a list of movies
        return movieRepository.findAll();
    }

//    Use Optional here as there is a chance .findById might return null (maybe the id doesn't exist).
    public Optional<Movie> singleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
