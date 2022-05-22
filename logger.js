var url='http://mylogger,io/log';

function log(message){
    console.log(message);
}

function file(number){
    var temp=1;
    for (var i=1; i<=number; i++)
    {
        temp=i*temp;
    }
console.log(temp);
}
module.exports.log = log;
module.exports.Realfile= file;