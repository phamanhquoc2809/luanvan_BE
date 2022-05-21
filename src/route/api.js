import express from "express";
import userController from "../controllers/userController";
import permiss from "../controllers/permissionController";



let router = express.Router();


let initUserRouter = (app) => {
    // User
    router.get('/user', userController.handleGetAllUser);
    router.get('/userBy/:id', userController.handleGetUserByID);
    router.post('/create-user', userController.handleCreateNewUser);
    router.delete('/delete-user', userController.handleDeleteUser);
    router.put('/update-user', userController.handleUpdateUser);

    // Permission
    router.get('/permiss', permiss.handleGetAllPermiss);
    router.get('/permiss/:id', permiss.handleGetPermissByID);
    router.post('/create-permiss', permiss.handleCreateNewPermiss);
    router.delete('/delete-permiss', permiss.handleDeletePermiss);
    router.put('/update-permiss', permiss.handleUpdatePermiss);


    router.get('/anhquoc', (req, res) => {
        return res.send('hello');
    });



    return app.use("/", router);
}

module.exports = initUserRouter;