import express from "express";
import homeController from "../controllers/homeController";



let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/create-user', homeController.handleCreateNewUser);


    router.get('/anhquoc', (req, res) => {
        return res.send('hello');
    });



    return app.use("/home", router);
}


module.exports = initWebRoutes;