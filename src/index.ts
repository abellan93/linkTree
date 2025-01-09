// index.ts
import server from './server.js';
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log('Server started on port ' + port);
});