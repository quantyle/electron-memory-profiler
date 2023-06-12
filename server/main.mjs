import { WebSocketServer } from 'ws';
import psList from 'ps-list';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {

  async function sendProcessInfo() {
    try {
      const processes = await psList();
      ws.send(JSON.stringify(processes));
    } catch (error) {
      console.log(error);
    }
  }

  setInterval(sendProcessInfo, 500);
});

