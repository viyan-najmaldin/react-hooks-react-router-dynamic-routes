import React from "react";
import { useParams } from "react-router-dom";
function MovieShow({ movies }) {
  const params = useParams();
  console.log(params);
  return <div>{movies[params.movieId].title}</div>;
}

export default MovieShow;