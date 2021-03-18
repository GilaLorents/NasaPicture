const Picture = require('../models/nasaPicture')
const User = require('../models/user');
const { find } = require('../models/user');
const newMyPicture = async (req, res) => {
    console.log('hi own picture', req.body)


    try {
        const user = await User.findOne({ name: req.headers['authorization'].name, password: req.headers['authorization'].password })
        console.log("current user   " + user);
        var ownPicture = {}

        ownPicture.img = req.body;
        ownPicture.isNasa = false
        let newPicture = new Picture(ownPicture);
        await newPicture.save();
        console.log("new picture own   " + newPicture);
        user.picture.push(newPicture._id);
        await user.save();
        console.log("user with id of own picture   " + user);
        res.status(200).json({ message: "הועלתה תמונה פרטית בהצלחה" })
    }
    catch (error) {
        res.status(400).json({ "error": error })

    }

}
const newPicture = async (req, res) => {

    try {
        const user = await User.findOne({ name: req.headers['authorization'].name, password: req.headers['authorization'].password })
        console.log("current user   " + user);
        console.log("copytright" + req.body.copyright)
        var currentPicture = {
        }
        currentPicture.copyright = req.body.copyright,
            currentPicture.date = req.body.date,
            currentPicture.explanation = req.body.explanation,
            currentPicture.hdurl = req.body.hdurl,
            currentPicture.media_type = req.body.media_type,
            currentPicture.service_version = req.body.service_version,
            currentPicture.title = req.body.title,
            currentPicture.url = req.body.url,
            currentPicture.user = user._id
        console.log("user id" + user._id)
        console.log(currentPicture)
        let newPicture = new Picture(currentPicture)
        await newPicture.save();
        console.log("new picture    " + newPicture);
        user.picture.push(newPicture._id);
        await user.save();
        console.log("user with id of picture   " + user);
        res.status(200).json({ message: "הועלתה תמונה בהצלחה" })
    }
    catch (error) {
        res.status(400).json({ "error": error })

    }
}
const getAllPicture = async (req, res) => {
    try {
        const userPictury = await User.findOne({ name: req.headers['authorization'].name, password: req.headers['authorization'].password }).populate('picture')
        console.log("populate" + userPictury)
        res.status(200).json({ message: 'history picture of user', picture: userPictury })
    } catch (error) {
        res.status(400).json({ message: 'error', error: error })
    }
}

module.exports = { newPicture, getAllPicture, newMyPicture };