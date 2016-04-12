var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var bodyParser = require('body-parser');
var homeDir = __dirname+'/client/'

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

app.get('/ninjas', function(req, res){
  res.sendFile(homeDir+'ninjas.html');
});

app.get('/dojos/new', function(req, res){
  res.sendFile(homeDir+'dojos.html');
});

io.on('connection', function(socket){

  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});

http.listen(3000, function() {
  console.log('cool stuff on: 3000');
});