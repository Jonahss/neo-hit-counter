import http from 'http';
import thenLevelup from 'level-promisify';
import level from 'level';

let db = thenLevelup(level('./database'));


async function handleRequest (request, response) {
  let referrer = request.headers.referer || 'no referrer';

  console.log(`got request with referrer ${referrer}`);

  let hits;
  try {
    hits = await db.get(referrer);
  } catch (e) {
    hits = 0;
  }

  hits++;

  db.put(referrer, hits);

  if (referrer === 'no referrer') {
    hits = hits * -1;
  }

  response.end(`${hits}`);
}

async function server(port) {

  let serv = http.createServer(handleRequest);
  serv.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}



export default server;
