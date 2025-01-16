const bmwm = require("../models/bmwm.models");

module.exports = {
  getAllBmwm: async (req, res) => {
    try {
      const findBmwm = await bmwm.findAll();
      res.status(200).json(findBmwm);
    } catch (error) {
      throw error;
    }
  },
  postBmwm: async (req, res) => {
    console.log(req.body);
    try {
      const { image, name, description, phone, price } = req.body;
      const post = await bmwm.create({
        image,
        name,
        description,
        phone,
        price,
      });
      res.status(200).json(post);
    } catch (error) {
      throw error;
    }
  },
  updateBmwm: async (req, res) => {
    try {
      const paramId = req.params.id;
      const { image, name, description, phone, price } = req.body;
      const update = await bmwm.update(
        { image, name, description },
        { where: { id: paramId } }
      );
      res.status(200).json(`updated Bmwm with ID: ${update}`);
    } catch (error) {
      throw error;
    }
  },
  deleteBmwm: async (req, res) => {
    try {
      const paramId = req.params.id;
      const deleteOne = await bmwm.destroy({ where: { id: paramId } });
      res.status(200).json(`Deleted Bmwm with ID: ${paramId}`);
    } catch (error) {
      throw error;
    }
  },
  deleteAllBmwm: async (req, res) => {
    try {
      const deleteAll = await bmwm.destroy({ truncate: true });
      res.status(200).json("Deleted All Bmwm's :(");
    } catch (error) {
      throw error;
    }
  },
};
