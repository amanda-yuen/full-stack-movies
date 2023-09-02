package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

//    Automatic queries let your farm dynamically for property names
//    By naming this findMovieByImdbId, the Spring data MongoDB will understand what we're trying to do.
    Optional<Movie> findMovieByImdbId(String imdbId);
}
