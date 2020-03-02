const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const defaultRoute = require('./routes/default');
const productRoute = require('./routes/product');

mongoose.connect('mongodb+srv://tudorindan:1234@cluster0-pztcn.mongodb.net/test?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
                );
const application = express();

application.set('view engine', 'ejs');
application.set('views', 'views');

application.use(bodyParser.urlencoded({extended : true}));
application.use(express.static(__dirname + 'public'));

application.use(productRoute);
application.use(defaultRoute);

application.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle : 'Not found'
    });
});

const serverPort = 3000;
application.listen(serverPort);