const { User } = require('../models');

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        message: 'This email account is already in use.'
      });
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!user) {
        res.status(403).send({
          error: 'Login information was incorrect'
        });
      }

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Login informaiton was incorrect'
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson
      });
    } catch (err) {
      res.status(500).send({
        message: 'An error has occured trying to log in.'
      });
    }
  }
};
