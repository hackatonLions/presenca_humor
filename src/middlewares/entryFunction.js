import Admin from "../models/admin_model.js";
import User from "../models/usuario_model.js";

const entradaInstituicao = async (req, res, next) => {
    try {
        const digital = req.params.digital;
        const adminExists = await Admin.findOne({ digital });
        const userExists = await User.findOne({ digital });

        if (adminExists || userExists) {
            const entryHour = 17; // Armazene isso onde for necessário
            res.json("Entrada com sucesso!");
        } else {
            res.status(404).json("Entrada não autorizada.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Erro ao processar a entrada.");
    }
}

export default entradaInstituicao;