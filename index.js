const express=require('express');
const fs= require('fs');


// file system-------------

const index=fs.readFileSync('index.html','utf-8')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const products=data.products;


//fs-end-----------------------

const server=express();


//----------------API ----END-POINT-----------------







server.get('/',(req,res)=>{
res.json({type:'GET'})
})
server.post('/',(req,res)=>{
    res.json({type:'POST'})
    })


server.put('/',(req,res)=>{
        res.json({type:'PUT'})
        })


server.delete('/',(req,res)=>{
            res.json({type:'DELETE'})
            })

server.patch('/',(req,res)=>{
                res.json({type:'PATCH'})
                })











server.get('/',(req,res)=>{

    //res.sendStatus(404);

    //res.json(products)
  //res.status(201).send('<h1>hello</h1>')  

  //res.sendFile('/Users/yuvraj/Desktop/Backend-rev/index.html')
})

















server.listen(8080,()=>{
    console.log('Server started')
});













































//const data = {age:5};

// const server = http.createServer((req,res)=>{

//     const id=req.url.split('/')[2];
//     const product=products.find(p=>p.id==(+id))

//     console.log(product);
//     if(req.url.startsWith('/product')){
//         console.log(req.url,req.method)
//         res.setHeader('Content-Type','text/html');
//             let modifiedIndex=index.replace('**title**',product.title)
//             .replace('**url**',product.thumbnail)
//             .replace('**price**',product.price)
//             .replace('**rating**',product.rating);
//             res.end(modifiedIndex);
//             return;
//     }
 
//     //  '/product':
//     //         res.setHeader('Content-Type','text/html');
//     //         let modifiedIndex=index.replace('**title**',product.title)
//     //         .replace('**url**',product.thumbnail)
//     //         .replace('**price**',product.price)
//     //         .replace('**rating**',product.rating);
//     //         res.end(modifiedIndex);
//     //         break;

//     switch(req.url){
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;


//             case '/api':
//                 res.setHeader('Content-Type','application/json');
//                 res.end(JSON.stringify(data));
//                 break;
        
//         default:    
//              res.writeHead(404);
//              res.end();
//              break;
//     } 

//     console.log("server Started");
// //     res.setHeader("Dummy",'DummyValue');
// //     res.setHeader('Content-Type', 'text/html')
// //   //  res.setHeader("Content-type",'application/json');
// //     res.end(index);
// })

// server.listen(8080);