import Image from 'next/image'
import Hero from './components/Hero'
import Newone from './components/newone'

export default function Home() {
  return (
    <div className='pb-6 bg-white sm:bp-8 lg:pb-12'>
      <Hero/>
      <Newone/>
    </div>
  )
}
