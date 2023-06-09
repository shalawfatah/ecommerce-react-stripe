import Title from '@/components/general/Title'
import Layout from '@/components/layout /Layout'
import Payment from '@/components/products/Payment'
import SingleProduct from '@/components/products/SingleProduct'
import { supabase } from '@/lib/supabase'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const fetcher = async() => {
    const {data, error} = await supabase.from('products').select()
    if(error) console.log(error)
    setProducts(data)
  }

  useEffect(() => {
    fetcher()
  }, [])
  return (
    <Layout>
      <Head>
        <title>Online Pay Project</title>
        <meta name="description" content="Online Pay Project with Stripe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='py-12'>
      <Title text="All Products" />
      <main className="flex flex-wrap gap-2 justify-center container mx-auto">
        {products.map(item => {
          return (
            <Link key={item.id} href={`products/${item.id}`}>
              <SingleProduct item={item} />
            </Link>
          )
        })}
      </main>
      </div>
      <Payment />
    </Layout>
  )
}

export default Products