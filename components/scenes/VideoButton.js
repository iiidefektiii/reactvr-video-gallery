import React from 'react';
import
{
  AppRegistry,
  asset,
  VideoPano,
  Pano,
  Text,
  View,
  VrButton,
  Image,
  Model,
  MediaPlayerState,
  VideoControl
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button';
import MyClass from './var/SceneInfo';

class VideoButton extends React.Component {
  constructor() {
    super()
      this.state = {
        buttonIsClicked: false,
        scene: 1,
        playerState: new MediaPlayerState({ autoPlay: true, muted: true }),
      }; 
  }

  CurrentScene(myScene, video, id) {
    MyClass.toggleSrc(myScene, video);
    this.props.updateScene(id);
    
    { /* console.log(id); */ } 
  }

    render()
    {
      	const {buttonIsClicked} = this.state;
      	const scene = this.props.scene;
      	return (
        
        <View>


          	<View style={{
              	opacity: 1, transform : [{translate : [-3.72, -2, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              	}}>
	            <VideoControl
	             	style={{height: 0.2, width: 4}}
	             	playerState={this.state.playerState} />
          	</View>
       
          	{ /* Video 1 GazeButton */}

          	<View style={{
              	opacity: 1, transform : [{translate : [-3.72, 3.68, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              	}}>
              <GazeButton  onClick={() => this.CurrentScene("video1", '360_videos/puppies.webm', 2)} duration={2000} updateScene={this.props.updateScene} scene={this.props.scene}>
              {time => (
                	<Image style={{width:4, height:1.5}}
               	 		source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
              	  	</Image>
              	)}
              	</GazeButton>   
          	</View>

          	{ /* Video 2 GazeButton */}

          	<View 
          		style={{
              		opacity: 1, transform : [{translate : [-2, 2.185, -2]}, {rotateY : 0}, { scale : 0.5 } ] 
              	}}>
              	<GazeButton updateScene={this.props.updateScene} scene={this.props.scene} onClick={() => this.CurrentScene("video2", '360_videos/kittens.webm', 2)} duration={2000}>
              	{time => (
                	<Image style={{width:4, height:1.5}}
                		source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
                	</Image>
              	)}
              	</GazeButton>   
          	</View>

          	{ /* Video 3 GazeButton */}

          	<View 
          		style={{
              		opacity: 1, transform : [{translate : [-0.285, 3.68, -1]}, {rotateY : -60}, { scale : 0.5 } ] 
              	}}>
              	<GazeButton updateScene={this.props.updateScene} scene={this.props.scene} onClick={() => this.CurrentScene("video3", '360_videos/monkeys.webm', 2)} duration={2000}>
              	{time => (
                	<Image style={{width:4, height:1.5}}
                		source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
                	</Image>
              	)}
              	</GazeButton>   
          	</View>

        </View>
    	);
  	}
};

module.exports = VideoButton;