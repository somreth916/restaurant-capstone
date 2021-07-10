const knex = require("../db/connection");

const tableName = "reservations";

function list(date) {
	console.log(date)
	if(date) {
		return knex(tableName)
			.select("*")
			.where({ reservation_date: date });
	}

	return knex(tableName)
		.select("*");
}

function create(reservation) {
	return knex(tableName)
		.insert(reservation)
		.returning("*");
}

module.exports = {
	list,
	create,
}