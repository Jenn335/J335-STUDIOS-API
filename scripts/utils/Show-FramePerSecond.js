let lastTime = 0;
let frameCount = 0;

function updateFPS(currentTime) {
  frameCount++;
  if (currentTime - lastTime >= 1000) {
    const fps = frameCount;
    frameCount = 0;
    lastTime = currentTime;
    
    console.log(`FPS: ${fps}`);
  }

  requestAnimationFrame(updateFPS);
}

requestAnimationFrame(updateFPS);
  
