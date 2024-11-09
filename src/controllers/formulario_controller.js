import Form from "../models/formulario_model.js"

export const store = async (req,res) => {
    try {
        await Form.create(req.body);
        res.json();
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