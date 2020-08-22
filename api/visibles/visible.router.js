const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { getVisbleByEmail, setVisible, updateVisibleByEmail } = require("./visible.controller");

router.get("/:email", checkToken, getVisbleByEmail);
router.post("/", checkToken, setVisible);
router.patch("/", checkToken, updateVisibleByEmail);

module.exports = router;