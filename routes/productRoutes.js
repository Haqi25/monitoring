const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require(path.join(__dirname, '../controllers/productController'));
// Tampilkan halaman tambah produk
// Tampilkan semua produk
router.get('/', productController.getProducts);

// Tampilkan form tambah produk
router.get('/add', productController.showAddForm);

// Tambah produk baru
router.post('/add', productController.addProduct);

// Tampilkan form edit produk
router.get('/edit/:id', productController.showEditForm);

// Update produk
router.post('/edit/:id', productController.editProduct);

// Hapus produk
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;