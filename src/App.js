import React, { useState } from "react";
import Canvas from "./Canvas";
import "./App.css";
import config from './config';

const App = () => {

  const [animation, setAnimation] = useState(config.idle);

  const CUSTOM_CANVAS_WIDTH = 860;
  const CUSTOM_CANVAS_HEIGHT = 860;

  const spriteWidth = 640;
  const spriteHeight = 640;

  let frameX = 0;

  const staggerFrames = 5;

  const draw = (ctx, frameCount) => {
    const playerImage = new Image();
    playerImage.src = animation;
    console.log(playerImage);
    ctx.clearRect(0, 0, CUSTOM_CANVAS_WIDTH, CUSTOM_CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    if (frameCount % staggerFrames === 0) {
      if (frameX < (playerImage.naturalWidth / spriteWidth - 1)) frameX++;
      else frameX = 0;
    }
  }

  const handleChange = (event) => {
    setAnimation(config[event.target.value]);
  }

  return <>
    <select
      onChange={handleChange}
      defaultValue={animation}
      placeholder="Choose Animation:"
    >
      <option value="idle">Idle</option>
      <option value="walking">Walking</option>
      <option value="ducking">Ducking</option>
    </select>

    <Canvas draw={draw} />
  </>;
}

export default App;
