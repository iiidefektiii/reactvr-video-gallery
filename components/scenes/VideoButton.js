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

const mainmenu = [asset('360_videos/main-menu.webm')];
const video1 = [asset('360_videos/puppies.webm')];
const video2 = [asset('360_videos/kittens.webm')];
const video3 = [asset('360_videos/monkeys.webm')];

class VideoButton extends React.Component
{
    constructor()
    {
      	super()
      	this.state =
      	{
	        buttonIsClicked: false,
	        src: mainmenu,
	        playerState: new MediaPlayerState({ autoPlay: true, muted: true }),
      	}; 
    }



    render()
    {
      	const {buttonIsClicked} = this.state;
      	
      	return (
        
        <View>

          	{ /* <VideoPano source={this.state.src} playerState={this.state.playerState}/> */}

          	<View style={{
              	opacity: 1, transform : [{translate : [-3.72, -2, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              	}}>
	            <VideoControl
	             	style={{height: 0.2, width: 4}}
	             	playerState={this.state.playerState} />
          	</View>
       
          	{ /* Video 1 GazeButton */}

          	<View style={{
              	opacity: 1, transform : [{translate : [-3.72, -2, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              	}}>
              <GazeButton onClick={() => this.toggleSrc("video1")} duration={2000}>
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
              	<GazeButton onClick={() => this.toggleSrc("video2")} duration={2000}>
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
              	<GazeButton onClick={() => this.toggleSrc("video3")} duration={2000}>
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