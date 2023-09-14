const { db, DataTypes } = require("../services/Db");

const Todo = db.define(
	'Todo',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed: {
			type: DataTypes.BOOLEAN,
			default: 0,
		},
	},
	{
		timestamps: true
	},
);

module.exports = Todo;