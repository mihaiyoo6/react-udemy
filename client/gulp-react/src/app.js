var React = require('react');
var ReactDOM = require('react-dom');

var ShoutBack = React.createFactory(require('../components/ShoutBack.jsx'));

ReactDOM.render(ShoutBack(), document.getElementById('app'));