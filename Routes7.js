

const http=require('http');

const port=6558;

const server=http.createServer((req,res)=>{
   const URL= req.url;
   if(URL==='/')
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Home Page....")
    }
    else if(URL==='/products')
        {
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("products page....")
        }
        else{
            res.writeHead(404,{"Content-Type":"text/plain"})
            res.end("No Page Found....")
        }
})


server.listen(port,()=>{
    console.log(`server started listening at ${port}`);
})