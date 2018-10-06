import slug from 'slug';
import md5 from 'md5';
import { url } from './config';

export default function user(name, email) {
  return {
    name,
    email,
  };
}

export function createUrl(name) {
  return `${url}/user/${slug(name)}`;
}

export function gravatr(email) {
  return `https://www.gravatar.com/avatar/${md5(email)}`;
}
