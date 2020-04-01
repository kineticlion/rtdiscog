const express = require('express');

const app = express();
const PORT = 3500;

app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

app.get('/', (req, res)=>{
    res.send("welcome to root page..");
})
