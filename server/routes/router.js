const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel')

const {getAllMessage,insertMessage} = require('../Controllers/UserControllers')

router.get('/', getAllMessage)
router.post('/',insertMessage)


// router.get('/:id', (req,res) => {
//     res.json({msg : 'get all infos id'})
// })

// router.delete('/:id' , (req,res) => {
//     res.json({msg : 'delete a msg'})
// })


// router.patch('/:id', (req,res) => {
//     res.json({msg : 'update a msg'})
// })



module.exports = router;


