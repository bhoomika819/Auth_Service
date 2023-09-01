const {response} = require('express');
const UserService= require('../services/user-service');

const userService = new UserService();

const create = async(req,res) => {
    try {
        console.log('controller',req.body);
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: "Able to create new user",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create new user",
            err: {error}
        });
    }
}

module.exports = {
    create
}