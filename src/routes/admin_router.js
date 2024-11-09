import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/admin_controller.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
