import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};

export const saveTodo = async (formData) => {
  const response = await axios.post("/api/todo/", formData);
  return response.data;
};

export const removeTodo = async (_id) => {
  const response = await axios.delete("/api/todo/" + _id);
  return response.data;
};

export const newTodo = async (updatedTodo) => {
  const response = await axios.put("/api/todo/" + updatedTodo._id, updatedTodo);
  return response.data;
};
