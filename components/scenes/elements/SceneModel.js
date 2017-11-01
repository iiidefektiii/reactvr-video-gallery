import React from 'react';
import
{
  asset,
  View,
  Model
} from 'react-vr';


class SceneModel extends React.Component {
  constructor() {
    super()
      this.state = {
        
      }; 
  }

  render() {
  	return ( 
      <Model style={{ opacity: 0.999 }} source={{ obj: this.props.source }} texture={this.props.texture} />
    );
  }
};

module.exports = SceneModel;