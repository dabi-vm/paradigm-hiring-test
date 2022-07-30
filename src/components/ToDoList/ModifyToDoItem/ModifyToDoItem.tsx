import { TextField } from "@mui/material";
import { FC } from "react";

interface IProps {
  value?: string;
  onSubmit(v: string): void;
}
export const ModifyToDoItem: FC<IProps> = ({ value, onSubmit }) => {
  return (
    <TextField
      id="standard-basic"
      label="New Task"
      variant="standard"
      fullWidth
      helperText="Enter to submit to-do"
      defaultValue={value ?? undefined}
      onKeyDown={(e: any) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
          onSubmit(e.target.value);
          e.target.value = "";
        }
      }}
    />
  );
};
