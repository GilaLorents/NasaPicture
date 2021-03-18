const User = require('../models/user');
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    console.log(req.body)
    try {
        const exists = await User.find({ name: req.body.name, password: req.body.password });
        if (exists.length !== 0)
            return res.status(500).send('choose another password');
        let newUser = new User(req.body);
        await newUser.save();
        const token = jwt.sign({ name: req.body.name, password: req.body.password }, process.env.SECRET);
        console.log(token);
        res.status(200).json({ message: "user created", token: token });

    } catch (error) {
        res.status(500).json({ message: 'there is error', err: error });

    }
}
const login = async (req, res) => {
    try {
        const exists = await User.find({ name: req.body.name, password: req.body.password });
        if (exists.length !== 0) {
            const token = jwt.sign({ name: req.body.name, password: req.body.password }, process.env.SECRET);
            console.log(token);
            return res.status(200).json({ message: 'משתמש קיים', token: token });
        }
        res.status(404).send('user not found');


    } catch (error) {
        res.status(500).json({ message: 'there is error', err: error });

    }
}

module.exports = { register, login }