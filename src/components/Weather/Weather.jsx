import React, { Component } from 'react'
import './Weather.css'
import axios from 'axios'
import { Input, Table} from 'antd';

const { Search } = Input;

const columns = [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        render: text => <a>{text}</a>,
    },
    {
        title: '温度',
        dataIndex: 'temperature',
        key: 'temperature',
    },
    {
        title: '气候',
        dataIndex: 'weather',
        key: 'weather',
    },
    {
        title: '风向',
        key: 'direct',
        dataIndex: 'direct',
    }
];

// const data = [
//     {
//       key: '1',
//       Date: 'John Brown',
//       Temperature: 32,
//       Climate: 'New York No. 1 Lake Park',
//       Wind: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       Date: 'Jim Green',
//       Temperature: 42,
//       Climate: 'London No. 1 Lake Park',
//       Wind: ['loser'],
//     },
//     {
//       key: '3',
//       Date: 'Joe Black',
//       Temperature: 32,
//       Climate: 'Sidney No. 1 Lake Park',
//       Wind: ['cool', 'teacher'],
//     },
//   ];

export default class Weather extends Component {
    state = {
        weaNumber: null,
        weaReason: null,
        weaError: null,
        weaValue: null
    }

    search = value => {
        axios.get(`http://localhost:3000/Weathers?city=${value}&key=833f6782a5cc8200765608a7f6729017`).then(
            response => {
                this.setState({
                    weaNumber: value,
                    weaReason: response.data.reason,
                    weaError: response.data.error_code,
                    weaValue: response.data.result
                })
                //console.log(this.state.weaValue);
            },
            error => { console.log('NO'); }
        )
    }

    render() {
        function Code(WEASTATE) {
            if (WEASTATE.weaNumber==null){
                return (
                    <h1 className="weaError-Reason" align="center">请您输入查询的城市名称</h1>
                );
            } else
            if (WEASTATE.weaError !== 0) {
                return (
                    <h1 className="weaError-Reason" align="center">{WEASTATE.weaReason+"! 请您重新输入查询的城市名称"}</h1>
                );
            } else {
                return (
                    <div>
                        <div className="WeaRightHeader">
                            <h1 className="WeaRightTop">{WEASTATE.weaValue.city}&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                            <h2 style={{display: "inline"}}>今天：{WEASTATE.weaValue.realtime.info}&nbsp;{WEASTATE.weaValue.realtime.temperature+'℃'}&nbsp;&nbsp;{WEASTATE.weaValue.realtime.direct}&nbsp;{WEASTATE.weaValue.realtime.power}</h2>
                        </div>
                        <br></br>
                        <h1>近期天气预报</h1>
                        <Table columns={columns} dataSource={WEASTATE.weaValue.future} />
                    </div>
                );
            }
        }

        return (
            <div>
                <div className="Weather-header">
                    <h1 className="Weatherh1">天气预报</h1>
                    <Search style={{ width: 350, margin: 0, padding: 0, float: "right", marginTop: 10 }} placeholder="城市名称" onSearch={this.search} enterButton />
                </div>
                <div className="Weather-layout">
                    {Code(this.state)}
                </div>
            </div>
        )
    }
}
