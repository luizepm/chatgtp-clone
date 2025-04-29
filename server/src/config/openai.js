const OpenAI = require('openai');

class OpenAIConfig {
    
    static configuration() {
        const configuration = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        return configuration;
    }

    static async createCompletion(inputModel) {
        const openAi = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const response = await openAi.responses.create(this.textCompletion(inputModel));

        if (response.status !== "completed") {
            throw new Error('Error in OpenAI API response');
        }

        return response;
    }

    static textCompletion({prompt}) {
        return {
            model: "gpt-4.1",
            input: `${prompt}`,
            text: {
                "format": {
                "type": "text"
                }
            },
            reasoning: {},
            tools: [],
            temperature: 0,
            max_output_tokens: 2048,
            top_p: 1,
            store: true
          };
    }
}

module.exports = OpenAIConfig;