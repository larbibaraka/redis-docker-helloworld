const express = require('express');
const redis   = require('redis');


const app = new express();
const host =  {
    host : 'redis-server',
    port : 6379
}
const client = redis.createClient(host);
client.set('visits', 0);
app.get('/' , (req, res)=>{
    client.get('visits', (err, visits) =>{
        res.send('Number of visits is : '+visits);
        client.set('visits', parseInt(visits) + 1);
    })
})

app.listen(4001 , ()=>{
    console.log('server is working on port 4001')
})
