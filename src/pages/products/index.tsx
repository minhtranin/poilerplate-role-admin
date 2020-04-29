import { connect } from 'umi';
import ProductList from './ProductList';
import React from 'react';

const Products = ({ dispatch, products }: {dispatch: any, products: any}) => {
  function handleDelete(id: any) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }: { products: any }) => ({
  products,
}))(Products);
