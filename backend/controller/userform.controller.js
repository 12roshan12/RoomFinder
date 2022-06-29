const { MgetUserForm, MaddUserForm,MupdateUserForm,MdeleteUserForm } = require("../models/UserForm.model")

const CgetUserForm = async(req,res)=>{
    const result = await MgetUserForm();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddUserForm = async(req,res)=>{
    const {name,phone,email}=req.body
    const result = await MaddUserForm(name,phone,email);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateUserForm = async(req,res)=>{
    const {name,phone,email}=req.body
    const {id} = req.params
    const result = await MupdateUserForm(id,name,phone,email);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const CdeleteUserForm = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteUserForm(id);
    // res.send("delete")
    res.send(result)
    console.log(result);
}





module.exports = {
    CgetUserForm,
    CaddUserForm,
    CupdateUserForm,
    CdeleteUserForm

}
