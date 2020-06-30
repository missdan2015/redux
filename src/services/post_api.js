import { get } from 'axios';

export function getPost() {
    return get('https://jsonplaceholder.typicode.com/posts')
}
