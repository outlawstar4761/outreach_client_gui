import React, { Component } from 'react'; // import from react

import { render, Window, App } from 'proton-native'; // import the proton-native components
import TorrentContainer from './components/torrentContainer';

class TransmissionClient extends Component {
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Window title="Proton Native Rocks!" size={{w: 300, h: 300}} menuBar={false}>
            {/* all your other components go here*/
              <TorrentContainer />
            }

        </Window>
      </App>
    );
  }
}

render(<TransmissionClient />); // and finally render your main component
