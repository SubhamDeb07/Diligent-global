const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Student=sequelize.define('parent',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    class:{
        type:Sequelize.INTEGER,
        allowNull:false

    }
});
module.exports=Student