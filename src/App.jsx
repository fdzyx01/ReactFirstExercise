import React, { Component } from 'react'
import Header from './components/Batten/Batten'
import Worker from './components/Worker/Worker'
import Fail from './components/Fail/Fail'
import "antd/dist/antd.css"
import { Layout } from "antd";

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Worker />
                <Fail />
            </Layout>
        )
    }
}
