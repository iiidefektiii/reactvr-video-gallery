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

export default class reactvr_video_gallery extends React.Component
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
      this.toggleSrc = this.toggleSrc.bind(this);
    }

    toggleSrc(id) 
    {
      switch(id) 
      {
      case "mainmenu":
        this.setState({src: mainmenu});
          console.log("Playing Main Menu");
          break;
      case "video1":
          this.setState({src: video1});
          console.log("Playing Video 1");
          break;
      case "video2":
          this.setState({src: video2});
          console.log("Playing Video 2");
          break;
      case "video3":
          this.setState({src: video3});
          console.log("Playing Video 3");
          break;
      default:
          this.setState({src: mainmenu});
    }
    }

    render()
    {
      const {buttonIsClicked} = this.state;
      return (
        <View>
          <VideoPano source={this.state.src} playerState={this.state.playerState}/>

          <View style={{
              opacity: 1, transform : [{translate : [-3.72, 0.679, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              }}>
            <VideoControl
             style={{height: 0.2, width: 4}}
             playerState={this.state.playerState} />
        </View>
       
          { /* Video 1 GazeButton */}

          <View style={{
              opacity: 0, transform : [{translate : [-3.72, 0.679, -1]}, {rotateY : 60}, { scale : 0.5 } ] 
              }}>
              <GazeButton onClick={() => this.toggleSrc("video1")} duration={2000}>
              {time => (
                <Image style={{width:4, height:1.5}}
                source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
                </Image>
              )}
              </GazeButton>   
          </View>
        

          { /* Video 1 Screen */}

          <Model 
            style={{
              opacity: 1, transform : [{rotateY : 240}, {translate : [0, -140, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-window.obj'),
            }} 

            texture={asset('thumbnails/puppies_thumb.jpg')} />

          { /* Video 1 Description */}

          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 240}, {translate : [0, -130, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-description.obj'),
            }} 

            texture={asset('thumbnails/puppies_description.png')} />

          { /* Video 1 Shadow */}

          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 240}, {translate : [0, -170, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-shadow.obj'),
            }} 

            texture={asset('thumbnails/puppies_description.png')} />

          { /* Video 2 GazeButton */}

          <View style={{
              opacity: 0, transform : [{translate : [-2, 2.185, -2]}, {rotateY : 0}, { scale : 0.5 } ] 
              }}>
              <GazeButton onClick={() => this.toggleSrc("video2")} duration={2000}>
              {time => (
                <Image style={{width:4, height:1.5}}
                source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
                </Image>
              )}
              </GazeButton>   
          </View>

          { /* Video 2 Screen */}

          <Model 
            style={{
              opacity: 1, transform : [{rotateY : 180}, {translate : [0, -140, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-window.obj'),
            }} 

            texture={asset('thumbnails/kittens_thumb.jpg')} />

          { /* Video 2 Description */}

          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 180}, {translate : [0, -130, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-description.obj'),
            }} 

            texture={asset('thumbnails/kittens_description.png')} />

          { /* Video 2 Shadow */}
          
          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 180}, {translate : [0, -170, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-shadow.obj'),
            }} 

            texture={asset('thumbnails/puppies_description.png')} />

          { /* Video 3 GazeButton */}

          <View style={{
              opacity: 0, transform : [{translate : [-0.285, 3.68, -1]}, {rotateY : -60}, { scale : 0.5 } ] 
              }}>
              <GazeButton onClick={() => this.toggleSrc("video3")} duration={2000}>
              {time => (
                <Image style={{width:4, height:1.5}}
                source={{uri:'../static_assets/buttons/gaze-square.jpg'}}>
                </Image>

              )}
              </GazeButton>   
          </View>

          { /* Video 3 Screen */}

          <Model 
            style={{
              transform : [{rotateY : 120}, {translate : [0, -140, 0]}, { scale : 0.5 } ]
            }}

            source={{
              obj: asset('models/screen/screen-window.obj'),
            }} 
              
            texture={asset('thumbnails/monkeys_thumb.jpg')} />

          { /* Video 3 Description */}

          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 120}, {translate : [0, -130, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-description.obj'),
            }} 

            texture={asset('thumbnails/monkeys_description.png')} />

          { /* Video 3 Shadow */}
          
          <Model 
            style={{
              opacity: 0.999, transform : [{rotateY : 120}, {translate : [0, -170, 0]}, { scale : 0.5 } ] 
            }}

            source={{
              obj: asset('models/screen/screen-shadow.obj'),
            }} 

            texture={asset('thumbnails/monkeys_description.png')} />

        </View>
    );
  }
};

AppRegistry.registerComponent('reactvr_video_gallery', () => reactvr_video_gallery);
