import React from 'react';
import
{
  asset,
  Pano,
  View,
  Model,
} from 'react-vr';
import VideoButton from './VideoButton.js';
import SceneModel from './elements/SceneModel';

class MainMenu extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }

  render() {
    return (
      <View>
            
        <Pano source={asset('360_images/main-menu.jpg')}/>
            
        { /* Hotspots */}

        <View style={{ opacity: 0, transform : [{translate : [-3.72, .68, -1]}, {rotateY : 60}, { scale : 0.5 } ] }} >
            <VideoButton updateScene={this.props.updateScene} assetName={"video1"} assetPath={'360_videos/puppies.webm'} sceneID={this.props.sceneID} />
        </View>

        <View style={{ opacity: 0, transform : [{translate : [-2, 2.185, -2]}, {rotateY : 0}, { scale : 0.5 } ] }} >
            <VideoButton updateScene={this.props.updateScene} assetName={"video2"} assetPath={'360_videos/kittens.webm'} sceneID={this.props.sceneID} />
        </View>

        <View style={{ opacity: 0, transform : [{translate : [-0.285, 3.68, -1]}, {rotateY : -60}, { scale : 0.5 } ] }} >
            <VideoButton updateScene={this.props.updateScene} assetName={"video3"} assetPath={'360_videos/monkeys.webm'} sceneID={this.props.sceneID} />
        </View>

        { /* Thumbnail Screens */}

        <View style={{ opacity: 1, transform : [{rotateY : 240}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/puppies_thumb.jpg')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 180}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/kittens_thumb.jpg')} />
        </View>

        <View style={{ opacity: 1, transform : [{rotateY : 120}, {translate : [0, -135, 0]}, { scale : 0.5 } ] }} >
          <SceneModel source={asset('models/screen/screen-window.obj')} texture={asset('thumbnails/monkeys_thumb.jpg')} />
        </View>

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