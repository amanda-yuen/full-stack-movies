import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviewIds, setReviewIds }) => {
// useRef hook to reference the textarea control 
  const revText = useRef();
// useParams hook to extract the movie ID param value from the relevant URL
  let params = useParams();
// imdbID of the movie.
  const movieId = params.movieId;

//   when the component first loads, we want to call a method that is passed as a prop to our component in order to
// retrieve the appropriate data for the relevant movie
// add the getMovieData method to App.js 
  useEffect(() => {
    getMovieData(movieId);
  }, []);

//   create a addReview method - create the relevant HTTP POST request functionality for adding a review to the 
// MongoDB database on a remote server
  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

    //   update the state of the reviews array on the client side 'optimistically' = we are not using data returned from
    // the server (data saved to database) for updating the state of the reviews array
    // we update the array directly from the data entered on the client
      const updatedReviews = reviewIds != null ? [...reviewIds, { body: rev.value }]  : [{ body: rev.value }];

    //   clear the textarea control once the user has successfully submitted a review
      rev.value = "";

    //   update the state of the reviews array on the client using the setReviews method that will be passes as a prop
    // from the app component.
      setReviewIds(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

//   use row and col to create a layout 
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviewIds?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
