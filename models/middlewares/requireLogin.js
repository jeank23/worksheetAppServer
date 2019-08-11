module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ error: 'You must login!'});
    }

    next();
}

//VIDEO 110
//Esto debe ser usado en los archivos que lo ocupen dentro de la carpeta /route, 
//1. se debe importar
    //const requireLogin = require('../middlewares/requireLogin');