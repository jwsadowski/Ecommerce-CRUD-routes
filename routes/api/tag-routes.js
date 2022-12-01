const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((TagsData) => {
    res.json(TagsData);
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne().then((TagsData) => {
    res.json(TagsData)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const TagsData = await Tag.create(req.body);
    res.status(200).json(TagsData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const TagsData = await Tag.update(req.body);
    res.status(200).json(TagsData);
  } catch (err) {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const TagsData = await Tag.destroy(req.body);
    res.status(200).json(TagsData);
  } catch (err) {
    res.status(400).json(err)
  }
  // delete on tag by its `id` value
});

module.exports = router;
