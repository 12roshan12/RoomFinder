var con = require('../database/db')


const MgetUserForm= async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM user_form";
        con.query(sql, function (err, result) {
           if(err){
               resolve({error:err,result:null})
           }
           else{
               resolve({error:null,result:result})
           }
        });
    })
}


const MaddUserForm = async (name,phone,email) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO user_form (name,phone,email) VALUES (?,?,?)";
        con.query(sql,[name,phone,email], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log("1 user Inserted");
            }
        });
    })
}

const MupdateUserForm = async (id,name,phone,email) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  user_form set name=?,phone=?,email=? where id = ? ";
        con.query(sql,[name,phone,email,id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Product Updated");
            }
        });
    })
}

const MdeleteUserForm = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM user_form  where id = ? ";
        con.query(sql,[id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Product Deleted");
            }
        });
    })
}





module.exports = {
    MgetUserForm,
    MaddUserForm,
    MupdateUserForm,
    MdeleteUserForm
    
}


