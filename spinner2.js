const animationFrames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ' ] 
let rotations = 2;
let timer = 0;
while (rotations > 0) {
  for (const frame of animationFrames) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, timer);
  timer += 200
  }
  rotations--
};
setTimeout(() => {
  process.stdout.write('\n')
}, timer);