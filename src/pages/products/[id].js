import Layout from '@/components/layout /Layout'
import SinglePage from '@/components/products/SinglePage'
import { supabase } from '@/lib/supabase'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleProductPage = () => {
  const router = useRouter()
  const product_id = router.query.id;

  const [product, setProduct] = useState({})
  const fetcher = async() => {
    const {data, error} = await supabase.from('products').select().eq('id', product_id).single()
    if(error) console.log(error)
    setProduct(data)
  }

  useEffect(() => {
    fetcher()
  }, [product])
  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap gap-2">
        <SinglePage item={product} />
      </main>
    </Layout>
  )
}

export default SingleProductPage;