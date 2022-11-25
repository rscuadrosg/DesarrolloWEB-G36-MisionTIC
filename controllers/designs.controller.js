const Design = require("../models/designs.model");

let response = {
    msg: "",
    exito: false
}


// METODO PARA CREACION DE DATOS
exports.create = function(req,res){
    let design = new Design({
        design_id: req.body.design_id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        urlimg: req.body.urlimg
    })

    design.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el Diseño"
            res.json(response)
            return;
        }

        response.exito = false,
        response.msg = "El Diseño se gaurdo correctamente"
        //ESTADO 201 - CREATED
        res.status(201).json(response)
    })

}

// METODO PARA BUSCAR
exports.find = function(req,res){
    Design.find(function(err, designs){
        //
        res.json(designs)
    })
}


//METODO PARA BUSCAR UNO
exports.findOne = function(req,res){
    Design.findOne({_id: req.params.id}, function(err, design){
        res.json(design)
    })
}


//METODO UPDATE
exports.update = function(req,res){
    let design = {
        design_id: req.body.design_id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        urlimg: req.body.urlimg
    }

    Design.findByIdAndUpdate(req.params.id, {$set: design}, function(err){
        if(err){
            console.log(err)
            response.exito = false,
            response.msg = "Error al modificar el Diseño"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El Diseño se modifico correctamente"
        res.json(response)

    })
}


//METODO REMOVE
exports.remove = function(req,res){
    Design.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.log(err)
            response.exito = false
            response.msg = "Error al Eliminar Diseño"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Diseño Eliminado Correctamente"
        res.json(response)
    })
}