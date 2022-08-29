import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("event tetiklendi", event);
    console.log(name, age);
    setName("");
    setAge("");
  };

  const addName = (event) => {
    setName(event.target.value);
  };

  const addAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack alignItems="center" justifyContent="center">
      <form onSubmit={addUserHandler}>
        <Stack spacing={1}>
          <Stack>UserName: </Stack>
          <TextField
            variant="standard"
            color="success"
            value={name}
            onChange={addName}
          />
          <Stack>Age: </Stack>
          <TextField
            variant="standard"
            color="success"
            value={age}
            onChange={addAge}
          />
          <Button variant="contained" type="submit" color="success">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
export default AddUser;
