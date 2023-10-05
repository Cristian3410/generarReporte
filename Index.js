const express = require("express")
const app = express();
const database = require("./database");




app.set("port",3500)
app.listen(app.get("port"))
console.log("escuchando en el puerto "+app.get ( "port"))




app.use(express.static(__dirname + "/publico"))


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "index.html")
})

app.get("/productos", async (req,res)=>{
    const connection = await database.getconexion();
    const resultado = await connection.query ("SELECT * from usuarios")
    res.json(resultado)
    
})
