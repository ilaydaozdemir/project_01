import React, { useState } from "react";
import AddUser from "./components/USERS/AddUser";
import UsersList from "./components/USERS/UsersList";

import styles from "./Font/Font.module.css";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserList = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <div className={styles.App}>
        <h1 className={styles}>Join the Event</h1>
      </div>
      <AddUser onAddUser={addUserList} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
