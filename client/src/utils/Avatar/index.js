import React from 'react';
import styled from 'styled-components';
import * as textColor from '../../style/colors';

const Image = styled.img`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
`;

const NoImage = styled.div`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
    background-color: ${textColor};
    line-height: ${props => `${props.size}px`};
    text-align: center;
    background-color: #686F7A;
`;

type Props = {
    size?: Number,
    url: String
}

const Avatar = ({size = 40, name,  url, ...others}:Props) => (
    url === '' ? <NoImage {...others} size={size} >{name.substr(0,1).toUpperCase()}</NoImage>:
    <Image {...others} size={size} src={url} alt={name}/>
)

export default Avatar;