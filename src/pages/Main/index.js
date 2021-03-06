import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />

          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 17.611,54</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferência de R$ 2000,00 recebida de Diego Schell Fernandes hoje as 06:00h</Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}