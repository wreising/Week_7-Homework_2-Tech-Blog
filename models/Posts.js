const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Post extends Model { }

Post.init({
  post_name: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  keywords: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  postText: {
    type: DataTypes.STRING(5000),
    allowNull: false
  },
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'post'
})

module.exports = Post