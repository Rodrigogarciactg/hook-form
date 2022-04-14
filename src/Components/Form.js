import React, { useState } from "react";

const Form = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstname, lastname, email, password, confirmpassword };
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  };
  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmpassord:</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
      </form>
      <div>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmpassword}</p>
      </div>
    </>
  );
};

export default Form;
