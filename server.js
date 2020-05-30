const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const pathPublic = path.join(__dirname, 'public');

console.log("pathPublic ", pathPublic);

express()
  .use(cors())
  .use(express.static(pathPublic))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


