const usersController = require("../controllers/userControllers");
const express = require("express");

const router = express.Router();
const { getUsers, registerUser, loginUser, deleteUser, userStatus } = usersController;

router.get("/users", getUsers);
router.put("/users/status/:id", userStatus);
router.delete("/users/delete/:id", deleteUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
