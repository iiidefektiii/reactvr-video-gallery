import React from 'react';
import
{
  asset,
  View,
  Image,
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

  HandleScene(videoPath, scene) {
  	SceneHelper.currentVideo = videoPath;
    this.props.updateScene(scene);
  }

  HandleCursorEnter(id) {
    this.props.cursorEnter(id);
  }

  HandleCursorExit(id) {
    this.props.cursorExit(id);
  }

  render() {
  	const {buttonIsClicked} = this.state;
  	return (

      <View>

      	<View onEnter={() => this.HandleCursorEnter(this.props.buttonID)} onExit={() => this.HandleCursorExit(this.props.buttonID)} cursorEnter={this.props.cursorEnter} cursorExit={this.props.cursorExit} >
          <GazeButton onClick={() => this.HandleScene(this.props.assetPath, this.props.sceneID)} duration={3000} updateScene={this.props.updateScene} sceneID={this.props.sceneID} buttonID={this.props.buttonID}>
          {time => (
            	<Image style={{ width:2.3, height:0.9 }} source={ asset('buttons/gaze-square.jpg') } />
          	)}
          	</GazeButton>
      	</View>

      </View>
    );
  }
};

module.exports = VideoButton;