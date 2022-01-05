import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import NoImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }): JSX.Element => {
  const { product } = useContext(ProductContext);
  let showImg: string;

  if(img) {
    showImg = img;
  } else if (product.img) {
    showImg = product.img;
  } else {
    showImg = NoImg;
  }

  return <img className={styles.productImg} src={showImg} alt='Product'/>
}
