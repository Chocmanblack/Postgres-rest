//definir urls

import { Router } from "express";
import { getUser, getUsers, createUser, deleteUser, updateUser } from "../controllers/users.controllers.js";

const router = Router();

// router.get("/users", async (req, res) => {

//     const { rows } = await pool.query('SELECT * FROM users')
//     res.json(rows)
// });
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router