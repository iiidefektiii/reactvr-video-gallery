import React from 'react';
import
{
  asset,
  VideoPano,
  View,
  Image,
  MediaPlayerState,
  VideoControl
} from 'react-vr';
import UIButton from './elements/UIButton';
import SceneHelper from './elements/helpers/SceneHelper';

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

        <VideoPano source={this.state.videoSrc} playerState={this.state.playerState} />

        <View>
          <VideoControl style={{ transform : [{rotateX: -45}, {rotateY: 0}, {rotateZ: 0}, {scale: 1}, {translate : [-2, 1, -3]} ], height: 0.2, width: 4}} playerState={this.state.playerState} />
        </View>

        <View style={{ opacity: 0, transform : [{rotateX: -45}, {rotateY: 0}, {rotateZ: 0}, {translate : [-0.61, 0.475, -3]} ] }} >
          <UIButton updateScene={this.props.updateScene} sceneID={1} widthHeight={1} source={asset('buttons/gaze-square.jpg')} />
        </View>

        <Image style={{ transform : [{rotateX: -45}, {translate : [-0.7, 1.25, -2.8]}, {scale: 1} ], width: 1.15, height :1.15 }} source={ asset('buttons/home-icon.png') } />

      </View>
    );
  }
};

module.exports = VideoPlayer;

{/*
        <VideoControl style={{ transform : [{rotateX: -90}, {rotateY: 0}, {rotateZ: 0}, {translate : [-2, 2.4, -3]} ], height: 0.2, width: 4}} playerState={this.state.playerState} />
*/}