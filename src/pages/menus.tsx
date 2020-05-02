import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Product from './products';
import Benefit from './benefits';
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="0">
                <UserOutlined />

                <Link to="/products">Home</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <UserOutlined />
                <Link to="/benefits">Admin</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span>Staff</span>
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span>User</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: this.toggle,
                },
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                height: '850px',
              }}
            >
              <Route exact path="/products" component={Product}></Route>
              <Route exact path="/benefits" component={Benefit}></Route>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default SiderDemo;
