
import React from "react"
import { Layout } from "antd";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#fff',
    borderInlineEnd: '3px solid rgba(5, 5, 5, 0.06)'
};

const { Sider } = Layout;
const SiderApp = props => {
    const siderList = props.siderList.children.map((items, index) => ({
        key: index,
        title: items.title,
        path: items.path,
        label: items.title,
    }));
    const navigate = useNavigate()
    const handleClick = ({ item }) => {
        const PushPath = props.siderList.path + '/' + item.props.path
        navigate(PushPath)
    }
    return (
        <Sider style={siderStyle} width={200}>
            <Menu
                mode="inline"
                items={siderList}
                onSelect={handleClick}
            />
        </Sider>
    )
}

export default SiderApp