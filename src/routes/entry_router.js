import {Router} from "express";

import funcoesEntrada from "../middlewares/entryFunction.js"

const router = Router();

router.post("/:digital", funcoesEntrada);

export default router
