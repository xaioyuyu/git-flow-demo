// 用户管理模块
const Utils = require('./utils');

class UserManager {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }

    // 添加用户
    addUser(userData) {
        if (!userData.email || !Utils.validateEmail(userData.email)) {
            throw new Error('邮箱格式不正确');
        }

        const user = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            createdAt: new Date()
        };

        this.users.push(user);
        return user;
    }

    // 获取用户列表
    getUsers() {
        return this.users;
    }

    // 查找用户
    findUser(id) {
        return this.users.find(user => user.id === id);
    }
}

module.exports = UserManager; 