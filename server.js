
const express = require('express');

const PORT = process.env.PORT_BACK || 1000;

const app = express();

app.use(express.static('build'));

app.listen(PORT, () => console.log(`APP RUNNING`));

module.exports = {app}
