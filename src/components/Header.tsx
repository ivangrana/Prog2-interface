import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <div className="border-b p-4 bg-background flex justify-between items-center">
      <Button
        onClick={onToggleSidebar}
        variant="ghost"
        size="icon"
        className="md:hidden"
      >
        <Menu size={24} />
      </Button>
      <ThemeToggle />
    </div>
  );
}