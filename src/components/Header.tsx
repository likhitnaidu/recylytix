import { Recycle, Book, MapPin, Menu, X } from 'lucide-react';

interface HeaderProps {
  onGuideToggle: () => void;
  isGuideOpen: boolean;
}

const Header = ({ onGuideToggle, isGuideOpen }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border px-4 md:px-6 py-3 flex items-center justify-between z-[1500] relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center eco-button-primary p-0">
          <Recycle className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg md:text-xl text-foreground">
            Recy<span className="eco-gradient-text">Ly</span>Tix
          </h1>
          <p className="text-xs text-muted-foreground hidden md:block">Recycling Locator & Guide</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2">
        <button
          onClick={onGuideToggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            isGuideOpen
              ? 'bg-primary text-primary-foreground'
              : 'eco-button-secondary'
          }`}
        >
          {isGuideOpen ? (
            <>
              <X className="w-4 h-4" />
              <span className="hidden md:inline">Close Guide</span>
            </>
          ) : (
            <>
              <Book className="w-4 h-4" />
              <span className="hidden md:inline">Material Guide</span>
            </>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
