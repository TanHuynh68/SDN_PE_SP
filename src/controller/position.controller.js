const positionService = require("../services/postition.servies")

class positionController {

    getPosition= async (req, res) => {
        const response = await positionService.getPositions(req, res)
        console.log("res: ", response)
        if (response) {
            return res.status(200).json({
                message: "Get position successfully",
                data: response
            })
        }
        return res.status(500).json({
            message: "Internal server error",
        })
    }

    createPosition = async (req, res) => {
        const { position } = req.body
        console.log("position: ", position)
        if(!position||position.trim()===""){
            return res.status(400).json({
                message: "position is required"
            })
        }
        const response = await positionService.findPositionService(req, res, position)
        console.log("res: ", response)
        if (response) {
            return res.status(400).json({
                message: "Position existed"
            })
        }
        console.log("response: ", response)
        const responseCreate = await positionService.createPositionService(req, res, position);
        console.log("responseCreate: ", responseCreate)
        if (responseCreate) {
            return res.status(201).json({
                message: "create successfully!",
                data: responseCreate
            })
        }
        return res.status(500).json({
            message: "Internal server error",
        })
    }


    editPosition = async (req, res) => {
        const { position } = req.body
        const { id } = req.params
        console.log("position: ", position)
        if(!position||position.trim()===""){
            return res.status(400).json({
                message: "position is required"
            })
        }
        const response = await positionService.findPositionService(req, res, position)
        console.log("res: ", response)
        if (response) {
            return res.status(400).json({
                message: "Position existed"
            })
        }
        console.log("response: ", response)
        const responseEdit = await positionService.editPositionService(req, res, position, id);
        console.log("resresponseEditonseCreate: ", responseEdit)
        if (responseEdit) {
            return res.status(201).json({
                message: "update successfully!",
                data: responseEdit
            })
        }
        return res.status(500).json({
            message: "Internal server error",
        })
    }


    deletePosition = async (req, res) => {
        const { id } = req.params
        const response = await positionService.deletePositionService(req, res, id)
        console.log("res: ", response)
        if (response) {
            return res.status(200).json({
                message: "Delete Successfully"
            })
        }
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

module.exports = new positionController()