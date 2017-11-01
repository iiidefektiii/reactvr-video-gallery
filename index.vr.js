import React from 'react';
import
{
  AppRegistry,
  Text,
  View,
} from 'react-vr';
import MainMenu from './components/scenes/MainMenu.js';
import VideoPlayer from './components/scenes/VideoPlayer.js';
import VideoButton from './components/scenes/VideoButton.js';

export default class reactvr_video_gallery extends React.Component
{
	constructor() {
    	super();
    	this.state={
    		mainMenu: true,
      	};
  	}

  	updateScene(scene) {
  		if(scene === 1) {
  			this.setState({mainMenu: true});
  			{ /* console.log("Scene 1"); */ }
  		}
  		if(scene === 2) {
   			this.setState({mainMenu: false})
   			{ /* console.log("Scene 2"); */ }
  		}
  		
  		{ /* console.log(this.state.mainMenu); */ }
      }


    render() {
    const mainMenu = this.state.mainMenu;

    return (
      <View>
            
	      {mainMenu ? (
	        <MainMenu updateScene={this.updateScene.bind(this)}/>
	      ) : (
	        <VideoPlayer updateScene={this.updateScene.bind(this)}/>
	      )}

      </View>

    );
  }
}

AppRegistry.registerComponent('reactvr_video_gallery', () => reactvr_video_gallery);
