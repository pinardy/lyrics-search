import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../Layouts/Spinner'
import Track from './Track'


class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // destructuring, so no need to value. in front of everything
          const { track_list, heading } = value; 

          // Loading of tracks
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4"> {heading} </h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track}/>
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks
