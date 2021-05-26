// Import model Product
import Product from "../models/Barang.js";
 
// Get semua product
export const getBarang = async (req, res) => {
    try {
        const product = await Barang.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product berdasarkan id
export const getBarangById = async (req, res) => {
    try {
        const product = await Barang.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create product baru
export const createBarang = async (req, res) => {
    try {
        await Barang.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product berdasarkan id
export const updateBarang = async (req, res) => {
    try {
        await Barang.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product berdasarkan id
export const deleteBarang = async (req, res) => {
    try {
        await Barang.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}