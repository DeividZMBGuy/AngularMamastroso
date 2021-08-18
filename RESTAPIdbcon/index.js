const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 6661;

const connectionString = {
    user:'sa',
    password:'R0bertStrife',
    server:'66.175.236.212',
    port:1433,
    database:'DaveCalderonDB',
    options:{
        encrypt:false,
        trustServerCertificate:false
    }
}

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));
app.use(cors());

app.all('*', function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})

const pool = new sql.ConnectionPool(connectionString);
const poolConnect = pool.connect();

pool.on('error', err=>{
    console.log(err);
});

app.get('/', function (req, res){
    res.send('Goodness');
})


async function deadpool(req, res, q){
    let _bod = req.body;

    await poolConnect;

    try{
    
        const request = pool.request();
        const result = await request.query(q);
        console.dir(result);
        console.log(result);

        if(result.recordset){
            if(result.recordset.length>0){
                res.send(result.recordset);
            }
        }
        return result;

    }catch(err){
        console.error('sql error', err);    
    }
}


app.post('/api/login', (req, res) => {
    let _bd = req.body;
    let q = "SELECT admin FROM users WHERE user='"+_bd.name+"' AND pass='"+_bd.pass+"'";
    deadpool(req,res,q)
})



//CRUD FACTORIES
app.get('/api/factories', (req, res) => {
    let q = 'SELECT * FROM Factories';
    deadpool(req, res, q);
})

app.post('/api/factories', (req, res) => {
    let _bd = req.body;
    let q = "INSERT INTO Factories (OfficialName, ComercialName, RFC, Address, Telephone, DateOfCreation, Director) values ('"+_bd.OfficialName+"', '"+_bd.ComercialName+"', '"+_bd.RFC+"', '"+_bd.Address+"', '"+_bd.Telephone+"', '"+_bd.DateOfCreation+"', '"+_bd.Director+"')";
    deadpool(req, res, q);
})

app.put('/api/factories', (req, res) => {
    let _bd = req.body;
    let q = "UPDATE Factories SET OfficialName='"+_bd.OfficialName+"', ComercialName='"+_bd.ComercialName+"', RFC='"+_bd.RFC+"', Address='"+_bd.Address+"', Telephone='"+_bd.Telephone+"', DateOfCreation='"+_bd.DateOfCreation+"', Director='"+_bd.Director+"' WHERE IDFactory='"+_bd.IDFactory+"'";
    deadpool(req, res, q);
})

app.delete('/api/factories/:IDFactory', (req, res) => {
    const {IDFactory} = req.params;
    console.log(IDFactory)
    let q = "DELETE FROM Factories WHERE IDFactory = '"+IDFactory+"'";
    deadpool(req, res, q);
})
//FIN DE CRUD FACTORIES

//CRUD DEPARTMENT
app.get('/api/departments', (req, res) => {
    let q = 'SELECT * FROM Department';
    deadpool(req, res, q);
})

app.post('/api/departments', (req, res) => {
    let _bd = req.body;
    let q = "INSERT INTO Department (Name, Specialty, AreaPhone, ResponsibleName, ResponsibleUserID, DateOfCreation) values ('"+_bd.Name+"', '"+_bd.Specialty+"', '"+_bd.AreaPhone+"', '"+_bd.ResponsibleName+"', '"+_bd.ResponsibleUserID+"', '"+_bd.DateOfCreation+"')";
    deadpool(req, res, q);
})

app.put('/api/departments', (req, res) => {
    let _bd = req.body;
    let q = "UPDATE Department SET Name='"+_bd.Name+"', Specialty='"+_bd.Specialty+"', AreaPhone='"+_bd.AreaPhone+"', ResponsibleName='"+_bd.ResponsibleName+"', ResponsibleUserID='"+_bd.ResponsibleUserID+"', DateOfCreation='"+_bd.DateOfCreation+"' WHERE IDDepartment='"+_bd.IDDepartment+"'";
    deadpool(req, res, q);
})

app.delete('/api/departments/:IDDepartment', (req, res) => {
    const {IDDepartment} = req.params;
    console.log(IDDepartment)
    let q = "DELETE FROM Department WHERE IDDepartment = "+IDDepartment+"";
    deadpool(req, res, q);
})
//FIN CRUD DEPARTMENT

//CRUD EMPLOYEES
app.get('/api/employees', (req, res) => {
    let q = 'SELECT * FROM Employees';
    deadpool(req, res, q);
})
app.post('/api/employees', (req, res) => {
    let _bd = req.body;
    let q = "INSERT INTO Employees (Name, Address, DateOfHiring, IDDepartment) values ('"+_bd.Name+"', '"+_bd.Address+"', '"+_bd.DateOfHiring+"', '"+_bd.IDDepartment+"')";
    deadpool(req, res, q);
})

app.put('/api/employees', (req, res) => {
    let _bd = req.body;
    let q = "UPDATE Employees SET Name='"+_bd.Name+"', Address='"+_bd.Address+"', DateOfHiring='"+_bd.DateOfHiring+"', IDDepartment='"+_bd.IDDepartment+"' WHERE IDEmployee='"+_bd.IDEmployee+"'";
    deadpool(req, res, q);
})

app.delete('/api/employees/:IDEmployee', (req, res) => {
    const {IDEmployee} = req.params;
    console.log(IDEmployee)
    let q = "DELETE FROM Employees WHERE IDEmployee = "+IDEmployee+"";
    deadpool(req, res, q);
})
//FIN CRUD EMPLOYEES

//CRUD PRODUCT
app.get('/api/product', (req, res) => {
    let q = 'SELECT * FROM Product';
    deadpool(req, res, q);
})
app.post('/api/product', (req, res) => {
    let _bd = req.body;
    let q = "INSERT INTO Product (Name, IDDepartment) values ('"+_bd.Name+"', '"+_bd.IDDepartment+"')";
    deadpool(req, res, q);
})

app.put('/api/product', (req, res) => {
    let _bd = req.body;
    let q = "UPDATE Product SET Name='"+_bd.Name+"', IDDepartment='"+_bd.IDDepartment+"' WHERE IDProduct='"+_bd.IDProduct+"'";
    deadpool(req, res, q);
})

app.delete('/api/product/:IDProduct', (req, res) => {
    const {IDProduct} = req.params;
    console.log(IDProduct)
    let q = "DELETE FROM Product WHERE IDProduct = "+IDProduct+"";
    deadpool(req, res, q);
})
//FIN CRUD PRODUCT

app.listen(port, function(){
    console.log('running at port: ' + port);
})