import React from "react";
import AddUser from "./components/USERS/AddUser";

import styles from "./Font/Font.module.css";
function App() {
  return (
    <div>
      <div className={styles.App}>
        <h1 className={styles}>Join the Event</h1>
      </div>
      <AddUser />
    </div>
  );
}

export default App;
