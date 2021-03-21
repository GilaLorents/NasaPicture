const router = require('express').Router();
const jwt = require('jsonwebtoken')
const picture = require('../controllers/nasaPicture')


router.use((req, res, next) => {
    console.log("gili" + req.headers['authorization'])
    const verify = jwt.verify(req.headers['authorization'], process.env.SECRET);
    req.headers['authorization'] = verify;
    console.log(req.headers['authorization']);
    next();
})
router.post('/newPicture', picture.newPicture);
router.post('/getAllPicture', picture.getAllPicture)

module.exports = router;