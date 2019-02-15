const express = require('express');
const mysql = require("mysql");

// Conexión Base de Datos
const con = mysql.createConnection({
   host: 'localhost',
   user: 'jhon',
   password: 'Bertaliamom1993*',
   database: 'prueba1'
});

con.connect(error => {
   if(error){
     console.log('Error al conectarse a la base de datos');
     return;
   }

   console.log('Conexion exitosa');
});



// Codigo

var app = express();

app.get('/', function (req, res){
   
   let query = "SELECT * FROM equipos;";
   
   con.query(query, (error, result) => {
      if (error){
         console.log("Error en la consulta " + error);
      }
      
      res.json({ code: 200, response: result});
      
      console.log(result);
   });
   
   con.end(error => {});
});

app.listen(3000, function(){
   console.log('Esta app esta corriendo!');
});
