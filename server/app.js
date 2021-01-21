require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
let about = require('./controllers/journalcontroller');

sequelize.sync();
//sequelize.sync({force: true});

// app.use('/test', function(req, res){
//     res.send('This is a message from the test endpoint on the server!')
// })
app.use(express.json());

app.use('/journal', journal);
app.use('/user', user);
app.use('/journal', about);

// run this command by typing npm run dev in terminal

/*************************
     PROTECTED ROUTE
**************************/
// app.use(require('./middleware/validate-session'));

app.listen(3000, function(){
    console.log('App is listening on port 3000');
});