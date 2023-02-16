import React from 'react'
import { useParams } from "react-router-dom";
import Data from "../data.json"
import ItemList from "./ItemList";
import { Heading, Center } from "@chakra-ui/react"

const ItemListContainer = () => {
    const { categoria } = useParams()

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

      const catFilter = Data.filter((cursos) => cursos.categoria === categoria);


  return (
    <div>
      <Center bg="#7dbae5" h="80px" color="black" >
        <Heading as="h6" size="2xl">
          Capacitate con los mejores
        </Heading>
      </Center>
      {categoria ? <ItemList cursos={catFilter} /> : <ItemList cursos={Data} />}
    </div>
  )
}

export default ItemListContainer