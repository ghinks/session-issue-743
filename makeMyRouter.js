const Router = require('express').Router;
const router = Router();
router.get('/bar', (req, res) => {
  console.log("router has been called ===========>");
  if (!req.session.views) {
    req.session.views = 0;
  }

  req.session.views = req.session.views + 1;
  res.send(`you viewed this page ${req.session.views} times`);
});
module.exports = router;
