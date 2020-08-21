const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getDatas, getDatasBypage, getUserByName, getUserByNameByPage } = require("./data.controller");

router.get("/", checkToken, getDatas);
router.get("/page/:page", checkToken, getDatasBypage);
router.post("/", getUserByName);
router.post("/page/:page", getUserByNameByPage);

module.exports = router;
