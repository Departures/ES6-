import User, { createUrl, gravatr } from './src/user';


const codecasts = new User('codecatas', 'app@gmail.com');
const profile = createUrl(codecasts.name);
const image = gravatr(codecasts.email);

console.log(codecasts);
console.log(profile);
console.log(image);