import React from 'react';
import
{
  AppRegistry,
  Text,
  View,
} from 'react-vr';
import MainMenu from './components/scenes/MainMenu.js';
import VideoPlayer from './components/scenes/VideoPlayer.js';

export default class reactvr_video_gallery extends React.Component
{
	constructor() {
    	super();
    	this.state={
    		mainMenu: true,
      };
  	}

  	updateScene(sceneID) {
  		if(sceneID === 1) {
  			this.setState({mainMenu: true});
  		}
  		if(sceneID === 2) {
   			this.setState({mainMenu: false})
  		}
    }

    render() {
    const mainMenu = this.state.mainMenu;

    return (
      <View>
            
	      {mainMenu ? (
	        <MainMenu updateScene={this.updateScene.bind(this)} sceneID={2}/>
	      ) : (
	        <VideoPlayer updateScene={this.updateScene.bind(this)} sceneID={1}/>
	      )}

      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr_video_gallery', () => reactvr_video_gallery);
