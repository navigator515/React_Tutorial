const fs=require('fs');

const express=require('express');//express 사용
const bodyParser=require('body-parser');
const app=express();  //서버를 만드는 것 
const port =process.env.PORT||5000;
var cors = require('cors');



// CORS 설정
app.use(cors());


app.use(bodyParser.json());//서버가 json포멧의 데이터를 읽을 수 있게 함 
app.use(bodyParser.urlencoded({extended:true}));

const data =fs.readFileSync('./database.json');
const conf=JSON.parse(data);
const mysql=require('mysql');





const connection =mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
});

connection.connect();

const multer=require('multer');
const upload= multer({dest:'./upload'})

//get: 값 받아오기 
app.get('/api/customers',(req,res)=>{
    connection.query(
        "SELECT * FROM CUSTOMER where isDeleted=0",
        (err,rows,fields) => {
            res.send(rows); 
        }
        
      );
    });

    app.use('/image',express.static('./upload'));//사용자가 upload 폴더에 접근 가능하도록  image 폴더에서 서버의 upload 폴더에 접근 가능

    app.post('/api/customers',upload.single('image'),(req,res)=> 
    {
        let sql='INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?,now(),0)';
        let image='/image/'+ req.file.filename;
        let name=req.body.name;
        let birthday=req.body.birthday;
        let gender=req.body.gender;
        let job=req.body.job;
        console.log(name);
        console.log(image);
        console.log(birthday);
        console.log(gender);
        console.log(job);
        

        let params=[image, name, birthday, gender, job];//  ?표 부분에 바인딩 되어서 들어가게 한다 
        connection.query(sql, params,
            (err,rows,fields)=>{
                res.send(rows);
            }
         );
    })

    app.delete('/api/customers/:id',(req, res)=>{
        let sql='UPDATE CUSTOMER SET isDeleted=1 WHERE id=?';
        let params =[req.params.id];
        connection.query(sql,params,
            (err,rows,field)=>{
                res.send(rows);
            }
            )
    });
    app.listen(port, ()=>console.log(`Listening on port ${port}`));
    //서버 돌아가는지