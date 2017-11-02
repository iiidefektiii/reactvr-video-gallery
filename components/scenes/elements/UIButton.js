import React from 'react';
import
{
  asset,
  View,
  Image,
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button';

class UIButton extends React.Component {
  constructor() {
    super()
      this.state = {
        buttonIsClicked: false,
      }; 
  }

  ReturnHome(scene) {
    this.props.updateScene(scene);
  }

  render() {
  	const {buttonIsClicked} = this.state;

  	return (

      <View>

        <GazeButton onClick={() => this.ReturnHome(this.props.sceneID)} duration={3000} updateScene={this.props.updateScene} sceneID={this.props.sceneID}>
        {time => (
          	<Image style={{ width: this.props.widthHeight, height: this.props.widthHeight}} source={this.props.source} />
        	)}
        </GazeButton>

      </View>
    );
  }
};

module.exports = UIButton;