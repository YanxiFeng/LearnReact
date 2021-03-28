import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import './style.css'

const HYHeader = styled.h2`
    padding: 10px 20px;
    border-color: red;
    color: red;
`

export default class index extends Component {
    constructor() {
        super();

        this.state = {
            isActive: true,
            isBar: false
        }
    }

    render() {
        const { isActive, isBar } = this.state;
        return (
            <div>
                <HYHeader>我是标题1</HYHeader>
                {/* 原生添加class */}
                <p className={"foo baz"}>我是文本1</p>
                <p className={"title " + (isActive ? "active" : "")}>我是文本2</p>
                {/* classnames添加class */}
                <p className={classNames({ "active": isActive, "bar": isBar }, "title")}>我是classnames</p>
            </div>
        )
    }
}
