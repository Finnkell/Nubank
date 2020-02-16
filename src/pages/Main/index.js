import React from 'react';
import Header from '../../components/Header/index';
import Tabs from '../../components/Tabs/index';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}