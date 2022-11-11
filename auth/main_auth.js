const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "__recret__")
        req.user = decoded
        next();
    } catch(error){
        res.status(401)
        res.json({code:4, msg:"No tienes permisos para acceder al contenido"})
        // res.json() AQUI SE DEBE ENVIAR LOS DATOS DEL USUARIO
    }
}

module.exports = auth