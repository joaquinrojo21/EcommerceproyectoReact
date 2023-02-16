import React from 'react'
import { Container } from "@chakra-ui/react"
import Item from "./Item"
const ItemList = ({cursos}) => {



  return (
    <Container maxW="container.sm" className="main-catalogue">
        {cursos?.map((curso) => (
          <Item
            key={curso.id}
            id={curso.id}
            nombre={curso.nombre}
            descripcion={curso.descripcion}
            precio={curso.precio}
            cupos={curso.cupos}
            categoria={curso.categoria}
          />
        ))}
      </Container>
  )
}

export default ItemList