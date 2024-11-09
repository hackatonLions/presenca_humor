import "dotenv/config";
import "./db.js";
import e from "express";
import userRouter from "./routes/usuario_router.js";
import adminRouter from "./routes/admin_router.js";
import formRouter from "./routes/formulario_router.js";
import entryRouter from "./routes/entry_router.js";
const app = e();

app.use(e.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/form", formRouter);
app.use("/entry", entryRouter);

app.listen(process.env.API_PORT, () => console.log(`Server running on port ${process.env.API_PORT}`));