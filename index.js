let path = require('path'); 
let express = require('express'); 
let app = express();
let mainRouter = require("./mainRoutes.js");
let todoRouter = require("./todoRoutes.js");

 
mainRouter.get('/', function (req, res) { 
	res.send('Hello World'); 
});

mainRouter.get('/about', function(req, res){ 
	res.sendFile(path.join(__dirname, 'views', 'about.html')); 
});
app.use('/', mainRouter); //added this, 'app' must use mainRouter

app.use("/", mainRouter);
app.use("/todo", todoRouter);

app.listen(3000); 
console.log("Express server running on port 3000");