const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Student=sequelize.define('classes',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
   
    section:{
        type:Sequelize.STRING,
        allowNull:false

    },
    classNumber:{
        type:Sequelize.INTEGER,
        allowNull:false

    }
});
module.exports=Student