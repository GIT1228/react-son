import React from 'react';
import { Layout } from "antd";
import Header from "./headerApp"
import Sider from "./siderApp"
import Content from "./contentApp"

class LayoutApp extends React.Component {
    state = {
        siderList: {
            children: []
        }
    }
    getSiderList = (e) => {
        this.setState({
            siderList: e
        })
    }
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Header getSiderList={this.getSiderList} />
                <Layout>
                    <Sider siderList={this.state.siderList} />
                    <Content />
                </Layout>
            </Layout>
        );
    }
};
export default LayoutApp