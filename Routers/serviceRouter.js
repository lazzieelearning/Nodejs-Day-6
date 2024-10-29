import express from "express";

import { createService, deleteService, getService, updateService } from "../Controllers/serviceControllers.js";
import { adminMiddleware } from "../Middleware/adminMiddleware.js";


const router = express.Router();

router.post("/create",adminMiddleware, createService)
router.get("/get",getService)
router.put("/update/:id",adminMiddleware, updateService)
router.delete("/delete/:id", adminMiddleware,deleteService)

export default router;