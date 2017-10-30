import React from 'react';
import
{
  AppRegistry,
  asset,
  VideoPano,
  View,
  VrButton,
  MediaPlayerState,
  VideoControl
} from 'react-vr';

const video1 = [asset('360_videos/puppies.webm')];
const video2 = [asset('360_videos/kittens.webm')];
const video3 = [asset('360_videos/monkeys.webm')];

class VideoPlayer extends React.Component
{
    constructor()
    {
      	super()
      	this.state =
      	{
	        buttonIsClicked: false,
	        videoSrc: video1,
	        playerState: new MediaPlayerState({ autoPlay: true, muted: true }),
      	}; 
    }

    render()
    {
      	return (
        
        <View>
          <VideoPano source={this.state.videoSrc} playerState={this.state.playerState}/>
        </View>
      );
    }
  };

module.exports = VideoPlayer;