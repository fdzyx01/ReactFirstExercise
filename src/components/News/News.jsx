import React, { Component } from 'react'
import './News.css'
import axios from 'axios'
import SmallWindow from './SmallWindow/SmallWindow'
import { Input } from 'antd';


const { Search } = Input;

export default class News extends Component {
    state = {
        newNumber: null,
        newReason: null,
        newError: null,
        newValue: null
    }

    search = value => {
        axios.get(`http://localhost:3000/News?type=${value}&key=396059129550613e3d60184b0e3e10e4`).then(
            response => {
                this.setState({
                    newNumber: value,
                    newReason: response.data.reason,
                    newError: response.data.error_code,
                    newValue: response.data.result.data
                })
                //console.log(this.state.newValue[0].title);
            },
            error => { console.log('NO'); }
        )
    }

    renderSmallWindow(i) {
        return (
            <SmallWindow key={"News"+i} SRCIMG={this.state.newValue[i]}/>
        );
    }

    setLine(n) {
        var res = [];
        for (var i = 7 * n; i < 7 * (n + 1); i++) {
            res.push(this.renderSmallWindow(i));
        }
        return res;
    }

    setRow() {
        var res = [];
        for (var i = 0; i < 2; i++) {
            res.push(<div className='ListRow' >
                {this.setLine(i)}
            </div>
            );
        }
        return res;
    }

    Code(newSTATE){
        if (newSTATE.newNumber==null){
            return (
                <h1 className="NewError-Reason" align="center">请您输入查询的新闻关键词</h1>
            );
        } else
        if (newSTATE.newError!==0){
            return (
                <h1 className="NewError-Reason" align="center">{newSTATE.newReason+"! 请您重新输入查询的新闻关键词"}</h1>
            );
        } else {
            return (
                this.setRow()
            );
        }
    }

    render() {
        return (
            <div>
                <div className="New-header">
                    <h1 className="Newh1">新闻头条</h1>
                    <Search style={{ width: 350, margin : 0, padding:0 ,float:"right" ,marginTop:10 }} placeholder="关键字" onSearch={this.search} enterButton />
                </div>
                <div className="New-layout">
                    {this.Code(this.state)}
                </div>
            </div>
        )
    }
}
