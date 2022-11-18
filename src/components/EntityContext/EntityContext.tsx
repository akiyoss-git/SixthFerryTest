import React, { useEffect, createContext, useState, ReactNode } from "react";
import { createEntity } from "../../api";
import { IEntity } from "../../interfaces/IEntity";

const defaultEntity: IEntity = {id: 0, rowName: ""}

const EntityContext = createContext(defaultEntity)

interface MainProps {
    children?: ReactNode,
}

const EntityContextProvider = ({ children }: MainProps) => {
  const [entity, setEntity] = useState(defaultEntity);
  useEffect(() => {
    createEntity()
    .then(response => setEntity(response.data))
  }, []);

  return (
    <EntityContext.Provider value={entity}>
      {children}
    </EntityContext.Provider>
  );
};

export { EntityContext, EntityContextProvider, defaultEntity };