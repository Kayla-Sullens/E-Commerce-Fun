// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true,
    },
    product_name: {
      type: DataType.STRING,
      allowNull: false,
    },
    price: {
      type: DataaType.DECIMAL,
      allowNull: false,
      //validate: decimal
    },
    stock: {
      type: DataType.INTEGER,
      allownull: false,
      defaultValue: 10,
      //validate: numeric,
    },
    category_id: {
      type: DataType.INTEGER,
      //references: category_id,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;