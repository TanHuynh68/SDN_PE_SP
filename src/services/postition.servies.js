const positionModel = require("../models/position")


class positionService {

    getPositions = async (req, res) => {
        try {
            const response = await positionModel.find({})
            if (response) {
                return response
            }
        } catch (error) {
            console.error("getPositions: ", error.message)
        }
    }

    findPositionService = async (req, res, position) => {
        try {
            const response = await positionModel.findOne({ position: position })
            if (response) {
                return response
            }
        } catch (error) {
            console.error("findPositionService: ", error.message)
        }
    }

    createPositionService = async (req, res, position) => {
        try {
            const response = await positionModel.create({ position: position })
            if (response) {
                return response
            }
        } catch (error) {
            console.error("createPositionService: ", error.message)
        }
    }

    editPositionService = async (req, res, position, id) => {
        try {
            const response = await positionModel.findByIdAndUpdate({ _id: id }, { position: position }, { new: true })
            if (response) {
                return response
            }
        } catch (error) {
            console.error("createPositionService: ", error.message)
        }
    }

    deletePositionService = async (req, res, id) => {
        try {
            const response = await positionModel.findByIdAndDelete({ _id: id },{ new: true })
            if (response) {
                return response
            }
        } catch (error) {
            console.error("deletePositionService: ", error.message)
        }
    }
}

module.exports = new positionService()