import React from "react"
import { Layout } from "antd";
import { Outlet } from "react-router-dom"

const { Content } = Layout;
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#fff',
};

class ContentApp extends React.Component {
    render() {
        return (
            <Content style={contentStyle}>
                <Outlet />
            </Content>
        )
    }
}


export default ContentApp