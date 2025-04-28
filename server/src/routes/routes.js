const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Router();

routes.post('/api/prompt', promptController.sendText);

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is running',
        status: true,
    });
});

module.exports = routes;