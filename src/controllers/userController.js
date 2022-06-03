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
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let pwd = req.body.pwd;
    if (!email || !pwd) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userService.login(email, pwd);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleAdminGetAllUsers = async (req, res) => {
    //let id = req.body.id;// Truyền ALL để lấy tất cả || id để lấy cụ thể
    let users = await userService.adminGetAllUsers();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL USER SUCCESS',
        users
    })
}

module.exports = {
    handleCreateNewUser: handleCreateNewUser,
    handleGetAllUser: handleGetAllUser,
    handleDeleteUser: handleDeleteUser,
    handleUpdateUser: handleUpdateUser,
    handleGetUserByID: handleGetUserByID,
    handleLogin: handleLogin,
    handleAdminGetAllUsers: handleAdminGetAllUsers,
}