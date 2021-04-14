import React, { Component } from 'react';
import { Grid,Text,Button } from 'proton-native';
import autobahn from 'autobahn';
import Torrent from './torrent';
import IpContainer from './Ip';

export default class TorrentContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      socketState:"",
      socketErrorState:"",
      torrents:[],
      torServerPublicIp:"",
      seconds:0
    };
    this.session = {};
    this.connection = new autobahn.Connection({
      url:'ws://api.outlawdesigns.io:9700/ws',
      realm:'realm1'
    });
    this.connection.onopen = (session)=>{
      this.session = session;
      this.getTorrentList();
      // this.checkIp();
      setInterval(()=>{
        this.getTorrentList();
      },15000);
    }
    this.connection.onclose = (reason,details)=>{
      console.log(reason);
    }
  }
  getTorrentList(){
    this.session.call('io.outlawdesigns.outreach.getTorrents').then((torrentList)=>{
      console.log('getTorrents called...');
      this.setState({torrents:torrentList});
    });
  }
  checkIp(){
    this.session.call('io.outlawdesigns.outreach.checkIp').then((serverIp)=>{
      this.setState({torServerPublicIp:serverIp});
    },console.log);
  }
  componentDidMount(){
    this.connection.open();
  }
  render(){
    let torrents = this.state.torrents;
    let ip = this.state.torServerPublicIp
    let formattedItems = [];
    for(var i = 0; i < torrents.length; i++){
      let rowNum = i + 3;
      torrents[i].key = torrents[i].id;
      torrents[i].rowNum = rowNum;
      formattedItems.push(<Torrent {...torrents[i]}></Torrent>);
    }

    return(
      <Grid padded={false} enabled={true} visible={true}>
      <Grid row={0} column={0}>
        /*<IpContainer ip={ip}></IpContainer>*/
      </Grid>
        {formattedItems}
      </Grid>
    );
  }
}
