const User = require('../Models/UserModel');

const getAllMessage = async (req,res) => {
    const msg = User.find({}).sort({createdAt : -1})
    res.status(200).json(msg);
}


const insertMessage = async (req,res) => {
    const {name,email,msg} = req.body;
    try{
        const routers = await User.create({name,email,msg})
        res.status(200).json(routers); 
    }

    catch(err){
        console.log(err)
    }
}


module.exports = {
    insertMessage,
    getAllMessage
}