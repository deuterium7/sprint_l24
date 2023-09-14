const Todo = require('../models/Todo');

class TodoService {
	async getAll() {
		return await Todo.findAll();
	}

	async findById(id) {
		return await Todo.findOne({
			where: { id: id }
		});
	}

	async store(data) {
		return await Todo.create(data);
	}

	async update(id, data) {
		return await Todo.update(
			data,
			{ where: { id: id } }
		);
	}

	async destroy(id) {
		return await Todo.destroy({
			where: { id: id }
		});
	}
}

module.exports = TodoService;