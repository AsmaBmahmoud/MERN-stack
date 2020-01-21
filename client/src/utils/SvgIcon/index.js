import React, { Node } from 'react';
import styled from 'styled-components';


const Svg = styled.svg`
width: ${props => `${props.size}px`};
height: ${props => `${props.size}px`};
fill: ${props => props.color};
`;

type Props = {
    children: Node, 
    color?: String,
    size?: Number,
    viewBox?: string
}

const SvgIcon = ({ children, color= '#000000', size = 24, viewBox= '0 0 24 24' }: Props) => (
    <Svg color={color} size={size} viewBox={viewBox}>
        {children}
    </Svg>
);
export default SvgIcon;