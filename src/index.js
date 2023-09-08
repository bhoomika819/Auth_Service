const express = require('express');
const { PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
// const {User}  = require('./models/index');
// const bcrypt = require('bcrypt');

//const UserRepository = require('./repository/user_repository');

const app = express();

const prepareAndServer = () => {
    app.use(bodyParser.json());  // ni aaya
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes); //ni aaya

    app.listen(PORT,async () => {
    console.log(`Server Started on PORT : ${PORT}`);
    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);
    // const incomingpassword = 'Bhoomika@321';
    // const user = await User.findByPk(2);
    // const response = bcrypt.compareSync(incomingpassword,user.password);
    // console.log(response);
    })
}

prepareAndServer();