const mysql = require('mysql');
const con=mysql.createConnection({
host:'localhost',
user:'root',
password:'Bertaliamom1993*',
database:'proyecto2',
});

con.connect((err)=>{
if(err){
console.log('Ocurrio un error al conectar con la base de datos');
return;
}
console.log('Conexion establecida');
});
con.end((err)=>{});
