const User = require("../models/users.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

exports.login = function(req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    User.findOne({ user: req.body.user, pass: hashedpass}, function(err, user){
        let response = {token: null}

        if(user !== null){
            response.token = jwt.sign({
                id: user._id,
                user: user.user
            }, "__recret__", {expiresIn:'12h'}
            )
        }
        res.json(response);

    })

}