const express = require('express');
const app = express();
const port = 8000;
const expressLayout=require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayout);
//Extract style and scripts from subpages into the layouts
app.set('layout ectractStyles',true);
app.set('layout ectractScripts',true);
// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});