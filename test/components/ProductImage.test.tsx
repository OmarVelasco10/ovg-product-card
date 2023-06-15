import renderer from 'react-test-renderer';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage test', () => {
    it('should to show the component with the custom image', () => {
      const wrapper = renderer.create(
        <ProductImage img="https://test.jpg" />
      );

      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Should to show the component with the product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
          );
    
          expect(wrapper.toJSON()).toMatchSnapshot();
    })
  });
  