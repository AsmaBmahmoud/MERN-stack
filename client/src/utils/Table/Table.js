import React from 'react';
import styled from 'styled-components';
import { textColor } from '../../style/colors';

type Props = {
    columns: {
     [key: string] : {
         key: String,
         label?: string, // the label is optional 
         align?: "center" | "right" | "left" , // the align is optional
         width?: Number, // the width is optional 
         content?: Function
     }
    },
    data: Array<Object>
};

const columns = {
    name: {
        key:'name',
        label: 'Name',
        align: 'left'
    }
};

const T = styled.table`
width: 100%;
display: inline;
border-collapse: collapse;
`;

const Th = styled.div`
color: ${textColor};
font-size: 18px;
font-weight: 700;
text-align: ${props => props.align ? props.align : 'left'};
display: -webkit-inline-box;
margin-left: 282px;
margin-bottom: 37px;
`;

const Tr = styled.tr`
border-bottom: 2px solid ;
height: 73px;
 `;

const Td = styled.tr`
font-size: 18px;
text-align: ${props => props.align ? props.align : 'left'};
display: -webkit-inline-box;
margin-left: 282px;
 `;


const Table = ({columns, data}: Props) => {
    const headerColumns = () => 
      Object.keys(columns).map(key => (
      <Th align={columns[key].align} width={columns[key].width}>
      {columns[key].label}
      </Th>
       ));
       const content = (item, key) =>
        columns[key].content 
        ? 
        columns[key].content(item) 
        :
        item[key];
       const cell = (item , key) => <Td>{content(item, key)}</Td>;
       const rows= (item) => <Tr>{Object.keys(columns).map(key => cell(item, key))}</Tr>;
    return (
       <T>
         <thead>
             <tr>
                 {headerColumns()}
             </tr>
         </thead>
         <tbody>
             {data.map(item => rows(item))}
         </tbody>
       </T>
    );
}

export default Table;