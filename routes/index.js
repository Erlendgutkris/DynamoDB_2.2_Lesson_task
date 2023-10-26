var express = require('express');
var router = express.Router();
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB(process.env.CYCLIC_DB)
let messageCollection = db.collection("message")

/* GET home page. */
router.get('/', async function(req, res, next) {
  let list = await messageCollection.list()
  res.send(list);
});

router.post("/", async function (req, res, next){
  const {message} = req.body;
  await messageCollection.set("message", {value: message})
  res.end()
})

module.exports = router;
