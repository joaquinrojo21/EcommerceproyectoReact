import React from 'react'
import { Button } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <div className="cart">
    <Button size="lg" variant="outline" colorScheme="black">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>5</span>
    </Button>
  </div>
  )
}

export default CartWidget