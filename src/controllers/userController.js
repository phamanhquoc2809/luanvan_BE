import db from "../models/index";
import userService from "../services/userService";


let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
}
let handleGetAllUser = async (req, res) => {
    let user = await userService.getAllUser();
    return res.status(200).json({
        errCode: 0,
        message: 'Get All User Succuess',
        user
    })
}
let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters!'
        })
    } else {
        let message = await userService.deleteUser(req.body.id);
        return res.status(200).json(message);
    }

}
let handleUpdateUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUser(data);
    return res.status(200).json(message);
}
let handleGetUserByID = async (req, res) => {
    // let userID = req.body.id;
    let findByID = await userService.getUserByID(req.params.id);
    return res.status(200).json(findByID);
}

module.exports = {
    handleCreateNewUser: handleCreateNewUser,
    handleGetAllUser: handleGetAllUser,
    handleDeleteUser: handleDeleteUser,
    handleUpdateUser: handleUpdateUser,
    handleGetUserByID: handleGetUserByID,
}