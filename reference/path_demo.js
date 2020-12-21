const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); // this way we are using path module to get dirname.

// File extension
console.log(path.extname(__filename));