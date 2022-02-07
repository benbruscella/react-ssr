var React = require('react');

module.exports = React.createClass({
    _handleClick: function() {
        alert();
    },
    render: function() {
        return (
            <div>
                <h1>Hello World to...</h1>
                <p>Server-side rendering</p>
            </div>
        );
    }
});
