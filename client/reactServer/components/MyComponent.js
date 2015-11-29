var React = require('react');

var MyComponent = React.createClass({
	render: function(){
		return(
			<div>
				<h1> My Component</h1>
				<p>This is a component rendered on server</p>
			</div>
		);
	}
});

module.exports.MyComponent = MyComponent;