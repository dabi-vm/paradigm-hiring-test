import { Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IToDoItem } from "../../models/todo";
import { getLocalStorage, setLocalStorage } from "../../service/commonFunc";
import { ItemsList } from "./ItemsList/ItemsList";
import { ModifyToDoItem } from "./ModifyToDoItem/ModifyToDoItem";
import { ToDoListStyles } from "./ToDoListStyles";

export const ToDoList = () => {
  const classes = ToDoListStyles();
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);

  const NewTodoHandler = (v: string) =>
    useCallback(() => {
      // create new item object
      const newTodo: IToDoItem = {
        id: new Date().toString() + v,
        text: v,
        checked: false,
      };
      setToDoList((toDoList) => [...toDoList, newTodo]);
    }, []);

  const ModifyHandler = (id: string, v: string) =>
    useCallback(() => {
      // find modified item and edit text
      const modifiedList = toDoList.map((el) => {
        if (el.id === id) el.text = v;
        return el;
      });
      setToDoList(modifiedList);
    }, []);

  const HandleCheckedItem = (id: string) =>
    useCallback(() => {
      // find checked item and edit check state
      const modifiedList = toDoList.map((el) => {
        if (el.id === id) el.checked = !el.checked;
        return el;
      });
      setToDoList(modifiedList);
    }, []);

  const DeleteTodoHandler = (id: string) =>
    useCallback(() => {
      const filteredList = toDoList.filter((el) => el.id !== id);
      setToDoList(filteredList);
    }, []);

  // set state on start project
  useEffect(() => setToDoList(getLocalStorage("toDoList") ?? []), []);

  // set local storage on every change state
  useEffect(() => setLocalStorage("toDoList", toDoList), [toDoList]);

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} container direction="column" alignItems="center">
        <Typography variant="h4" className={classes.title}>
          To-do List
        </Typography>
        <Typography variant="overline" className={classes.desc}>
          A paradigm hiring test
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ModifyToDoItem onSubmit={NewTodoHandler} />
      </Grid>
      <Grid item xs={12}>
        <ItemsList
          list={toDoList}
          onCheckBoxClick={HandleCheckedItem}
          onDeleteClick={DeleteTodoHandler}
          onModify={ModifyHandler}
        />
      </Grid>
    </Grid>
  );
};
