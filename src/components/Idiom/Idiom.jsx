import React, { Component } from 'react'
import './Idiom.css'
import axios from 'axios'
import { Input } from 'antd';

const { Search } = Input;

export default class Idiom extends Component {
    state = {
        idiomNumber: null,
        idiomReason: null,
        idiomError: null,
        idiomValue: [],
        idiomLen: 0,
    }

    search = value => {
        axios.get(`http://localhost:3000/Idioms?key=fff107d9f012d852a39c7d8331300087&wd=${value}&size=70&is_rand=2`).then(
            response => {
                this.setState({
                    idiomNumber: value,
                    idiomReason: response.data.reason,
                    idiomError: response.data.error_code,
                    idiomValue: response.data.result.data,
                    idiomLen: response.data.result.total_count
                })
                //console.log(this.state.idiomValue);
            },
            error => { console.log('NO'); }
        )
    }

    setRow(n) {
        var res = [];
        if (n >= 1) {
            for (var i = 0; i < n; i++) {
                res.push(
                    <div key={"Idiom" + i}>
                        <p className="IdiomSetRowP">{this.state.idiomValue[i] + ' ' + this.state.idiomValue[i + 1] + ' ' + this.state.idiomValue[i + 2] + ' ' + this.state.idiomValue[i + 3] + ' ' + this.state.idiomValue[i + 4] + ' ' + this.state.idiomValue[i + 5] + ' ' + this.state.idiomValue[i + 6]}</p>
                    </div>
                );
            }
        } else{
            for (i = 0; i < this.state.idiomLen; i++) {
                res.push(
                    <div key={"Idiom" + i}>
                        <p className="IdiomSetRowP6">{this.state.idiomValue[i]}</p>
                    </div>
                );
            }
        }
            console.log(this.state.idiomLen / 7)
        return res;
    }

    Code(idiomSTATE) {
        if (idiomSTATE.idiomNumber == null) {
            return (
                <h1 className="IdiomError-Reason" align="center">请您输入查询的四字成语</h1>
            );
        } else
            if (idiomSTATE.idiomValue == null) {
                return (
                    <h1 className="IdiomError-Reason" align="center">{"未查询到相关结果! 请您重新输入查询的四字成语"}</h1>
                );
            } else
                if (idiomSTATE.idiomError !== 0) {
                    return (
                        <h1 className="IdiomError-Reason" align="center">{idiomSTATE.idiomReason + "! 请您重新输入查询的四字成语"}</h1>
                    );
                } else {
                    return (
                        this.setRow(idiomSTATE.idiomLen / 7)
                    );
                }
    }

    render() {
        return (
            <div>
                <div className="Idiom-header">
                    <h1 className="Idiomh1">成语接龙</h1>
                    <Search style={{ width: 350, margin: 0, padding: 0, float: "right", marginTop: 10 }} placeholder="四字成语" onSearch={this.search} enterButton />
                </div>
                <div className="Idiom-layout">
                    {this.Code(this.state)}
                </div>
            </div>
        )
    }
}