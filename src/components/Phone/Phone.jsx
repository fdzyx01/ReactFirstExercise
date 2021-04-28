import React, { Component } from 'react'
import './Phone.css'
import axios from 'axios'
import { Input } from 'antd';

const { Search } = Input;

export default class Phone extends Component {
    state = {
        phoNumber: null,
        phoReason: null,
        phoError: null,
        phoValue: null
    }

    search = value => {
        axios.get(`http://localhost:3000/Phones?phone=${value}&key=21e9a5809723bc9d486f21f68b492555`).then(
            response => {
                this.setState({
                    phoNumber: value,
                    phoReason: response.data.reason,
                    phoError: response.data.error_code,
                    phoValue: response.data.result
                })
            },
            error => { console.log('NO'); }
        )
    }

    render() {
        function Code(PHOSTATE) {
            if (PHOSTATE.phoNumber==null){
                return (
                    <h1 className="PhoError-Reason" align="center">请您输入查询的手机号码段</h1>
                );
            } else
            if (PHOSTATE.phoError !== 0) {
                return (
                    <h1 className="PhoError-Reason" align="center">{PHOSTATE.phoReason+"! 请您重新输入查询的手机号码段"}</h1>
                );
            } else {
                return (
                    <div>
                        <table class="mailTable" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr >
                                    <th colSpan="2" className="columnTop">
                                        查询结果
                                    </th>
                                </tr>
                            </thead>
                            <tr>
                                <td class="column">您查询的手机号码段</td>
                                <td>{PHOSTATE.phoNumber}</td>
                            </tr>
                            <tr>
                                <td class="column">卡号归属地</td>
                                <td>{PHOSTATE.phoValue.province + ' ' + PHOSTATE.phoValue.city}</td>
                            </tr>
                            <tr>
                                <td class="column">运营商</td>
                                <td>{PHOSTATE.phoValue.company}</td>
                            </tr>
                            <tr>
                                <td class="column">区号</td>
                                <td>{PHOSTATE.phoValue.areacode}</td>
                            </tr>
                            <tr>
                                <td class="column">邮编</td>
                                <td>{PHOSTATE.phoValue.zip}</td>
                            </tr>
                        </table>
                    </div>
                );
            }
        }

        return (
            <div>
                <div className="Phone-header">
                    <h1 className="Phoneh1">手机号码归属地</h1>
                    <Search style={{ width: 350, margin: 0, padding: 0, float: "right", marginTop: 10 }} placeholder="手机号码段" onSearch={this.search} enterButton />
                </div>
                <div className="Phone-layout">
                    {Code(this.state)}
                </div>
            </div>
        )
    }
}
