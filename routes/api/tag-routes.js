const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  }).then((tagData) => {
    res.json(tagData);
  });
});


router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [Product]
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tagData) => {
    res.json(tagData);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((tagData) => {
    res.json(tagData);
  });
});

module.exports = router;
