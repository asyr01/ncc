const os = require('os');

// Platform 
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Total memory
console.log(os.totalmem);

// Free memory
console.log(`You have ${os.freemem()} / ${os.totalmem()} free memory. `);

//Home dir
console.log(os.homedir());

//Up time
console.log(os.uptime());