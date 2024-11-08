import "dotenv/config";
import "./db.js";
import e from "express";

const app = e();

app.use(e.json());

app.listen(process.env.API_PORT, () => console.log(`Server running on port ${process.env.API_PORT}`));