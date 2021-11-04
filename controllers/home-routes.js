const withAuth = require("../utils/auth");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    // const userData = await User.findByPk(req.session.user_id, {
    // attributes: { exclude: ["password"] },
    // })
    res.json("yes");
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
