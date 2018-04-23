import React, {Component} from 'react';
import AppFooter from '../components/AppFooter'
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


export default class SettingsScreen extends Component {
  render() {
    return (<Container>
      <Header>
        <Left>
          <Button transparent={true}>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <Text>{I18n.t('SettingsScreen', {val: '123'})}</Text>
      </Content>
      <AppFooter/>
    </Container>);
  }
}
