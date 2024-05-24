import { Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, edit, updateTodo } from "../features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.todo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !edit.isEdit
      ? dispatch(
          addTodo({
            title,
            description,
          })
        )
      : dispatch(
          updateTodo({
            _id: edit.todo._id,
            title,
            description,
          })
        );

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        color="info"
        variant="outlined"
        label="Enter Task Name"
        fullWidth
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <TextField
        color="secondary"
        variant="outlined"
        label="Enter Details"
        multiline
        rows={4}
        fullWidth
        sx={{ margin: "10px 0px" }}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      />
      <Button
        variant="contained"
        color="success"
        fullWidth
        endIcon={<SaveIcon />}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default Form;
