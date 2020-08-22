const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getDatas, getDatasBypage, getUserByName, getUserByNameByPage, setSqlQuery } = require("./data.controller");

router.get("/", checkToken, getDatas);
router.get("/page/:page", checkToken, getDatasBypage);
router.post("/", checkToken, getUserByName);
router.post("/page/:page", checkToken, getUserByNameByPage);
router.post("/set", checkToken, setSqlQuery);

module.exports = router;
