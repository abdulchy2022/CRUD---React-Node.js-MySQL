

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");


const db = mysql.createPool({
      host: "x.x.x.x",
      user: "root",
      password: "xxxxx",
      database: "crud_contact"

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get all user list 
app.get("/get", (req,res) => {
   const sqlGet = "SELECT * FROM contact_db";
   db.query(sqlGet,(error,result)=>{
      res.send(result);
   });
});

    

//Add Data into DataBase:
app.post("/add",(req,res)=> {
   const {name, email, contact } = req.body;
   const sqlInsert = "INSERT INTO contact_db (name, email, contact) VALUES (?,?,?)";
   db.query(sqlInsert, [name, email, contact], (error, result)=> {
      if(error) {
        console.log(error);
      }
   });
});


//update an item (two steps: Go to the Item and Update the item)

// first go to the item using id

app.get("/api/get/:id",(req,res)=> {
   const {id}  = req.params;
 
   const sqlGet = "SELECT * FROM contact_db WHERE id = ? ";
   db.query(sqlGet, id,(error, result)=> {
      if(error) {
        console.log(error);
      }
      res.send(result);
   });
});


//second update the item

app.put("/put/:id",(req,res)=> {
   const {id} = req.params;
   const {name, email, contact } = req.body;
   const sqlUpdate = "UPDATE contact_db SET name= ?, email= ? ,contact=? WHERE id = ? ";
   db.query(sqlUpdate, [name, email, contact, id], (error, result)=> {
      if(error) {
        console.log(error);
      }
      res.send (result);
   });
});




// Delete Item from the DatBase
app.delete("/delete/:id",(req,res)=>{
   const{id} = req.params;
   const sqlRemove = 
        "DELETE FROM contact_db WHERE id = ?";
   db.query(sqlRemove, id, (error, result)=> {
      if(error) {
         console.log(error);
      }
   })  

});



app.listen(8082, () => {
  console.log("Server is running on port 8082");
})



