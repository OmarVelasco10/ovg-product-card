import renderer from 'react-test-renderer';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { ProductTitle, ProductCard } from '../../src/components/';
import { product } from '../data/product';

describe('ProductTitle test', () => {
    it('should to show the component with the custom title', () => {
      const wrapper = renderer.create(
        <ProductTitle title="Custom Product" className='custom-class'/>
      );

      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Should to show the component with the product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
          );
    
          expect(wrapper.toJSON()).toMatchSnapshot();
    })
  });
  