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

    // 删除用户
    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error('用户不存在');
        }

        const deletedUser = this.users.splice(userIndex, 1)[0];
        console.log(`用户 ${deletedUser.name} 已被删除`);
        return deletedUser;
    }

    // 获取用户统计信息
    getUserStats() {
        return {
            totalUsers: this.users.length,
            latestUser: this.users[this.users.length - 1],
            oldestUser: this.users[0]
        };
    }
}

module.exports = UserManager; 