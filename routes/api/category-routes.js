const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{Product}]
    })
    res.json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
}),
  

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({
      include: [{Product}]
    })
    res.json(category)
  } catch (err) {
      res.status(500).json(err)
  }
}), 

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
