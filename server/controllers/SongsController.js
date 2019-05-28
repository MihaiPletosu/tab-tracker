const { Song } = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      });
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to fetch the song.'
      });
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to fetch the song.'
      });
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to create the song.'
      });
    }
  }
};
