const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel')

router.get('/', (req,res) => {
    res.json({msg : 'welcome to get method'})
})

router.get('/:id', (req,res) => {
    res.json({msg : 'get all infos id'})
})

router.post('/', async (req,res) => {
    const {name,email,msg} = req.body;
    try{
        const routers = await User.create({name,email,msg})
        res.status(200).json(routers); 

    }
    catch(err){
        console.log(err)
    }
    // res.json({msg : 'enter a new msgs'})
})


router.delete('/:id' , (req,res) => {
    res.json({msg : 'delete a msg'})
})


router.patch('/:id', (req,res) => {
    res.json({msg : 'update a msg'})
})



module.exports = router;


