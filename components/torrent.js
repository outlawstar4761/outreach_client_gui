import React, { Component } from 'react';
import { Grid, Text, ProgressBar,Button } from 'proton-native';

/*<Grid row={0} column={2}><Button>Stop</Button></Grid>*/
/*<Grid row={0} column={3}><Button>Remove</Button></Grid>*/
/*<Grid row={0} column={4}><Button>Rad</Button></Grid>*/
/*<Grid row={0} column={1}><Button>Start</Button></Grid>*/

export default class Torrent extends Component{
  render(){
    return(
      <Grid row={this.props.rowNum} column={0}>
        <Grid row={0} column={0}>
          <Text>{this.props.name}</Text>
        </Grid>
        <Grid row={1} column={0}>
          <ProgressBar value={parseInt(this.props.done)} />
        </Grid>
      </Grid>
    );
  }
}
