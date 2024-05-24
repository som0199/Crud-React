import { Box, CircularProgress, List, Typography } from "@mui/material";
import ListDetail from "./ListDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../features/todo/todoSlice";
import DangerousIcon from "@mui/icons-material/Dangerous";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ListGroup = () => {
  const { isLoading, isError, allTodos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) {
    return (
      <Typography
        variant="h5"
        color={"primary"}
        align="center"
        sx={{ paddingY: "10px" }}
      >
        <Box>
          <CircularProgress color="secondary" />
        </Box>
        Loading
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography
        variant="h4"
        color={"error"}
        sx={{ margin: "80px 0px" }}
        align="center"
      >
        Something Went Wrong.. <DangerousIcon fontSize="large" />
      </Typography>
    );
  }

  if (allTodos.length === 0) {
    return (
      <Typography sx={{ margin: "80px 0px" }} align="center" variant="h4">
        No Todos Yet... <SentimentVeryDissatisfiedIcon fontSize="large" />
      </Typography>
    );
  }

  return (
    <List sx={{ marginBlock: "50px" }}>
      {allTodos.map((todo) => (
        <ListDetail key={todo._id} todo={todo} />
      ))}
    </List>
  );
};

export default ListGroup;
