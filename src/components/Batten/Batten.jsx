import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from "antd";
import "./Batten.css"
import photopath from "./photo/Login.jpg"

const { Header } = Layout;

export default class Batten extends Component {
    render() {
        return (
            <Header>
                <div>
                    <Link to='Home'><img className="logo" src={photopath} alt="" /></Link>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
                    <Menu.Item key="Weather"><Link to="/Weather">天气预报</Link></Menu.Item>
                    <Menu.Item key="News"><Link to="/News">新闻头条</Link></Menu.Item>
                    <Menu.Item key="Idiom"><Link to="/Idiom">成语接龙</Link></Menu.Item>
                    <Menu.Item key="Phone"><Link to="/Phone">手机号码归属地</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}
