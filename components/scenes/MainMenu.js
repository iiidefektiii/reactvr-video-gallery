import React from 'react';
import
{
  asset,
  Pano,
  View,
  Model,
} from 'react-vr';
import VideoButton from './VideoButton.js';


class MainMenu extends React.Component
{
    constructor()
    {
      	super()
      	this.state =
      	{
	        
      	}; 
      	
    }

    render()
    {
      	return (
        
        <View>
            <Pano source={asset('360_images/main-menu.jpg')}/>
            <VideoButton updateScene={this.props.updateScene} scene={this.props.scene} />
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

module.exports = MainMenu;