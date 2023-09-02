package com.example.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

//let framework know this class sheet represents each document in the movies collection
@Document(collection = "movies")
//From Lombok project; looks after the G, S and toString methods.
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
//    let framework know this property should be treated as the unique identifier for each movie inside the database.
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;

//    this will cause the database to only store the IDs of the review, and the reviews will be in a separate collection.
//    this is called a "Manual Reference Relationship"
    @DocumentReference
//    embedded relationship - all the reviews related to this movie will be added to this list.
    private List<Review> reviewIds;
}
