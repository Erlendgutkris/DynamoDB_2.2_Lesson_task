var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let list = await message.list()
  res.send(list);
});

router.post("/", async function (req, res, next){
  const {message} = req.body;
  await message.set(message)
  res.end()
})

module.exports = router;
