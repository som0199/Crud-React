import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo, edit, getTodos } from "../features/todo/todoSlice";

const ListDetail = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = async (_id) => {
    await dispatch(deleteTodo(_id));
    dispatch(getTodos());
  };

  const handleEdit = (todo) => {
    dispatch(edit(todo));
  };
  return (
    <>
      <ListItem sx={{ marginBlock: "20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Name : {todo?.title} </Typography>
          <Typography variant="h6">Details : {todo?.description}</Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            size="small"
            color="warning"
            endIcon={<EditIcon />}
            onClick={() => handleEdit(todo)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ marginInline: "5px" }}
            endIcon={<DeleteIcon />}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListDetail;
