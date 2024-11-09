import Admin from "../models/admin_model.js";
import User from "../models/usuario_model.js";
import Form from "../models/formulario_model.js"


export const entradaInstituicao = async(req,res, next) => {
    try {
        if(Admin.includes(req.params.digital) || User.includes(req.params.digital)){
            this.entryHour = 17;
            res.json("Entrada com sucesso!")    
        }
    } catch (error) {
        console.log(error);
    }
}


