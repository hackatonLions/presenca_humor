import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy,
} from "../controllers/formulario_controller.js";
/*import auth_user from "../middlewares/auth_user.js"
import auth_admin from "../middlewares/auth_admin.js"*/

const router = Router();

//router.post("/", signup);
//router.post("/" login);

//router.use(auth_user);

router.post("/", store);
router.get("/", index);
router.get("/:id", show);

//router.use(auth_admin);

router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
