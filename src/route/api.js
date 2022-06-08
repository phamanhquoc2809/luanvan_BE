import express from "express";
import userController from "../controllers/userController";
import permiss from "../controllers/permissionController";
import categoryController from "../controllers/categoryController";
import productController from "../controllers/productController";





let router = express.Router();


let initUserRouter = (app) => {

    // User
    router.get('/user', userController.handleGetAllUser);
    router.get('/userBy/:id', userController.handleGetUserByID);

    router.post('/create-user', userController.handleCreateNewUser);
    router.post('/create-userTest', userController.handleCreateNewUserTest);
    router.delete('/delete-user', userController.handleDeleteUser);
    router.put('/update-user', userController.handleUpdateUser);
    router.post('/login', userController.handleLogin);
    router.post('/loginTest', userController.handleLoginTest);

    router.get('/search-user', userController.handleSearchUser);

    // Permission
    router.get('/permiss', permiss.handleGetAllPermiss);
    router.get('/permiss/:id', permiss.handleGetPermissByID);
    router.post('/create-permiss', permiss.handleCreateNewPermiss);
    router.delete('/delete-permiss', permiss.handleDeletePermiss);
    router.put('/update-permiss', permiss.handleUpdatePermiss);

    // category
    router.get('/category', categoryController.handleGetAllCate);
    router.get('/category/:id', categoryController.handleGetCateByID);
    router.post('/create-category', categoryController.handleCreateCate);
    router.put('/update-category', categoryController.handleUpdateCate);
    router.delete('/delete-category', categoryController.handleDeleteCate);


    // product
    router.get('/product', productController.handleGetAllProduct);
    router.get('/product/:id', productController.handleGetProcductByID);
    router.get('/search-product', productController.handleSearchProcduct);
    router.post('/create-product', productController.handleCreateProduct);
    router.put('/update-product', productController.handleUpdateProduct);
    router.delete('/delete-product', productController.handleDeleteProduct);

    router.get('/anhquoc', (req, res) => {
        return res.send('hello');
    });



    return app.use("/", router);
}

module.exports = initUserRouter;