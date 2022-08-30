import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    //adding validation
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (mom-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (>0)",
      });
      return;
    }

    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  const addName = (event) => {
    setName(event.target.value);
  };

  const addAge = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};
export default AddUser;
