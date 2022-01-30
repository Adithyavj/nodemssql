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

module.exports = {
    getOrders : getOrders
}