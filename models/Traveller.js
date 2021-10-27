const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    }
},{
sequelize
});

module.exports=Traveller