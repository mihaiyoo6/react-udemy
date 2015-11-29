var React = require('react');

var ShoutBack = React.createClass({
	render: function(){
		return(
			<div>
				<h1> My Component</h1>
				<p>This is a component made with gulp and browserify</p>
			</div>
		);
	}
});

module.exports = ShoutBack;