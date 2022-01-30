var config = require('./dbconfig'); // connection string
const sql = require('mssql/msnodesqlv8'); // mssql

async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from orders");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("select * from orders where Id = @input_parameter");
        return product.recordsets;

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder
}