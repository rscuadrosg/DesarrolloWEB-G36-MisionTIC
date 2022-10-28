const Empleado = require("../models/empleados.model");

let response = {
    msg: "",
    exito: false
}


// METODO PARA CREACION DE DATOS
exports.create = function(req,res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = false,
        response.msg = "El Empleado se gaurdo correctamente"
        res.json(response)
    })

}

// METODO PARA BUSCAR
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}


//METODO PARA BUSCAR UNO
exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id}, function(err, empleado){
        res.json(empleado)
    })
}


//METODO UPDATE
exports.update = function(req,res){
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.log(err)
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se modifico correctamente"
        res.json(response)

    })
}


//METODO REMOVE
exports.remove = function(req,res){
    Empleado.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.log(err)
            response.exito = false
            response.msg = "Error al Eliminar Empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Empleado Eliminado Correctamente"
        res.json(response)
    })
}