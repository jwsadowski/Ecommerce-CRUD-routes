const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    })
    res.json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
}),

router.get('/:id', async (req, res) => { 
  try{
    const tag = await Tag.findOne({
      include: [{model: Product}],
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  } catch (err) {
    res.status(500).json(err)
  }
}),

router.post('/', async (req, res) => {
  try {
    const tagsData = await Tag.create(req.body);
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err)
  }
  // delete on tag by its `id` value
});

module.exports = router;
