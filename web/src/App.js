import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css'

import { makeRequest } from './api/api.js';
import SideMenu from './components/SideMenu/Sidemenu'
import ChatMessage from './components/ChatMessage/ChatMessage'

function App() {

  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message:"Como posso te ajudar hoje?"
  }])


  async function handleSubmit(e) {
    // Evita o comportamento padrão do formulário
    e.preventDefault();
    
    // chamada para API com a integração do ChatGPT
    let response = await makeRequest({prompt: input})

    // pega a resposta da api e faz a quebra de linha pelo \n retornando um parágrafo para cada linha
    response = response.data.split('\n').map(line => <p>{line}</p>);

    // Adiciona a mensagem do usuário e a resposta do ChatGPT ao log de chat
    // "... spread operator", guarda o que já existe no chatLog e adiciona o que vem depois
    setChatLog([...chatLog, {
      user: 'me', 
      message: `${input}`
    },{
      user: 'gpt', 
      message: response
    }])

    // Limpa o input
    setInput("")
  }

  return (
    <div className='App'>

      <SideMenu></SideMenu>

      <section className='chatbox'>

          <div className='chat-log'>
            {chatLog.map((message, index)=>(
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input
                rows='1'
                className='chat-input-textarea'
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </form>
          </div>
      </section>

    </div>
  );
}

export default App;