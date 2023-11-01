"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps {
    images: any
}

export default function ImageAll({ images }: iAppProps) {
    const [bigImage, setbigImage] = useState(images[0])
    
    const handlerImage = (image : any )=>{
        setbigImage(image)
    }

    return (
        <>
            <div className="grid gap-4 lg:grid-cols-5">
                <div className=" order-last flex gap-4 lg:order-none lg:flex-col">
                    {images.map((image: any, idx: any) => (
                        <div key={idx} className="rounded-lg overflow-hidden bg-gray-100">
                            <Image src={urlFor(image).url()}
                                width={200}
                                onClick={()=>handlerImage(image)}
                                height={200}
                                alt="photo"
                                className="h-full w-full object-cover object-center cursor-pointer " />
                            </div>
                    ))}

                </div>
                <div className=" relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 ">
                    <Image
                    src={urlFor(bigImage).url()}
                    alt="bigone"
                    height={500}width={500}
                    className="h-full w-full object-center object-cover"
                    />
                        

                </div>
                    <span className=" absolute  right-0   text-sm  uppercase tracking-wide text-white py-1.5  rounded-bl-lg bg-gray-500 px-3">IR compainer</span>

            </div>
        </>
    )
}