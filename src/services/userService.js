const {
  models: { User },
} = require('../models/models');

const getAll = async () => User.findAll();

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user ? user.toJSON() : null;
};

const create = async (name) => {
  const user = await User.create({ name });

  return user.toJSON();
};

const remove = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return false;
  }

  await user.destroy();
};

const update = async ({ id, name }) => {
  const user = await User.findByPk(id);

  if (!user) {
    return null;
  }

  await user.update({ name });

  return user.toJSON();
};

const clear = async () => {
  await User.destroy({ where: {} });
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  clear,
};
