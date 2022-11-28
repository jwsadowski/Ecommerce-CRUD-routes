const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Categories.findAll().then((CategoriesData) => {
    res.json(CategoriesData);
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Categories.findOne().then((CategoriesData) => {
    res.json(CategoriesData)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const CategoriesData = await Categories.create(req.body);
    res.status(200).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
  
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const CategoriesData = await Categories.update(req.body);
    res.status(200).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const CategoriesData = await Categories.destroy(req.body);
    res.status(200).json(CategoriesData);
  } catch (err) {
    res.status(400).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
