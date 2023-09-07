import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css"; 

// a YT video id will be passed into this component as a parameter, so will use the useParams hook to extract the relevant
// parameter value from the relevant URL.
// The relevant param will contain a YT video id which will allow us to play a YT video trailer of the relevant movie

const Trailer = () => {
  let params = useParams();
//   assign passed in param 
  const key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={true}  //video plays as soon as trailer component loads
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
