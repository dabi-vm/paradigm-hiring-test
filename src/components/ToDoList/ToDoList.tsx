import { Grid, Typography } from "@mui/material";
import React from "react";
import { IToDoItem } from "../../models/todo";
import { GenericList } from "../shared/GenericList/GenericList";
import { AddNewToDo } from "./AddNewToDo/AddNewToDo";

export const ToDoList = () => {
  const list = [
    {
      id: "1",
      text: "task 1",
      checked: false,
    },
  ];

  const handleToggle = (value: string) => () => {
    
  };

  const NewTodoHandler = (v: string) => {
   
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container direction="column" alignItems="center">
        <Typography variant="h4">To-do List</Typography>
        <Typography variant="overline">A paradigm hiring test</Typography>
        <p> </p>
      </Grid>
      <Grid item xs={12}>
        <AddNewToDo onSubmit={NewTodoHandler} />
      </Grid>
      <Grid item xs={12}>
        <GenericList list={list} onCheckBoxClick={handleToggle} />
      </Grid>
    </Grid>
  );
};
