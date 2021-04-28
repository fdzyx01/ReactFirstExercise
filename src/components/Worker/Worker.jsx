import React, { Component } from 'react'
import Weather from '../Weather/Weather'
import Phone from '../Phone/Phone'
import Idiom from '../Idiom/Idiom'
import Home from '../Home/Home'
import News from '../News/News'
import {Route,Redirect} from 'react-router-dom'
import { Layout} from "antd";

const { Content } = Layout;

export default class Worker extends Component {
    render() {
        return (
            <Content style={{ padding: "0 50px" }}>
                <Route path='/Home' component={Home} />
                <Route path='/Weather' component={Weather}/>
                <Route path='/Phone' component={Phone}/>
                <Route path='/News' component={News}/>
                <Route path='/Idiom' component={Idiom}/>
                <Redirect path="/" to="/Home" /> 
            </Content>
        )
    }
}
