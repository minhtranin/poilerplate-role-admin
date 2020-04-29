export default {
    namespace: 'products',
    state: [
      { name: 'dva', id: 'dva' },
      { name: 'antd', id: 'antd' },
    ],
    reducers: {
      delete(state: any, { payload: id }:{payload: any}) {
        return state.filter((item: any) => item.id !== id);
      },
    },
  };
