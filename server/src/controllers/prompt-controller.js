const imputPrompt = require('../models/input-prompt');
const openai = require('../config/openai');

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration();
        const inputModel = new imputPrompt(req.body);

        try {
            const response = await openaiAPI.responses.create(openai.textCompletion(inputModel));
            
            return res.status(200).json({ 
                sucess: true,
                data: response.output_text
            });
        } catch (error) {
            const errorMessage = `Message: ${error.message}, Cause: ${error.cause}, Code: ${error.cause.code}`;

            return res.status(500).json({ 
                sucess: false,
                error: errorMessage ? errorMessage : 'An error occurred while processing your request.' 
            });
        }
    }
}