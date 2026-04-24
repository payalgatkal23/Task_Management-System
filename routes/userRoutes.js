const userController=require('../controllers/userController');
const express=require('express');
const router=express.Router();

router.post('/tasks',userController.createtask);

module.exports=router;