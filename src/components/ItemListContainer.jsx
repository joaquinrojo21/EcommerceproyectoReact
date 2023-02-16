import React from 'react'
import { useParams } from "react-router-dom";
import Data from "../data.json"
import ItemList from "./ItemList";
import { Heading, Center } from "@chakra-ui/react"

const ItemListContainer = () => {
    const { category } = useParams()

    const getDatos = () => {
        return new Promise((resolve, reject) => {
          if (Data.length === 0) {
            reject(new Error("No hay datos"));
          }
          setTimeout(() => {
            resolve(Data);
          }, 2000);
        });
      };

      async function fetchingData() {
        try {
          const datosFetched = await getDatos();
        } catch (err) {
          console.log(err);
        }
      }

      fetchingData();

      const catFilter = Data.filter((cursos) => cursos.category === category);


  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cursos por Categoria
        </Heading>
      </Center>
      {category ? <ItemList cursos={catFilter} /> : <ItemList cursos={Data} />}
    </div>
  )
}

export default ItemListContainer