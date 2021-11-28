const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    res.json({
        msg: "GET"
    });
}

const usuariosPut = (req = request, res = response) => {
    res.json({
        msg: "PUT"
    });
}

const usuariosPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: "POST",
        nombre, 
        edad
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: "DELETE"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
};