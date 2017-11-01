import React from 'react';
import
{
  View,
  Image,
  VideoControl
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button';
import SceneHelper from './helpers/SceneHelper';

class VideoButton extends React.Component {
  constructor() {
    super()
      this.state = {
        buttonIsClicked: false,
      }; 
  }

  CurrentScene(videoPath, scene) {
  	SceneHelper.currentVideo = videoPath;
    this.props.updateScene(scene);
  }

  render() {
  	const {buttonIsClicked} = this.state;
  	return (

      <View>

      	<View>
          <GazeButton onClick={() => this.CurrentScene(this.props.assetPath, this.props.sceneID)} duration={2000} updateScene={this.props.updateScene} sceneID={this.props.sceneID}>
          {time => (
            	<Image style={{ width:4, height:1.5 }} source={{ uri:'../static_assets/buttons/gaze-square.jpg' }} />
          	)}
          	</GazeButton>
      	</View>

      </View>
    );
  }
};

module.exports = VideoButton;