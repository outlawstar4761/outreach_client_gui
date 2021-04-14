import React, { Component } from 'react';
import { Text } from 'proton-native';

export default class IpContainer extends Component{

  render(){
    return(
      <Text>{this.props.ip}</Text>
    );
  }
}
