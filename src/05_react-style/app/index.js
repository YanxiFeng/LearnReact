import React, { Component } from 'react'
import styled from 'styled-components'

const HYHeader = styled.h2`
    padding: 10px 20px;
    border-color: red;
    color: red;
`

export default class index extends Component {
    render() {
        return (
            <div>
                <HYHeader>我是标题1</HYHeader>
                <p>我是文本</p>
            </div>
        )
    }
}
