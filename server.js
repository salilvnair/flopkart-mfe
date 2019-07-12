const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+ '/dist/flopkart-mfe'))
let port = process.env.PORT || 8080;
app.listen(port)

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/flopkart-mfe/index.html'));
})

console.log('Express listening to :'+port);
