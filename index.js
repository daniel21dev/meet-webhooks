const express = require('express')
const app = express()
const cors = require('cors')

app.use( express.json())
app.use( cors() )

app.get('/',async(req,res)=>{
    res.json({msg: 'hola :p'})
})

app.post('/notifications',async(req,res)=>{
    console.log({headers: req.headers})
    console.log({body: req.body });
    res.json({msg: 'all ok'})
})

const port = 8082
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})