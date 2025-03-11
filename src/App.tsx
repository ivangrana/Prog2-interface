import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/ChatInput';
import { Header } from './components/Header';
import { Message, ChatHistory } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá, tudo bem? eu sou um chatbot assistente de saude. Você pode me dizer qual a sua necessidade ? Você pode consultar exames,historicos ou marcar uma consulta para ser enviada para o atendimento.",
      isBot: true,
    },
  ]);

  const [chatHistories] = useState<ChatHistory[]>([
    { id: 1, title: 'Chat history 1' },
    { id: 2, title: 'Chat history 2' },
    { id: 3, title: 'Chat history 3' },
    { id: 4, title: 'Chat history 4' },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false,
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: "Tudo bem, vou te ajudar. Para quando você gostaria de agendar sua consulta ?",
      isBot: true,
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar chatHistories={chatHistories} isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        <MessageList messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;