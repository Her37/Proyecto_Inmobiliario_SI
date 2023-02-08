var pool = require('./bd'); //llamdando datos BD
var md5 = require('md5');

async function geyUserByUsernameAndPassword(user, password) {

    try {
        var query = 'select * from administradores where usuario =? and password=? Limit 1'
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { geyUserByUsernameAndPassword }