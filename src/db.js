const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kungfu',
    password: '811etnies',
    port: 5432,
})

module.exports = pool