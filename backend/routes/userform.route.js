const express = require("express");
const { CgetUserForm, CaddUserForm, CupdateUserForm, CdeleteUserForm } = require("../controller/UserForm.controller");
const route = express.Router()




route.get('/getUserForm',CgetUserForm)
route.put('/updateUserForm/:id',CupdateUserForm)
route.post('/addUserForm',CaddUserForm)
route.delete('/deleteUserForm/:id',CdeleteUserForm)

module.exports = route