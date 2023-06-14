# ovg-product-card

This is a test package deploy on npm.

### Omar Velasco
```
import {ProductImage,ProductTitle,ProductButtons} from 'ovg-product-card
```
```
  <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset,count, increaseBy, isMaxCountReached, maxCount}) => (
            <>
              <ProductImage />
              <ProductTitle  />
              <ProductButtons  />
            </>
          )
        }
        
      </ProductCard>
```