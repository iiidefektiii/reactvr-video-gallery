import React from 'react';
import
{
  asset,
  VideoPano,
  View,
  MediaPlayerState,
  VideoControl
} from 'react-vr';
import SceneHelper from './helpers/SceneHelper';

class VideoPlayer extends React.Component
{
  constructor() {
  	super()
  	this.state = {
      videoSrc: [asset(SceneHelper.currentVideo)],
      playerState: new MediaPlayerState({ autoPlay: true, muted: true }),
    };
  }

  render() {
    return (
      <View>

        <VideoPano source={this.state.videoSrc} playerState={this.state.playerState}/>

        <View style={{ opacity: 1, transform : [{translate : [0, 0, -1]}, {rotateY : 0}, { scale : 0.5 } ] }}>
          <VideoControl style={{height: 0.2, width: 4}} playerState={this.state.playerState} />
        </View>

      </View>
    );
  }
};

module.exports = VideoPlayer;