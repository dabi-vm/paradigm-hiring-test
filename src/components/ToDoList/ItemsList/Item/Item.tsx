import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, memo, useState } from "react";
import { IToDoItem } from "../../../../models/todo";
import DeleteIcon from "@mui/icons-material/Delete";
import { ModifyToDoItem } from "../../ModifyToDoItem/ModifyToDoItem";
import { ItemStyles } from "./ItemStyles";

interface IProps extends IToDoItem {
  onCheckBoxClick(id: string): void;
  onDeleteClick(id: string): void;
  onModify(id: string, v: string): void;
}

const CustomListItem: FC<IProps> = ({
  onCheckBoxClick,
  onDeleteClick,
  checked,
  id,
  text,
  onModify,
}) => {
  const classes = ItemStyles();
  const [modifyMode, setModifyMode] = useState(false);
  return modifyMode ? (
    <ModifyToDoItem
      value={text}
      onSubmit={(v) => {
        onModify(id, v);
        setModifyMode(false);
      }}
    />
  ) : (
    <ListItem
      key={id}
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
      onDoubleClick={() => setModifyMode(true)}
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": id }}
            onClick={(e) => {
              e.stopPropagation();
              onCheckBoxClick(id);
            }}
          />
        </ListItemIcon>
        <ListItemText
          id={id}
          primary={text}
          className={checked ? classes.checkedItem : undefined}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(CustomListItem);
