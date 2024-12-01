const express = require('express')
const addProduct = require("../controllers/addProduct");
const getById = require("../controllers/getById");
const patch = require("../controllers/patch");
const removeProduct = require("../controllers/removeProduct");
const router = express.Router();

router.post('/addProduct', addProduct)
router.get('/getById/:id', getById);
router.patch('/patch/:id', patch);
router.delete('/removeProduct/:id', removeProduct);




module.exports = router;
