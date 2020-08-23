const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getDatas, getDatasBypage, getDatasByName, getDatasByNameByPage } = require("./data.controller");

router.post("/", checkToken, getDatas);
router.post("/byPage/page/:page", checkToken, getDatasBypage);
router.post("/byName/", checkToken, getDatasByName);
router.post("/byNamebyPage/page/:page", checkToken, getDatasByNameByPage);

module.exports = router;
