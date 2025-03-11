import { MessageSquare } from 'lucide-react';
import { ChatHistory } from '../types';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

interface SidebarProps {
  chatHistories: ChatHistory[];
  isOpen: boolean;
}

export function Sidebar({ chatHistories, isOpen }: SidebarProps) {
  return (
    <div
      className={cn(
        'absolute md:relative w-64 h-full bg-muted transition-transform duration-300 ease-in-out z-10',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0'
      )}
    >
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Histórico de conversas</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-4 space-y-2">
          {chatHistories.map((chat) => (
            <button
              key={chat.id}
              className="w-full p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left flex items-center space-x-2"
            >
              <MessageSquare size={18} />
              <span>{chat.title}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}