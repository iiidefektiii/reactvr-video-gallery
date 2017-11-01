class MyClass {
  constructor() {
    this.mainMenu = true;
    this.video =  false;
    this.currentVideo = '360_videos/kittens.webm';
  }

  updateScene(scene) {
    
    switch(scene) {
      case 1:
        mainMenu = true;
        sceneSelect = false;
        break;
      case 2:
        mainMenu = false;
        sceneSelect = true;
        break;
    }
    console.log("Main Menu: " + mainMenu + "Video Screen: " + sceneSelect);
  }
  
  toggleSrc(id, videoPath)
    {
        switch(id) 
        {
        case "mainmenu":
            this.updateScene(1);
            console.log("Playing Main Menu");
        break;
        case "video1":
            this.updateScene(2);
            console.log("Playing Video 1");
        break;
        case "video2":
            this.updateScene(2);
            console.log("Playing Video 2");
        break;
        case "video3":
            this.updateScene(2);
            console.log("Playing Video 3");
        break;
        default:
          this.updateScene(1);
            console.log("Playing Main Menu");
        }
        this.currentVideo = videoPath;
        console.log(this.currentVideo);
      }
}

export default (new MyClass);