import React from "react";
import styled from 'styled-components';
import Table from '../utils/Table/Table';
import Avatar from '../utils/Avatar/index';
import AccountIcon from '../utils/svg-icons/account-detail';

const Main = styled.div`
height: 100%;
`;

const NameCol = styled.div`
display : flex;
align-itmes: center;
`;

const Name = styled.span`
margin-left: 8px;
`;

const ABtn = styled.button`

`;

const columns = {
    name: {
        key: 'name',
        label: 'Name',
        content: (item) => (
        <NameCol>
            <Avatar url={item.url} name={item.name} />
            <Name>
            {item.name}
            </Name>
        </NameCol>
        )
    },
    email: {
        key: 'email',
        label: 'Email',
        width: '100%'
    },
    numberOfOrders: {
        key: 'numberOfOrders',
        label: 'NumberOfOrders',
    },
    joinData: {
        key: 'joinData',
        label: 'JoinData',
    },
    accountDetailLink: {
        key: 'accountDetailLink',
        content: (item) => (
            <AccountIcon />
        )
    }
}

const users = [
 { id : 1, name: 'asma' , url: 'https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 2, name: 'asma' , url: 'https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 3, name: 'asma' , url: 'https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 3, name: 'asma' , url: 'https://i.unimedias.fr/2015/01/19/Kristina-9-ans-la-plus-belle-petite-fille-du-monde.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=227&w=405', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 3, name: 'asma' , url: '', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 3, name: 'asma' , url: '', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'},
 { id : 3, name: 'asma' , url: '', email: 'bbbb@gmail.com', numberOfOrders: 455, joinData: '12/45/4555'}
];

const MoviesList = () => {
    return (
    <Main>
        <Table columns={columns} data={users} />
    </Main>
    );
}

export default MoviesList;
