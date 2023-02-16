import React from 'react'
import Data from "../data.json"
import ItemDetail from "./ItemDetail"
import { useState } from "react"
import { useParams } from "react-router"

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [cursos, setCursos] = useState([]);
    const getDatos = () => {
      return new Promise((resolve, reject) => {
        if (Data.length === 0) {
          reject(new Error("No hay datos"));
        }
        setTimeout(() => {
          const CursoFilter = Data.filter((curso) => curso.id == id);
          resolve(CursoFilter);
        }, 2000);
      });
    };
  
    async function fetchingData() {
      try {
        const datosFetched = await getDatos();
        setCursos(datosFetched);
      } catch (err) {
        console.log(err);
      }
    }
  
    fetchingData();

  return (
    <ItemDetail cursos={Data} />
  )
}

export default ItemDetailContainer