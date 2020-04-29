import { Table, Popconfirm, Button } from 'antd';
import React from 'react';

const ProductList = ({ onDelete, products }: {onDelete: any, products: any}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)} okText="Ok" cancelText="Cancel">
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;
