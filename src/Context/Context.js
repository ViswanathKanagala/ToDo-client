import React, { createContext, useState } from "react";


export const UserContext = createContext();

export function UserfnContext(props) {
  const [User, setUser] = useState([]);


  const UserSetter = (data) => {
    setUser([...User,data]);
  };


  return (
    <UserContext.Provider
      value={{
        User,
        UserSetter,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
