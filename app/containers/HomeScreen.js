import React, {Component} from 'react';
import AppFooter from '../components/AppFooter'
import Home from '../components/Home'
import I18n from '../i18n';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (<Container>
      <Header>
        <Left>
          <Button transparent={true}>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>{I18n.t('Home')}</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
          <Home/>
      </Content>
      <AppFooter/>
    </Container>);
  }
}
