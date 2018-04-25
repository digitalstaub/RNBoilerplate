import React, {Component} from 'react';
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
        <Left/>
        <Body>
          <Title>{I18n.t('Settings')}</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <Text>{I18n.t('SettingsScreen', {val: 'RNBoilerplate'})}</Text>
      </Content>
    </Container>);
  }
}
