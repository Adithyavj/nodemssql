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

async function addOrder(order) {
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            //.input('Id', sql.Int, order.Id)
            .input('Title', sql.NVarChar, order.Title)
            .input('Quantity', sql.Float, order.Quantity)
            .input('Message', sql.NVarChar, order.Message)
            .input('City', sql.NVarChar, order.City)
            .execute('InsertOrders');
        return insertProduct.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder,
    addOrder: addOrder
}