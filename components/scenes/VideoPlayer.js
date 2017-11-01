import React from 'react';
import
{
  asset,
  VideoPano,
  View,
  MediaPlayerState,
  VideoControl
} from 'react-vr';
import MyClass from './var/SceneInfo';

class VideoPlayer extends React.Component
{
    constructor()
    {
      	super()
      	this.state =
      	{
	        videoSrc: [asset(MyClass.currentVideo)],
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