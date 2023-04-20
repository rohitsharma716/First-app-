const express = require('express');
const path = require('path');
const port = 7000;
//setting app 
const app = express();

//set view engine with file path
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));


 var mytask = [{
    name: "OOPS",
    time: "5 Days"
},
{
    name: "BACKEND",
    time: "15 Days"
},
{
    name:"ReactJS",
    time:"7 Days"
}
]

app.get('/', function(req,res){
   return  res.render('home',{
    title:"My Task",
    my_task: mytask
   });
});
//posting new task to the screen .
app.post('/task-done',function(req,res){
    
    mytask.push(req.body);
    return res.redirect('/');
    
})
//launche  server in the given port 
app.listen(port, function(err) {
    if(err){
        console.log('server is not working ',+ err);
    }
    console.log("server is up in the port number ", port);
});



