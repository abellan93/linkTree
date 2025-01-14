import User from "../models/User.js";
import { hashPassword } from "../utils/auth.js";
import slug from "slug";

export const createAcount = async (req, res) => {

    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
        const error = new Error('El email ya está en uso');
        return res.status(409).json({ error: error.message });
    }

    const handle = slug(req.body.handle);
    const handleExist = await User.findOne({ handle });
    if (handleExist) {
        const error = new Error('El nombre de usuario no está disponible');
        return res.status(409).json({ error: error.message });
    }

    const user = new User(req.body);
    user.password= await hashPassword(password);
    user.handle = handle;

    await user.save();
    res.status(201).send(user.name + ' se registro correctamente');
}