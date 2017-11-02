import React from 'react';
import { Easing } from 'react-native';
import
{
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated,
} from 'react-vr';
import VideoButton from './elements/VideoButton.js';
import SceneModel from './elements/SceneModel';


class MainMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      slideValue: new Animated.Value(0.8),
      screen1Scale: new Animated.Value(1),
      screen2Scale: new Animated.Value(1),
      screen3Scale: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.slideValue,
      {
        toValue: 0.55,
        duration: 1000,
        easing: Easing.ease
      }
    ).start();                  
  }

  cursorEnter(buttonID) {
    switch(buttonID)
    {
      case 1:
      Animated.timing(
        this.state.screen1Scale,
        {
          toValue: 1.1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
      case 2:
      Animated.timing(
        this.state.screen2Scale,
        {
          toValue: 1.1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
      case 3:
      Animated.timing(
        this.state.screen3Scale,
        {
          toValue: 1.1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
    }
  }

  cursorExit(buttonID) {
    switch(buttonID)
    {
      case 1:
      Animated.timing(
        this.state.screen1Scale,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
      case 2:
      Animated.timing(
        this.state.screen2Scale,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
      case 3:
      Animated.timing(
        this.state.screen3Scale,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.ease
        }
      ).start();
      break;
    }
  }

  render() {
    return (
      <View>

        <Pano source={asset('360_images/main-menu-village.jpg')}/>

        <Animated.Text style={{ textAlignVertical: 'center', color: 'black', opacity: 1, transform : [{translate : [-0.45, 0, -2]}, { scale: 1}, {translateY: this.state.slideValue}] }}>
          ReactVR Video Gallery
        </Animated.Text>
            
        { /* Hotspots */}

        <Animated.View style={{ opacity: 0, transform : [{translate : [-3.2, 0.525, -1.2]}, {rotateY : 60}, { scaleX : this.state.screen1Scale }, { scaleY : this.state.screen1Scale } ] }} >
            <VideoButton cursorEnter={this.cursorEnter.bind(this)} cursorExit={this.cursorExit.bind(this)} updateScene={this.props.updateScene} assetName={"video1"} assetPath={'360_videos/puppies.mp4'} sceneID={this.props.sceneID} buttonID={1} />
        </Animated.View>

        <Animated.View style={{ opacity: 0, transform : [{translate : [-1.14, 1.4, -2.3]}, {rotateY : 0}, { scaleX : this.state.screen2Scale }, { scaleY : this.state.screen2Scale }  ] }} >
            <VideoButton cursorEnter={this.cursorEnter.bind(this)} cursorExit={this.cursorExit.bind(this)} updateScene={this.props.updateScene} assetName={"video2"} assetPath={'360_videos/kittens.mp4'} sceneID={this.props.sceneID} buttonID={2} />
        </Animated.View>

        <Animated.View style={{ opacity: 0, transform : [{translate : [0.8, 2.35, -1.1]}, {rotateY : -60}, { scaleX : this.state.screen3Scale }, { scaleY : this.state.screen3Scale }  ] }} >
            <VideoButton cursorEnter={this.cursorEnter.bind(this)} cursorExit={this.cursorExit.bind(this)} updateScene={this.props.updateScene} assetName={"video3"} assetPath={'360_videos/monkeys.mp4'} sceneID={this.props.sceneID} buttonID={3} />
        </Animated.View>

        { /* Thumbnail Screens */}

        <Animated.View style={{ opacity: 1, transform : [{rotateY : 240}, {translate : [0, -280, 0]}, { scaleX : this.state.screen1Scale }, { scaleY : this.state.screen1Scale } ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/puppies_thumb.jpg')} />
        </Animated.View>

        <Animated.View style={{ opacity: 1, transform : [{rotateY : 180}, {translate : [0, -280, 0]}, { scaleX : this.state.screen2Scale }, { scaleY : this.state.screen2Scale }  ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/kittens_thumb.jpg')} />
        </Animated.View>

        <Animated.View style={{ opacity: 1, transform : [{rotateY : 120}, {translate : [0, -280, 0]}, { scaleX : this.state.screen3Scale }, { scaleY : this.state.screen3Scale }  ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/monkeys_thumb.jpg')} />
        </Animated.View>

        { /* Text Info Screens */}

        <View style={{ opacity: 1, transform : [{rotateY : 240}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-description.obj')} texture={asset('thumbnails/puppies_description.png')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 180}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-description.obj')} texture={asset('thumbnails/kittens_description.png')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 120}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-description.obj')} texture={asset('thumbnails/monkeys_description.png')} />
        </View>

        { /* Screen Shadow */}

        <View style={{ opacity: 1, transform : [{rotateY : 240}, {translate : [0, -170, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-shadow.obj')} texture={asset('thumbnails/puppies_description.png')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 180}, {translate : [0, -170, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-shadow.obj')} texture={asset('thumbnails/kittens_description.png')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 120}, {translate : [0, -170, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-shadow.obj')} texture={asset('thumbnails/monkeys_description.png')} />
        </View>

        </View>
    	);
  	}
};

module.exports = MainMenu;

{ /*

    Animated.timing(
      this.state.selectedAsset,
      {
        toValue: 0.8,
        duration: 500,
        easing: Easing.ease
      }
    ).start();
  }

  cursorExit(buttonID) {
    Animated.timing(
      this.state.selectedAsset,
      {
        toValue: 0.5,
        duration: 500,
        easing: Easing.ease
      }
    ).start();
  }



*/ }