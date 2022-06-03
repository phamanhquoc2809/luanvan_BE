import express from "express";
import userController from "../controllers/userController";
import categoryController from "../controllers/categoryController";
import productController from "../controllers/productController";




let router = express.Router();


let initUserRouter = (app) => {
    router.get('/user', userController.handleGetAllUser);
    router.get('/user/:id', userController.handleGetUserByID);
    router.post('/create-user', userController.handleCreateNewUser);
    router.delete('/delete-user', userController.handleDeleteUser);
    router.put('/update-user', userController.handleUpdateUser);
    router.post('/login', userController.handleLogin);
    router.get('/admin-user', userController.handleAdminGetAllUsers);

    router.get('/category', categoryController.handleGetAllCate);
    router.get('/category/:id', categoryController.handleGetCateByID);
    router.post('/create-category', categoryController.handleCreateCate);
    router.put('/update-category', categoryController.handleUpdateCate);
    router.delete('/delete-category', categoryController.handleDeleteCate);

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