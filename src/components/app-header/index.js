import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function LRAppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>Left</HeaderLeft>
                <HeaderRight>Right</HeaderRight>
                {/* <NavLink to='/'>发现音乐</NavLink>
                <NavLink to='/mine'>我的音乐</NavLink>
                <NavLink to='/friend'>我的朋友</NavLink>  */}
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
