require("@babel/register")({
    presets: ['@babel/react']
});
const app = require('./app');

const PORT = 3000;

app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
