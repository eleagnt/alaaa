const app = require('express')();

app.get('/', (req, res) => res.send('Bird YT'));

module.exports = () => {
  app.listen(3000);
}