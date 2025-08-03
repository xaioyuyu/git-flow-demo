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

        if (!userData.password) {
            throw new Error('密码不能为空');
        }

        const user = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password, // 新增密码字段
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

    // 用户登录
    login(email, password) {
        const user = this.users.find(u => u.email === email);
        if (!user) {
            throw new Error('用户不存在');
        }

        // 简单的密码验证（实际项目中需要加密）
        if (user.password !== password) {
            throw new Error('密码错误');
        }

        this.currentUser = user;
        console.log(`用户 ${user.name} 登录成功`);
        return user;
    }

    // 用户登出
    logout() {
        if (this.currentUser) {
            console.log(`用户 ${this.currentUser.name} 已登出`);
            this.currentUser = null;
        }
    }
}

module.exports = UserManager; 