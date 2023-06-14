
import React, { CSSProperties, createContext } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues, productCardHandlers } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: productCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}





export const ProductCard = ({ children, product, className , style, onChange, value, initialValues}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});

  return (
    <Provider value={{
      counter, increaseBy, product, maxCount
    }}>
      <div className= {`${styles.productCard} ${className}` }
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  );
};