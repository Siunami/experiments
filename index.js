const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/logbook')

if (process.env.mongoURI){
  mongoose.connect(process.env.mongoURI);
} else {
  const keys = require('./keys');
  mongoose.connect(keys.mongoURI);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const LogBook = mongoose.model('logbook')

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
  console.log("got here")
  res.json({"text":"Got data"});
});

app.post('/api/first/new',(req,res) => {
  console.log(req.body);
  // console.log(res);
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  console.log(ip);
  new LogBook({
    name:req.body.name,
    comment:req.body.comment
  }).save()
  res.send("hi");
})

app.get('/api/first', (req,res) => {
  LogBook.find({},function(err, posts){
    if (err){
      res.send([])
    }
    console.log(posts);
    res.json(posts)
  })

})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);