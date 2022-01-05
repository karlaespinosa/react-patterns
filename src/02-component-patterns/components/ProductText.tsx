import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title = '' }): JSX.Element => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.ProductTitle}>
      {title ? title : product.title}
    </span>
  );
}