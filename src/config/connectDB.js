const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'ddu61o70ld20hj',
    'btdjhzrfgshlhr',
    '3d3f2eeb1b7cf518411a3b0be5969acae58bd7857b73b35a585dab8e62872622',
    {
        host: 'ec2-3-228-235-79.compute-1.amazonaws.com',
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });


let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;