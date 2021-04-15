const router = require('express').Router();
const json = require('./../data-json/product.json');

router.route('/').get((req, res) => {
    return res.status(200).send(json);
});

module.exports = router;