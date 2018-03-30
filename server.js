const newrelic = require('newrelic');
const express = require('express')
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
//
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

// see: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
}

app.get('/rooms/:roomid', function(req, res){
  let components = renderComponents(services, {itemid: req.params.id});
  res.end(Layout(
    'Vandalay Inc',
    App(...components),
    Scripts(Object.keys(services))
  ));
});

app.get('/api/rooms/:roomid/description', (req,res) => {
  // console.log("DESCRIPTION API CALL")
  res.redirect(`http://loads-627649313.us-west-1.elb.amazonaws.com/api/rooms/${req.params.roomid}/description`);
});

app.get('/api/neighborhood/:roomid', (req, res) => {
  // console.log("NEIGHBORHOOD API CALL")
  res.redirect(`http://sdc-lb-1299428521.us-west-1.elb.amazonaws.com/api/neighborhood/${req.params.roomid}`);
});

app.get('/api/rooms/:roomid/bookings', (req, res) => {
  // console.log("BOOKINGS API CALL")
  res.redirect(`http://hackbnblb-691788977.us-west-1.elb.amazonaws.com/api/rooms/${req.params.roomid}/bookings`)
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
