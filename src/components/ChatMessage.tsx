import React from 'react';
import { Message } from '../types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn('flex', message.isBot ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'max-w-[80%] rounded-lg p-4',
          message.isBot
            ? 'bg-green-600 text-secondary-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        <p className="text-sm md:text-base">{message.text}</p>
      </div>
    </div>
  );
}