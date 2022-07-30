import { Container } from "@mui/material";
import { ToDoList } from "../components/ToDoList/ToDoList";

export const Main = () => {
  return (
    <Container component="main" maxWidth='sm'>
      <ToDoList />
    </Container>
  );
};
