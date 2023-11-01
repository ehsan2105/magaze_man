import ImageAll from "@/app/components/ImgaeAll"
import { fullProduct } from "@/app/interface"
import { clint } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button"
import { Star, Truck } from "lucide-react"
import AddCart from '@/app/components/AddCart'
async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id ,
        images,
        price,
        name,
        description,
        "slug":slug.current,
        "categoryName": category->name,
    }`

    const data = await clint.fetch(query)
    return data
}

export default async function productPage({ params, }: { params: { slug: string } }) {
    const data: fullProduct = await getData(params.slug)
    let takh = data.price + 20
    takh.toFixed()
    return (
        <>

            <div className="bg-white ">

                <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
                    <div className="grid gap-8 md:grid-cols-2">
                        <ImageAll images={data.images} />
                        <div className="md:py-8">

                            <div className=" mb-2 md:mb-3 ">
                                <span className=" mb-0.5 inline-block text-gray-500 ">
                                    {data.categoryName}
                                </span>
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>

                            </div>
                            <div className=" mb-6 flex items-center gap-3 md:mb-10">
                                <Button className=" rounded-full gap-x-2 ">
                                    <span className="text-sm ">4.20</span>
                                    <Star className="h-5 w-5 " />
                                </Button>
                                <span className=" text-sm text-gray-500  transition duration-100"> نمره 14 </span>

                            </div>
                            <div className="mb-4">
                                <div className="flex items-end gap-2 ">
                                    <span className="text-xl fond-bold text-gray-800 md:text-2xl">
                                        ${data.price}
                                    </span>
                                    <span className="mb-0.5 text-red-500 line-through" > %{takh}%</span>
                                </div>

                                <span className="text-sm text-gray-700">تخقیق روز </span>
                            </div>
                            <div className="flex mb-6 items-center gap-4 text-gray-500">
                                <Truck className="w-5 h-5" />
                                <span> تحویل 24 ساعته</span>

                            </div>

                            <div className="flex gap-2.5">
                                <AddCart name={data.name} price={data.price} description={data.description} currency="USD" image={data.images[0]} id={data._id} sku={data._id } key={data._id} />
                                <Button variant={"secondary"}>برو به پرداخت</Button>

                            </div>
                            <p className="mt-12 text-base text-gray-500 tracking-wide"> {data.description}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}