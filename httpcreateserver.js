const http= require('http');

const server = http.createServer((req,res)=>{
if(req.url==='/'){
  //  res.write();
res.end('Welcome')
}
else if(req.url ==='/about'){
    res.end('Here is a short story')
}
 else{   res.end(`
<h1> Ooops!</h1> 
<p>We can't seem to find what you are looking for</p>
<a href="/"> back home</a>
`)}
})

server.listen(5000)