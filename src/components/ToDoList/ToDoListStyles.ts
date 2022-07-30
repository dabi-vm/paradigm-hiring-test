import { makeStyles } from "@mui/styles";

export const ToDoListStyles = makeStyles(() => ({
  root: {
    margin: 20,
  },
  title: {
    fontWeight: 800,
    letterSpacing: 10,
    textTransform: "uppercase",
  },
  desc: {
    color: "#6e49b5",
  },
}));
