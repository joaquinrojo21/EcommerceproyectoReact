import React from 'react'
import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom"
  import ItemCount from "./ItemCount"
  import orocurso from "../assets/img/oro.jpg"

const ItemDetail = ({ cursos }) => {

    const { id } = useParams();

    const cursoFilter = cursos.filter((curso) => curso.id == id);




  return (
    <>
    {cursoFilter.map((curso) => (
        <div key={curso.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={orocurso} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{curso.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {curso.descripcion}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {curso.categoria}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Cupos: {curso.cupos}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: $ {curso.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount cupos={curso.cupos} />
                <Center className="btn-center">
                  <Button variant="solid" colorScheme="blue">
                    Inscribirme
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
      </>
  )
}

export default ItemDetail