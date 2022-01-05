import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import NoImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: Props): JSX.Element => {
  const { product } = useContext(ProductContext);
  let showImg: string;

  if(img) {
    showImg = img;
  } else if (product.img) {
    showImg = product.img;
  } else {
    showImg = NoImg;
  }

  return <img className={`${styles.productImg} ${className}`} src={showImg} alt='Product'/>
}
