const {
  models: { Category },
} = require('../models/models');

const getAll = async () => Category.findAll();

const getById = async (id) => {
  const category = await Category.findByPk(id);

  return category ? category.toJSON() : null;
};

const getByName = async (name) => {
  const category = await Category.findOne({ where: { name } });

  return category ? category.toJSON() : null;
};

const create = async (name) => {
  const category = await Category.create({ name });

  return category.toJSON();
};

const remove = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) {
    return false;
  }

  await category.destroy();
};

const update = async ({ id, name }) => {
  const category = await Category.findByPk(id);

  if (!category) {
    return null;
  }

  await category.update({ name });

  return category.toJSON();
};

const clear = async () => {
  await Category.destroy({ where: {} });
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  remove,
  update,
  clear,
};
