const mysql = require("promise-mysql")



const conexion = mysql.createConnection({
    host:"localhost",
    database:"mgdt",
    user:"root",
    password:"123456"
})


const getconexion = async () => await conexion;

module.exports = {
    getconexion
}