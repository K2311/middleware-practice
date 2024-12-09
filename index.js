const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Custom middleware
function logger(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Next middleware
}
// Register middleware globally
app.use(logger);

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});
app.listen(3000,()=>console.log('Server running on port 3000'));