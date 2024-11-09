import User from "../models/usuario_model.js"
import Formulario from "../models/formulario_model.js";

export const store = async (req,res) => {
    try {
        const content = req.body;
        if(content.role != "PROFESSOR"){
            content.alunos = undefined;
        }
        const user = await User.create(content);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const signup = async(req, res) => {

}

export const login = async(req, res) => {
    
}

export const index = async (req, res) => {
    try {
        const content = await User.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (req,res) => {
    try {
        const content = await User.findById(req.params.id).exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

export const consultarPresencas = async(req, res) => {
    try{
        //Funciona apenas com autenticação
        if(req.user.role == "PROFESSOR"){
            let content = await User.findById(req.user._id).populate("alunos").exec();
            content = content.alunos;
            res.status(200).json(content);
        } else if(req.user.role == "ALUNO"){
            const content = await Formulario.find({user: req.user._id});
            res.status(200).json(content);
        } else{
            res.status(400).json({
                error: "Unauthorized"
            });
        }
            
    } catch(error){
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

export const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}