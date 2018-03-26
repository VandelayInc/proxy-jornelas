// const newrelic = require('newrelic');


const express = require('express');
const app = express();
// app.locals.newrelic = newrelic;

// const morgan = require('morgan');
// app.use(morgan('dev'));

app.use('/rooms/:roomid', express.static(`${__dirname}/public/`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/rooms/:roomid', (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Photo Carousel Redirection
app.get('/api/rooms/:roomid/carousel', (req, res) =>{
  res.redirect(`http://18.222.4.195:3001/api/rooms/${req.params.roomid}/carousel`);
});

// Description Redirection
app.get('/api/rooms/:roomid/description', (req,res) => {
  res.redirect(`http://localhost:3002/api/rooms/${req.params.roomid}/description`);
});

// Booking Redirection
app.get('/rooms/:roomid/bookings', (req,res) => {
  res.redirect(`http://localhost:3003/rooms/${req.params.roomid}/bookings`);
});

// Review Redirections
app.get('/rooms/:roomid/reviews', (req,res) => {
  res.redirect(`http://18.219.35.229/rooms/${req.params.roomid}/reviews`);
});
app.get('/rooms/:roomid/ratings', (req,res) => {
  res.redirect(`http://18.219.35.229/rooms/${req.params.roomid}/ratings`);
});

// Neighborhood Redirection
app.get('/rooms/:roomid/neighborhood', (req, res) => {
  res.redirect(`http://18.188.46.228/rooms/${req.params.roomid}/neighborhood`);
});
app.get('/api/neighborhood/:roomid', (req, res) => {
  res.redirect(`http://18.188.46.228/api/neighborhood/${req.params.roomid}`);
});

// Similar Listing Redirection
app.get('/rooms/:roomid/similarListings', (req,res) => {
  res.redirect(`http://localhost:3007/rooms/${req.params.roomid}/similarListings`);
});
app.get('/rooms/images/:imagefile', (req,res) => {
  res.redirect(`http://localhost:3007/images/${req.params.imagefile}`);
});

app.listen(3000);
console.log('proxy server launched on port 3k')
