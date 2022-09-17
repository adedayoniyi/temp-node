const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the sysytem time in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  releaes: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOs);
