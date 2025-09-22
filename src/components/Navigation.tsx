import { Link, useLocation } from 'react-router-dom';
import { Layers, FileText, ShoppingCart, Image, Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoginArea } from '@/components/auth/LoginArea';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { path: '/', label: 'Home', icon: Layers },
    { path: '/articles', label: 'Articles', icon: FileText },
    { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart },
    { path: '/gallery', label: 'Gallery', icon: Image },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isCornerPage = location.pathname.startsWith('/corner');

  return (
    <nav className={cn(
      "border-b backdrop-blur-sm sticky top-0 z-50 transition-all duration-300",
      isCornerPage 
        ? "bg-black/90 border-red-500/30" 
        : "bg-white/80 border-gray-200/50"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={cn(
              "p-2 rounded-xl transition-all duration-300",
              isCornerPage 
                ? "bg-red-500/20 group-hover:bg-red-500/30" 
                : "bg-blue-500/10 group-hover:bg-blue-500/20"
            )}>
              <Layers className={cn(
                "h-6 w-6 transition-colors duration-300",
                isCornerPage ? "text-red-500" : "text-blue-600"
              )} />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isCornerPage ? "text-red-500 corner-glow" : "text-gray-900"
            )}>
              CornerTab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                  isActive(path)
                    ? isCornerPage
                      ? "text-red-500 bg-red-500/10 corner-glow"
                      : "text-blue-600 bg-blue-50"
                    : isCornerPage
                      ? "text-gray-400 hover:text-red-400 hover:bg-red-500/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
            
            {/* The Corner - Special Section */}
            <Link
              to="/corner"
              className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-bold ml-4 border",
                location.pathname.startsWith('/corner')
                  ? "text-red-500 bg-red-500/20 border-red-500/50 corner-glow corner-border-glow"
                  : "text-red-600 bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300"
              )}
            >
              <Zap className="h-4 w-4" />
              <span>The Corner</span>
            </Link>
          </div>

          {/* Login Area */}
          <div className="hidden md:block">
            <LoginArea className="max-w-60" />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "md:hidden transition-colors duration-300",
              isCornerPage 
                ? "text-red-500 hover:text-red-400 hover:bg-red-500/10" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={cn(
            "md:hidden border-t py-4 space-y-2 transition-colors duration-300",
            isCornerPage ? "border-red-500/30" : "border-gray-200/50"
          )}>
            {mainNavItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium",
                  isActive(path)
                    ? isCornerPage
                      ? "text-red-500 bg-red-500/10"
                      : "text-blue-600 bg-blue-50"
                    : isCornerPage
                      ? "text-gray-400 hover:text-red-400 hover:bg-red-500/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
            
            {/* The Corner - Mobile */}
            <Link
              to="/corner"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-bold border mt-4",
                location.pathname.startsWith('/corner')
                  ? "text-red-500 bg-red-500/20 border-red-500/50"
                  : "text-red-600 bg-red-50 border-red-200"
              )}
            >
              <Zap className="h-5 w-5" />
              <span>The Corner</span>
            </Link>
            
            <div className={cn(
              "px-4 pt-4 border-t transition-colors duration-300",
              isCornerPage ? "border-red-500/30" : "border-gray-200/50"
            )}>
              <LoginArea className="w-full" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}