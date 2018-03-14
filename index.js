let path = require('path'); 
let express = require('express'); 
let mainRouter = express.Router();
let app = express();
 
mainRouter.get('/', function (req, res) { 
	res.send('Hello World'); 
});

mainRouter.get('/about', function(req, res){ 
	res.sendFile(path.join(__dirname, 'views', 'about.html')); 
});
app.use('/', mainRouter); //added this, 'app' must use mainRouter

app.listen(process.env.PORT||3000); 
console.log("Express server running on port 3000");