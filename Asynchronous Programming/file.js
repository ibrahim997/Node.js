/* Testing ground for Asynchronous Programming*/

// The Node.js Way of Doings Things

/* setTimeout function takes a function to call and a timeout after 2000ms (2 sec)*/
setTimeout(() => {
    console.log("I've done my work!");
}, 2000);

console.log("I'm waiting for all my work to finish.");

var fs = require('fs');

// var file;
// var buf = new Buffer(100000);

// The asynchronously example and errors

/*fs.open('info.txt', 'r', (err, handle) => {
    file = handle;
});
*/
//fs.read needs the file handle returned by fs.open. But this is broken.

/*fs.read(file, buf, 0, 100000, null, (err, length) => {
    console.log(buf.toString());
    fs.close(file, () => {/* dont care}); */
// });

// Node.js Way of Doing Things Below (Fix to the preceeding example)
fs.open('info.txt', 'r', (err, handle) => {
    var bug = new Buffer(100000);
    fs.read(handle, buf, 0, 100000, null, (err, length) => {
        console.log(buf.toString('utf8', 0, length));
        fs.close(handle, () => { /* Don't care */});
    });
});

// Error Handling and Asynchronous Functions
