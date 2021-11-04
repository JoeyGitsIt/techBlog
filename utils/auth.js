const withAuth = (req, res, next) => {
  // checks if the user is logged in, if not redirect to the login page
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
