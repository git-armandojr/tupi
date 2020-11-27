import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:coffee@localhost:3306/tupi');

export default sequelize;
