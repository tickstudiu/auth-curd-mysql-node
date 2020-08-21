const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getDatas } = require("./data.controller");
router.get("/", checkToken, getDatas);

module.exports = router;
