
import React from "react"
import { Layout } from "antd";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import rules from "../router/requireRules";

let siderList = {}
const hederList = rules.map((item, index) => ({
    key: index,
    title: item.title,
    path: item.path,
    label: item.title,
}));
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    padding: '0px',
    lineHeight: '64px',
    backgroundColor: '#fff',
    marginBottom: '5px'
};
const { Header } = Layout;
const HeaderApp = props => {
    const navigate = useNavigate()
    const handleClick = ({ item }) => {
        siderList = rules.find(ele => {
            return item.props.title === ele.title
        })
        props.getSiderList(siderList)
        const PushPath = siderList.path + '/' + siderList.children[0].path
        navigate(PushPath)
    }
    return (
        <Header
            style={headerStyle}
        >
            <Menu theme="light" mode="horizontal" items={hederList} onSelect={handleClick} />
        </Header>
    )

}
export default HeaderApp