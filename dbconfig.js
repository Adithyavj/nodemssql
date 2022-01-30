const config = {
    server: '(localdb)\\MSSQLLocalDB',
    database: 'Products',
    options: {
        trustedConnection: false,
        enableArithAbort : true, 
        instancename :'MSSQLLocalDB'
    },
    driver: 'msnodesqlv8'
}

module.exports = config;