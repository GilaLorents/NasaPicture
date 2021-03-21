const mongoose = require('mongoose');
const pictureSchama = mongoose.Schema(
    {
        copyright: {
            type: String,
        },
        date: {
            type: String,
        },
        explanation: {
            type: String,

        },
        hdurl: {
            type: String,

        },
        media_type: {
            type: String,

        },

        service_version: {
            type: String,

        },
        title: {
            type: String,

        },
        url: {
            type: String,

        },
       



        user:
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',

        }

    }
)
module.exports = mongoose.model('Picture', pictureSchama)
// copyright=picture
// date-date
// explanation-הסבר מה רואים בתמונה
// hdurl=לינק חסום
// title   
// url