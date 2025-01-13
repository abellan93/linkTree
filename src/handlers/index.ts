import User from "../models/User.js";

export const createAcount = async (req, res) => {

    const {email} = req.body;

    const emailExist = await User.findOne({email});
    if(emailExist){
       const error = new Error('El email ya está en uso');
        return res.status(409).json({error: error.message }) ;
    }

    const user = new User(req.body);
    await user.save();
    res.status(201).send(user.name +' se registro correctamente');
 }