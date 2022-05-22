const os= require('os')

//info about current user

const user=os.userInfo()
console.log(user);


//method returns the system uptime in seconds

console.log(os.uptime());

const currentOS= {
    name:os.type(),
    totalMem:os.totalmem(),
    release:os.release(),
    freeMem: os.freemem(),
}

console.log(currentOS);