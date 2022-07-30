import { TextField } from "@mui/material";
import { FC } from "react";

interface IProps {
  onSubmit(v: string): void;
}
export const AddNewToDo: FC<IProps> = ({ onSubmit }) => {
  return (
    <TextField
      id="standard-basic"
      label="New Task"
      variant="standard"
      fullWidth
      helperText="Enter to submit to-do"
      onKeyDown={(e: any) => {
        if (e.key === "Enter") {
          onSubmit(e.target.value);
        }
      }}
    />
  );
};
