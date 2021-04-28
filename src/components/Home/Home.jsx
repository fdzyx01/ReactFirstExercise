import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Phone-header">
                    <h1 className="Phoneh1">首页</h1>
                    {/* <Search style={{ width: 350, margin : 0, padding:0 ,float:"right" ,marginTop:10 }} placeholder="手机号码" onSearch={this.search} enterButton /> */}
                </div>
                <div className="Phone-layout">
                </div>
            </div>
        )
    }
}
