import React from 'react';
import { Container, Content } from './styles';
import Table from '../../components/Table';
import { Sidebar } from '../../components/Sidebar';
import { ListSelector } from '../../components/ListSelector';

export const Home = () => {
    return (
        <Container>
            <Sidebar />
            <Content>
                <ListSelector />
                <Table />
            </Content>
        </Container>)
}