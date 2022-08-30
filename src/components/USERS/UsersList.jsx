import { Stack } from "@mui/system";
import React from "react";

const UsersList = (props) => {
  return (
    <Stack
      sx={{
        backgroundColor: "#070b08",
        border: "1px solid green",
        borderRadius: "4px",
        width: "90%",
        margin: "2rem auto",
        maxWidth: "40rem",
      }}
    >
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Stack>
  );
};
export default UsersList;
