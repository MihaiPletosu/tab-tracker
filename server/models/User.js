const bcrypt = require('bcrypt');

function hashPassword (user, options) {
  const SALT_FACTOR = 10;
  if (!user.changed('password')) {
    return;
  }
  var salt = bcrypt.genSaltSync(SALT_FACTOR);
  var hash = bcrypt.hashSync(user.password, salt);

  return user.setDataValue('password', hash);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};
