import React from "react";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
const AddUser = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <form>
        <Stack spacing={1}>
          <item>UserName: </item>
          <TextField variant="standard" color="success" />
          <item>Age: </item>
          <TextField variant="standard" color="success" />
          <Button variant="contained" type="submit" color="success">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
export default AddUser;
