var pool = require('./bd'); //llamdando datos BD


async function getNovedades() {
    var query = 'select * from novedades'
    var rows = await pool.query(query);
    return rows;
}

async function insertarNovedades(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?'
    var rows = await pool.query(query, [id]);
    return rows;
}

//novedad por id
async function getNovedadesById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//update
async function modificarNovedadesById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }

};

module.exports = { getNovedades, insertarNovedades, deleteNovedadesById, getNovedadesById, modificarNovedadesById }