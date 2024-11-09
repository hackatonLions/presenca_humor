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

//router.use(auth_user);

router.post("/", store);

//router.use(auth_admin);

router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
