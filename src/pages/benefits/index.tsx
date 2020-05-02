import { connect } from 'umi';
import React from 'react';

const Benefits = ({ dispatch }: { dispatch: any }) => {
  function handleDelete(id: any) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return <div>Benefits</div>;
};

export default Benefits;
