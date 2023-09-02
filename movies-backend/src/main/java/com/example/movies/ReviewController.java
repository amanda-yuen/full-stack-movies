package com.example.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
//the review form will be inside the movie details page/page your viewing a single movie, so we can make a request to the
//movies endpoint instead of creating a new review endpoint.
@RequestMapping("/api/v1/reviews")
public class ReviewController {
//    we only need a single post method

    @Autowired
    private ReviewService reviewService;

//  whatever we get as the request body, we would like to convert it to a map of the key String and value String.
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.OK);
    }

//    when using postman for testing, the keys in the JSON POST must match the payload keys.
//    This endpoint receives JSON data from the user and converts it to a map where the keys and values are a strings.
//    Then from this map we can access the 2 strings
//    Then through the service layer we can create a new review on the database, update the movie to be associated
//    with that review, then return the review.
}
