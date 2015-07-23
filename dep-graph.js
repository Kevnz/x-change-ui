var depGraph = require('es-dependency-graph');
var fs = require('fs');
var file = fs.readFileSync('./app/main.js')
var result = depGraph('import foo from "bar"; export default foo;', {
    includeBindings: true
});