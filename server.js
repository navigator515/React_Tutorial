const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port =process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
        'id':'1',
        'image':'http://placeimg.com/64/64/1',
        'name':'홍길동',
        'birthday':'950515',
        'gender':'male',
        'job':'학생'
      },
      {
        'id':'2',
        'image':'http://placeimg.com/64/64/2',
        'name':'권한길',
        'birthday':'950515',
        'gender':'male',
        'job':'학생'
      },
      {
          'id':'3',
        'image':'http://placeimg.com/64/64/3',
        'name':'박세준',
        'birthday':'950515',
        'gender':'male',
        'job':'학생'
      }
      ])
    });

    app.listen(port, ()=>console.log(`Listening on port ${port}`));