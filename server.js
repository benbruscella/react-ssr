require("@babel/register")({
    presets: ['@babel/react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

app.get('/', function(request, response) {
    const props = { server: true };
    const element = React.createElement(Component, props)
    const html = ReactDOMServer.renderToStaticMarkup(element);
    console.log({ html });
    response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
