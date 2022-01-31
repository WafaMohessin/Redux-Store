const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Electronics' },
    { name: 'Clothes'},
    { name: 'Drinks'},
    { name: 'Food'},
    { name: 'Books'},
    { name: 'Cleansers'},
    { name: 'Toys'},
    { name: 'auto supplies'},
    { name: 'House applicants'}
  ]);


  console.log('products seeded');

  process.exit();
});