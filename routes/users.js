var express = require('express');
var router = express.Router();
var {con, exceptionHandler} =require('./baseUtil');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getUser',function(req,res,next){

  con.query("SELECT * FROM users",function(err,result){
    
    console.log(err);
    console.log(result);

    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }

  });

});


router.get('/deleteUser/:id',function(req,res,next){

  console.log(req);

   var input =req.params.id;

  con.query("DELETE FROM users WHERE id=?",[input],function(err,result){

    if(err){
      res.send(err)
    }
    else{
      res.send(result)
    }

  });

});



router.post("/insertUser",function(req,res,next){

  var sql = "INSERT INTO users(name,email)VALUES(?,?)";
  
  var userdata=req.body;

    con.query(sql,[userdata.name,userdata.email],function(err,result){
  
      if(err){
        res.send(err)
      }
      else{
        res.send(result)
      }
  
    });
  
  });


  router.post("/updateUser",function(req,res,next){

    var sql = "UPDATE users SET name = ?, email = ? WHERE id =?";

    var userdata=req.body;
  
      con.query(sql,[userdata.name,userdata.email,userdata.id],function(err,result){
    
        if(err){
          res.send(err)
        }
        else{
          res.send(result)
        }
    
      });
    
    });
  


module.exports = router;
