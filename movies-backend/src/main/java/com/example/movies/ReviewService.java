package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
//  you can talk to the database using a repository or a template. Sometimes using a repository isn't enough - maybe
//  have complex operations that can't be implemented using a repository or not suitable.
//  use a Mongo Template to form a dynamic query and do the job inside the database without using the repository
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

//  First look for the movie with the given imdbId. Then create a new review and associate that with the found movie.
    public Review createReview(String reviewBody, String imdbId){

//      we need to insert our new review object into the database
//        .insert() - returns the data you just pushed into your database
        Review review = reviewRepository.insert(new Review(reviewBody));

//      associate this new review to one of the movies
//      using the template to perform an update call on the Movie class
//        .matching - find the movie we're updating - updating a movie where the IMDB id matches that given by the user
//        .apply - create a new update definition to make the change inside the database
//        Update().push - the review we just created will be pushed into the reviewIds array
//        .first() - to make sure you're only updating a single movie.
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
