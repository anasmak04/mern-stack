const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.json({msg : 'welcome to get method'})
})

router.get('/:id', (req,res) => {
    res.json({msg : 'get all width id'})
})

router.post('/', (req,res) => {
    res.json({msg : 'enter a new msgs'})
})


router.delete('/:id' , (req,res) => {
    res.json({msg : 'delete a msg'})
})


router.patch('/:id', (req,res) => {
    res.json({msg : 'update a msg'})
})



module.exports = router


