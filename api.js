var db = require('./dboperations');
var order = require('./order');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dboperations = require('./dboperations');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

// middleware - will be called before any route gets executed..
router.use((request, response, next) => {
    // authentication, authorization, logging goes here
    console.log('Middleware');
    next();
})

// GET: all orders
router.route('/orders').get((request, response) => {

    dboperations.getOrders().then(result => {
        response.json(result[0]);
    })

})

// GET : order by Id
router.route('/order/:id').get((request, response) => {

    dboperations.getOrder(request.params.id).then(result => {
        response.json(result[0]);
    })

})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at', + port);

db.getOrders().then(result => {
    console.log(result);
})