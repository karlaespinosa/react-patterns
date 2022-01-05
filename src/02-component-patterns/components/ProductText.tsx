import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: Props): JSX.Element => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.ProductTitle} ${className}`}>
      {title ? title : product.title}
    </span>
  );
}