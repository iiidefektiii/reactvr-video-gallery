import React from 'react';
import
{
  AppRegistry,
  Text,
  View,
  VideoPano,
  asset,
} from 'react-vr';
import MainMenu from './components/scenes/MainMenu.js';
import VideoPlayer from './components/scenes/VideoPlayer.js';
import VideoButton from './components/scenes/VideoButton.js';
{ /* */ }

export default class reactvr_video_gallery extends React.Component
{
	constructor(props) {
    	super(props);
    	this.state={
        mainMenu: true,
        video: false,
      };
  	}
	
	updateScene(scene) {
    switch(scene) {
      case 1:
        this.setState({ mainMenu: true, sceneSelect: false});
        break;
      case 2:
        this.setState({ mainMenu: false, sceneSelect: true});
        break;
    	}
  	}

  toggleSrc(id)
    {
        switch(id) 
        {
        case "mainmenu":

            console.log("Playing Main Menu");
        break;
        case "video1":

            console.log("Playing Video 1");
        break;
        case "video2":

            console.log("Playing Video 2");
        break;
        case "video3":

            console.log("Playing Video 3");
        break;
        default:

        }
    }

  render() {
    const mainMenu = this.state.mainMenu;
    const video = this.state.video;
    return (
      <View>
        <VideoButton/>
        {
          mainMenu ? (
            <MainMenu updateScene={this.updateScene.bind(this)} scene={1}/>
          ) : (
            video ? (
              <VideoPlayer updateScene={this.updateScene.bind(this)} scene={2}/>
            ) : (
              <Text> null </Text>
            )
          )
        }

      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr_video_gallery', () => reactvr_video_gallery);
