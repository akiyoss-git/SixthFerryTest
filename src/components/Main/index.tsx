import React, { useContext, useEffect, useState } from "react";
import { getTreeRows } from "../../api";
import { defaultEntity, EntityContext } from "../EntityContext/EntityContext";

const Main = () => {
  const entity = useContext(EntityContext)
  const [data, setData] = useState([])
  useEffect(()=>{
    entity !== defaultEntity && 
    getTreeRows(entity.id).then(
      (res) => setData(res.data)
    )
  })
  return (
    <>data: {data}</>
  )
}

export default Main;