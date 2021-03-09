let rotations = 2;
let timer = 100;

while (rotations > 0) {
setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);
timer += 200;
setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer);
timer += 200;
setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer);
timer += 200
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, timer);
timer += 200
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, timer);
timer += 200
rotations--
}
setTimeout(() => {
  process.stdout.write('\n')
}, timer);
// ... fill in the rest yourself ...