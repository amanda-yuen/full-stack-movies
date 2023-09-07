import { Form, Button } from "react-bootstrap"

/* Reviews Component
- enable users to view reviews from other users and add reviews for movies into the system 
> HTTP POST request is made from our react component to the relevant remote API endpoints carrying the review data entered
by the user and the server side Java code will save the review data appropriately to the MongoDB database.
 */

// create a form component containing a textarea control so user can enter text denoting a movie review
// create a submit button so a user can submit their review


const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;