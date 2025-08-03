// 产品管理模块
const Utils = require('./utils');

class ProductManager {
    constructor() {
        this.products = [];
        this.categories = ['电子产品', '服装', '图书', '家居'];
    }

    // 添加产品
    addProduct(productData) {
        if (!productData.name || !productData.price) {
            throw new Error('产品名称和价格不能为空');
        }

        if (productData.price <= 0) {
            throw new Error('产品价格必须大于0');
        }

        const product = {
            id: Utils.generateId(),
            name: productData.name,
            price: productData.price,
            category: productData.category || '其他',
            description: productData.description || '',
            createdAt: new Date(),
            inStock: true
        };

        this.products.push(product);
        console.log(`产品 ${product.name} 已添加`);
        return product;
    }

    // 获取产品列表
    getProducts(category = null) {
        if (category) {
            return this.products.filter(p => p.category === category);
        }
        return this.products;
    }

    // 查找产品
    findProduct(id) {
        return this.products.find(p => p.id === id);
    }

    // 更新产品库存状态
    updateStock(id, inStock) {
        const product = this.findProduct(id);
        if (!product) {
            throw new Error('产品不存在');
        }

        product.inStock = inStock;
        console.log(`产品 ${product.name} 库存状态已更新为: ${inStock ? '有库存' : '缺货'}`);
        return product;
    }
}

module.exports = ProductManager; 