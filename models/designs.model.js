const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesignsSchema = new Schema({
    design_id:{type: String, require: true, max:60},
    nombre:{type: String, required: true, max:60},
    descripcion:{type: String, required: false, max:150},
    urlimg:{type: String, require: true}
});

module.exports = mongoose.model("designs", DesignsSchema);