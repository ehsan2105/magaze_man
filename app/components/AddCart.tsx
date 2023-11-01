"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";


export interface CartInfo {
    name: string,
    price: number,
    description: string,
    image: any
    id : string
    sku: any
    currency :string
    
}

export default function AddCart({ name, price, description, image , id,sku }: CartInfo) {
    const { addItem, handleCartClick } = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price: price,
        image:  urlFor(image).url(),
        id: id,
        sku:id ,
        currency :"USD"
    }
    return (
        <>
            <Button onClick={() => {

                addItem(product), handleCartClick()
            }}>
                اضافه به سبد
            </Button>

        </>
    )
}