const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/sample/{id}:
 *   get:
 *     summary: Get a sample resource
 *     description: Get a specific sample resource by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sample resource to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.get('/api/sample/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, message: `You requested sample with ID: ${id}` });
});

module.exports = router;
