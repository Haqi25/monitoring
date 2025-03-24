const Product = require('../models/Product');

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};

// Tampilkan Form Tambah Produk
exports.showAddForm = (req, res) => {
  res.render('add');
};

// Add New Product
exports.addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    await Product.create({ name, price });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};

// Tampilkan Form Edit Produk
exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send('Produk tidak ditemukan');
    }
    res.render('edit', { product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};

// Edit Product
exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    await Product.findByIdAndUpdate(id, { name, price });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};
