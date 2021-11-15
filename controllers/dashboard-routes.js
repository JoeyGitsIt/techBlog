const withAuth = require("../utils/auth");
const router = require("express").Router();

const { Post, Comment, User } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const postsDisplay = postData.map((post) => post.get({ plain: true }));

    res.json({ postsDisplay });
  } catch {
    res.status(500).json(err);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const onePost = await Post.findByPk(req.session.user_id, {
      include: [User, { model: Comment, include: [User] }],
    });
    const post = onePost.get({ plain: true });

    res.render({ post });
  } catch {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
