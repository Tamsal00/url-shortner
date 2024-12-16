const express = require("express");
const {handlegenerateNewShortURL} = require("../controllers/url");
const router = express.Router();

router.post('/',handlegenerateNewShortURL);
router.get('/analytics/:shortId', handlegenerateNewShortURL);

module.exports = router;