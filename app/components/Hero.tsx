import Image from "next/image";
import { clint, urlFor } from "../lib/sanity";
import Link from "next/link";
async function getData() {
    const query = "*[_type == 'heroImage'][0]"

    const data = await clint.fetch(query)
    return data
}

export default async function Hero() {
    const data = await getData()
    return <>

        <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">

            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12  lg:mb-0 lg:w-1/3 lg:pb-24 lg:p-48 ">

                    <h1 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:mb-8 md:text-6xl">
                        مدرنپوش 
                    </h1>
                    <p className=" w-60 max-w-lg   m-3 leading-relaxed  text-gray-500">

                    
                    بهترین مدل هاروز دنیا 
                    <br />
                    
                    جذاب ترین زنگ 
                    <br />
                    گارانتی دار


                    </p>



                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">

                    <div className="relative   right-48  top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:right-16 md:top-16 lg:mr-0 ">
                        <Image
                            priority
                            src={urlFor(data.image1).url()}
                            alt="photo"
                            className="    object-cover object-center"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                        <Image src={urlFor(data.image2).url()}
                            alt="photo"
                            className="h-full  object-cover object-center  "
                            width={500}
                            height={500}
                            priority
                        />

                    </div>

                </div>

            </div>
            <div className=" flex flex-col items-center justify-between gap-8  md:flex-row">
                <div className=" flex  h-12 w-64 divide-x overflow-hidden rounded-lg border ">
                    <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200" href={'/Men'}>
                        مرد

                    </Link>
                    <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200" href={'/Women'}>
                        زنانه

                    </Link>
                    <Link className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200" href={'/Teens'}>
                        کودک

                    </Link>

                </div>

            </div>

        </section>
    </>
}