import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { IToDoItem } from "../../../models/todo";

interface IProps {
  list: IToDoItem[];
  onCheckBoxClick(id: string): () => void;
}
export const GenericList: FC<IProps> = ({ list, onCheckBoxClick }) => {
  return (
    <List>
      {list.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem key={value.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={onCheckBoxClick(value.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.text + 1} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
