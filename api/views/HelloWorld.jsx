var React = require('react');

const HelloWorld = (props) => {
    console.log({ props });
    return (
        <div>
            <h1>Hello World</h1>
            <p>React server-side HTML rendering with hooks</p>
        </div>
    );
};

module.exports = HelloWorld;
