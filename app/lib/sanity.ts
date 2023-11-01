import imageUrlBuilder from '@sanity/image-url'
import {createClient} from 'next-sanity'


export const clint = createClient({
    projectId :"beb1xx3q",
    dataset : "production",
    apiVersion : "2022-03-25",
    useCdn : true
})
const builder = imageUrlBuilder(clint)

export function urlFor(source:any){

    return builder.image(source)
}