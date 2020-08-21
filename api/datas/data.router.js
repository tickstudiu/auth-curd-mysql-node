const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getDatas, getDatasBypage } = require("./data.controller");

router.get("/", checkToken, getDatas);
router.get("/page/:page", checkToken, getDatasBypage);

module.exports = router;
