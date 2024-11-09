import Form from "../models/formulario_model.js";
import User from "../models/usuario_model.js";

export const store = async (req,res) => {
    try {
        const content = req.body;
        content.user = req.user;
        const form = await Form.create(content)
        const user = await User.findById(content.user);
        user.exp += 5;
        if(user.exp > user.level * 10.2){
            user.level += 1;
        }
        await User.findByIdAndUpdate(req.user, user);
        res.status(201).json(form);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const index = async (req, res) => {
    try {
        const content = await Form.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (req,res) => {
    try {
        const content = await Form.findById(req.params.id).exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await Form.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

export const destroy = async (req, res) => {
    try {
        await Form.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}