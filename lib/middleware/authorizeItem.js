const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    console.log(req.params);
    const item = await Item.getById(req.params.id);
    if (!item || item.user_id !== req.user.id) {
      throw new Error('You cannot view this page');
    }
    next();
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
