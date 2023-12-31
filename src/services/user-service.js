const UserRepository = require('../repository/user_repository');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();

    }

    async create(data){
        try {
            console.log("service",data);
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in the service layer');
            throw error;
        }
    }
}

module.exports = UserService;