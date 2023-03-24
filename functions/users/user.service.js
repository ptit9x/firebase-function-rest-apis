/**
 * Create a user
 * @param {Object} userBody
 * @return {Promise<User>}
 */
const createUser = async (userBody) => {
  return Promise.resolve({
    id: 1,
  });
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @return {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  // const users = await User.paginate(filter, options);
  return Promise.resolve({
    users: [],
    page: 1,
    total: 10,
  });
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @return {Promise<User>}
 */
const getUserById = async (id) => {
  return Promise.resolve({
    id: 1,
    username: "huynhdn",
    name: "huynhdn",
    email: "ngochuynh1991@gmail.com",
  });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @return {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  return Promise.resolve({
    id: 2,
  });
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @return {Promise<User>}
 */
const deleteUserById = async (userId) => {
  return Promise.resolve({
    id: 2,
  });
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
