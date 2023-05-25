import { Express } from "express"
import userController from "./../controllers/userController"
import { requireAuth } from "../middleware/authMiddleware"

export default function (app:Express ) {
    
    app.route('/loginUser')
        .post(userController.loginUser)

    app.route("/haslogin")
        .get(requireAuth, userController.hasLogin)

    // app.route("/test")
    //     .get(userController)

}