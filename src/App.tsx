import React, { useEffect, createContext, useState } from "react";
import { createEntity } from "./api";
import { EntityContextProvider } from "./components/EntityContext/EntityContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

export default function App() {
  return (
    <EntityContextProvider>
      <Header></Header>
      <Menu></Menu>
      <Main></Main>
    </EntityContextProvider>
  );
}
