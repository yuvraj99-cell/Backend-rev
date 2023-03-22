const express=require('express');
const fs= require('fs');


// file system-------------

const index=fs.readFileSync('index.html','utf-8')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const products=data.products;


//fs-end-----------------------

 const server=express();

 const morgan= require('morgan');
server.use(morgan('default'));
server.use(express.json());

 server.use(express.static('public'));
// server.use((req,res,next)=>{
// console.log(req.method, req.ip,req.hostname,new Date(),req.get('User-Agent'))    // LOgger - Middleware
// next();
// })



// const auth= ((req,res,next)=>{
//    // console.log(req.query)
// //     if(req.body.password=='123'){
// //         next();
// //     }else{
// //   res.sendStatus(401);// key loger 
// //     }
   
// next();
// })






//----------------API ----END-POINT-----------------





// Products

// API ROUTE , BASE URL , GOOGLE.COM/API/V2 VERSION


server.get('/products',(req,res)=>{
    console.log(req.params)
res.json(products);
}) 


server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
   const product= products.find(p=>p.id===id)
    res.json(product)
});

//  Create a new Product -- Create api     C U R D -- create update read delete 



server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
    })




    // upadte 
    server.put('/products/:id',(req,res)=>{
        const id = +req.params.id;
       const productIndex= products.findIndex(p=>p.id===id);
       products.splice(productIndex,1,{...req.body,id:id})

        res.status(201).json()
    });
    





// delete api 


server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1)

     res.status(201).json(product);
            })



// patch ...update
            server.patch('/products/:id',(req,res)=>{
                const id = +req.params.id;
               const productIndex= products.findIndex(p=>p.id===id);
               const product=products[productIndex];
               products.splice(productIndex,1,{...product,...req.body}
                )
        
                res.status(201).json()
            });











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