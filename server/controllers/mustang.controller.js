
const mustang = require("../models/mustang.models")

module.exports = {
    getAllMustangs: async (req, res) => {
        try {
            const findMustang = await mustang.findAll()
              res.status(200).json(findMustang)
        } catch (error) {
            throw error
        }
    },
    postMustang: async (req, res) => {
        console.log(req.body)
        try {
            const {image , name, description } = req.body
            const post = await mustang.create({image , name, description });
            res.status(200).json(post)
        } catch (error) {
            throw error
        }
    },
    updateMustang: async (req , res) => {
        try {
            const paramId = req.params.id
            const { image, name, description } = req.body
            const update = await mustang.update({ image, name, description }, { where: { id: paramId } })
            res.status(200).json(`updated Mustang with ID: ${update}`)
        } catch (error) {
            throw error
        }
    },
    deleteMustang: async (req , res) => {
        try {
            const paramId = req.params.id
            const deleteOne = await mustang.destroy({ where: { id: paramId } })
            res.status(200).json(`Deleted Mustang with ID: ${paramId}`)
        } catch (error) {
            throw error
        }
    },
    deleteAllMustangs: async (req, res) => {
        try {
            const deleteAll = await mustang.destroy({ truncate: true })
            res.status(200).json("Deleted All Mustangs :(")
        } catch (error) {
            throw error
        }
    }
}
