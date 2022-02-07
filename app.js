const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('./Component.jsx');

app.get('/', function (request, response) {
  const props = { server: true };
  const element = React.createElement(Component, props)
  const html = ReactDOMServer.renderToStaticMarkup(element);
  console.log({ html });
  response.send(html);
});

module.exports = app;
