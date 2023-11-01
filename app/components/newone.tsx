import { clint } from "../lib/sanity"
import { simlifiedProduct } from '../interface'
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import Image from "next/image"
async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc){
        _id,
        price,
        name,
        "categoryName": category->name,
        "slug": slug.current,
        "imageUrl": images[0].asset->url
    }`
    const data = await clint.fetch(query)
    return data
}
export default async function Newone() {
    const data: simlifiedProduct[] = await getData()
    return (<>

        <div className="bg-withe">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl fond-bold tracking-tight text-gray-900">  محصولات جدید</h2>

                    <Link href="all " className="text-primary flex items-center gap-x-1">
                        مشاهده کامل
                        <span>
                            <ArrowLeft />
                        </span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 aspect-square">
                                <Image
                                    width={300}
                                    height={300}
                                    src={product.imageUrl} alt="photo " className="w-full h-full  object-cover object-center lg:h-full lg:w-full  " />
                            </div>
                            <div className="mt-4 flex justify-between text-center items-center my-auto ">
                               <div className="text-center items-center">
                                <h3 className="text-sm   text-gray-700">
                                    <Link href={`/product/${product.slug}`}>
                                        {product.name}
                                    
                                    </Link> 

                                </h3>
                                <p className= "text-gray-400 font-thin">
                                    {product.categoryName}
                                </p>
                                </div> 
                                <p className="text-bold font-black">${product.price}</p>

                            </div>

                        </div>
                    ))}
                </div>

            </div>


        </div>
    </>)

}