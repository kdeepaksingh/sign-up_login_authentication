const jwt = require("jsonwebtoken");
const userModel = require("../model/user-model");

const auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt; //this is stored cookie token in browser
        const varifyUser = jwt.verify(token, process.env.SECRET_KEY); //here varified with db stored token
        console.log(varifyUser);
        const user = await userModel.findOne({ _id: varifyUser._id }); //left side id unique key db id and write side token id
        console.log(user);
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json(error);
    }
}
module.exports = auth;