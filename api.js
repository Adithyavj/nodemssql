var db = require('./dboperations');
var order = require('./order');

db.getOrders().then(result => {
    console.log(result);
})