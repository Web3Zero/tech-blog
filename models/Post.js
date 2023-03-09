const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create the post model
class Post extends Model {}


module.exports = Post;