import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: 'abc',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image'/>
          <ProductTitle />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
