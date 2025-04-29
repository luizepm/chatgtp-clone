import axios from 'axios';

const URL_API = process.env.URL_API_PROMPT || 'http://localhost:5555/api/promp';

export const makeRequest = async (message) => {
    // const {data} = await axios.post(URL_API, message);
    //return data;
    var mockResponse = {
        data: "Claro! Aqui vão algumas sugestões de nomes legais para uma aula de Node.js integrada com ChatGPT:\n\n1. **NodeGPT: Criando Bots Inteligentes com Node.js e ChatGPT**\n2. **Conversando com o Futuro: Node.js + ChatGPT na Prática**\n3. **Chatbots Inteligentes: Integrando Node.js com ChatGPT**\n4. **Node Talks: Desenvolvendo Assistentes com ChatGPT**\n5. **Automação de Conversas: Node.js e ChatGPT em Ação**\n6. **Do Zero ao Bot: Node.js e ChatGPT para Iniciantes**\n7. **NodeGPT Lab: Construindo Chatbots com Inteligência Artificial**\n8. **Node.js e ChatGPT: Sua Primeira Aplicação de IA**\n9. **Bate-papo Inteligente: Node.js com ChatGPT**\n10. **Node.js + ChatGPT: Desenvolvendo Soluções Conversacionais**\n\nSe quiser um nome mais descontraído ou formal, posso adaptar! Qual estilo você prefere?"
    }   

    return mockResponse;
}