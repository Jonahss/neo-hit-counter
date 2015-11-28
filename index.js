import {default as server} from './lib/server';

let port = process.argv[2] || 8080;

server(port);

export {server};
