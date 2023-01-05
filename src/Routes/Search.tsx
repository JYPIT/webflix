import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getMulti, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 500vh;
  margin-top: 200px;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  background-color: black;
  padding: 0px 30px;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: gray;
  background-size: cover;
  background-position: center;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const BoxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -70,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  const { data, isLoading } = useQuery<IGetMoviesResult>(["movies", "contents"], getMulti);
  console.log(data, isLoading);
  return (
    <Wrapper>
      <Grid>
        {data?.results.map((movie) => (
          <Link to="movies/:movieId">
            <Box key={movie.id} whileHover="hover" variants={BoxVariants} initial="normal" bgphoto={makeImagePath(movie.poster_path, "w500")}>
              <h4>{movie.title}</h4>
            </Box>
          </Link>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Search;
