import { List, Typography } from "@mui/material";
import { FC } from "react";
import { IToDoItem } from "../../../models/todo";
import CustomListItem from "./Item/Item";

interface IProps {
  list: IToDoItem[];
  onCheckBoxClick(id: string): void;
  onDeleteClick(id: string): void;
  onModify(id: string, v: string): void;
}
export const ItemsList: FC<IProps> = ({
  list,
  onCheckBoxClick,
  onDeleteClick,
  onModify,
}) => {
  return (
    <List>
      {list?.map((item) => (
        <CustomListItem
          key={item.id}
          onCheckBoxClick={onCheckBoxClick}
          onDeleteClick={onDeleteClick}
          onModify={onModify}
          {...item}
        />
      ))}
      {!list && (
        <Typography variant="caption" color="GrayText">
          Double click on an item to edit it.
        </Typography>
      )}
    </List>
  );
};
