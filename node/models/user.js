const mongoose = require('mongoose');
const userSchama = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        lastName:{
            type:String,
            require:true
            
        },
      
        password: {
            type: String,
            minlength: 5
        },
        picture: [
            {
                type: mongoose.Schema.Types.ObjectId, ref: 'Picture'
            }
        ]
    }
)
module.exports = mongoose.model('User', userSchama)
// copyright=picture
// date-date
// explanation-הסבר מה רואים בתמונה
// hdurl=לינק חסום
// title   
// url