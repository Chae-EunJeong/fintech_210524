import React,  { useState } from "react";
import styled from "styled-components";

const ListComponent = () => {
  const [array, setarray] = useState([
    { name: "alice", age: "32", height: "170" },
    { name: "bob", age: "22", height: "160" },
    { name: "channy", age: "25", height: "165" },
  ]);
  return (
    <>
      {array.map((person) => (
        <>
          <h1>name : {person.name}</h1>
          <h2>age : {person.age}</h2>
          <h3>height : {person.height}</h3>
        </>
      ))}
    </>
  );
};

export default ListComponent;