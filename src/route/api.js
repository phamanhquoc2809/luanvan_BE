import express from "express";
import userController from "../controllers/userController";



let router = express.Router();


let initUserRouter = (app) => {
    router.get('/', userController.handleGetAllUser);
    router.get('/user/:id', userController.handleGetUserByID);
    router.post('/create-user', userController.handleCreateNewUser);
    router.delete('/delete-user', userController.handleDeleteUser);
    router.put('/update-user', userController.handleUpdateUser);


    router.get('/anhquoc', (req, res) => {
        return res.send('hello');
    });



    return app.use("/", router);
}

module.exports = initUserRouter;