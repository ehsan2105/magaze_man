"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,

    SheetContent,


    SheetHeader,
    SheetTitle,

} from "@/components/ui/sheet"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"
export default function ShopCart() {
    const { cartCount , shouldDisplayCart , handleCartClick,cartDetails,totalPrice, removeItem} = useShoppingCart()
    return (

        <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick} >

            <SheetContent className="sm:max-w-lg w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>


                </SheetHeader>


                <div className=" h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">

                            {cartCount === 0 ? (
                                <h2 className="  py-6">هیچی اضافه نکردی که</h2>
                            )
                                : (
                                   
                                   <>
                                   {Object.values(cartDetails ?? {}).map((entry)=>(
                                    <li key={entry.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
                                            <Image src={entry.image as string } alt=" photo" width={100} height={100}/>
                                            </div> 
                                            <div className=" ml-4 flex flex-1 flex-col ">
                                                <div className=" flex justify-between text-base font-medium text-gray-900">
                                                    <h3 className="mr-4">{entry.name}</h3>
                                                    <p className="mr-4">${entry.price}</p>

                                                </div>
                                                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                                            </div>
                                            <div className=" flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500"> تعداد:{entry.quantity}

                                                </p>
                                                <div className="flex">
                                                    <button 
                                                    onClick={ ()=>removeItem(entry.id)}
                                                    type="button" className="font-medium text-primary hover:text-primary/80">
                                                        خذف
                                                    </button>

                                                </div>

                                            </div>
                                    </li>
                                   ))}
                                   </>
                                )}
                        </ul>

                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>موارد </p>
                            <p>{totalPrice?.toFixed(2) }</p>

                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            زمان پست1 روزه
                        </p>
                        <div className="mt-6 ">
                            <Button className="w-full "> بزن بریم ؟</Button>
                            
                        </div>
                    </div>


                </div>

            </SheetContent>
        </Sheet>
    )
}