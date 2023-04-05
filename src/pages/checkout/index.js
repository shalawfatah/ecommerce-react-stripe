import Layout from '@/components/layout /Layout'
import Payment from '@/components/products/Payment'
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const router = useRouter();
  const { price, name } = router.query;
  const final_price = price * 100;
  return (
    <Layout>
        <div className='py-12 container mx-auto'>
        <h1>Checkout Form</h1>
        <Payment final_price={final_price} final_name={name} />
        </div>
    </Layout>
  )
}

export default CheckoutPage