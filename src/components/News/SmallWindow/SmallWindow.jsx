import React, { Component } from 'react'
import './SmallWindow.css'

export default class SmallWindow extends Component {
    render() {
        return (
            <div className="SmallWindow-outer">
                <img className="SmallWindowImg" src={this.props.SRCIMG.thumbnail_pic_s} alt=''/>
                <br></br>
                <a className="SmallWindowA" href={this.props.SRCIMG.url}>{this.props.SRCIMG.title}</a>
            </div>
        )
    }
}
