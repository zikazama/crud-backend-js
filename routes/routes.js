// Import express
import express from "express";
// Import Controller Product
import { 
    getBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang
 } from "../controllers/Barang.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua product
router.get('/barang', getBarang);
// Route get product by id
router.get('/barang/:id', getBarangById);
// Route create product baru
router.post('/barang', createBarang);
// Route update product by id
router.put('/barang/:id', updateBarang);
// Route delete product by id
router.delete('/barang/:id', deleteBarang);
 
// export router
export default router;