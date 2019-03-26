// Error Handling and Asynchronous Functions

// Example of the impact of asynchronous and non-blocking IO has on throwing errors

try {
    setTimeout(() => {
        throw new Error("Uh oh!");
    }, 2000);
}catch (e) {
    console.log("I  caught the error: " + e.message);
}

// setTimeout function adds an event to the Node event queue.
// setTimeout instructs it to call the provided function after the specified time interval and then returns.
// As a result when you call asynchronous functions for non-blocking IO, very few throw errors.

// Callback function and Error Handling

// First Option

var fs = require('fs');
fs.open('info.txt', 'r', (err, handle) => {
    if (err) {
        console.log("Error: " + err.code + " (" + err.message +")");
    }
    // Success! Continue working here..
    console.log("Success!");
});

// Second Option

fs.open('info.txt', 'r', (err, handle) => {
    if (err){
        console.log("ERROR: " + err.code + "(" + err.message + ")");
    } 
    else {
        // Success! Continue working here...
        console.log("Sucecss");
    }
});

// Updated version of File Loading with Error Handling

var fs = require('fs');

fs.open('info.txt', 'r', (err, handle) => {
    if (err) {
        console.log("ERROR: " + err.code + " (" + err.message + ")");
        return;
    }
    var buf = new Buffer(100000);
    fs.read(handle, buf, 0, 100000, nunll, (err, length) => {
        if (err) {
            console.log("ERROR: " + err.code + "(" + err.message + ")");
            return;
        }
        console.log(buf.toString('utf8', 0, length));
        fs.close(handle, () => {/* Don't care */});
    });
});