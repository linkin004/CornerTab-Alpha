import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isCornerPage = location.pathname.startsWith('/corner');

  return (
    <div className={cn(
      "min-h-screen transition-all duration-300",
      isCornerPage 
        ? "corner-theme bg-black" 
        : "bg-gradient-to-br from-gray-50 to-blue-50/30"
    )}>
      <Navigation />
      <main className="relative">
        {children}
      </main>
      <footer className={cn(
        "border-t backdrop-blur-sm mt-20 transition-all duration-300",
        isCornerPage 
          ? "bg-black/90 border-red-500/30" 
          : "bg-white/80 border-gray-200/50"
      )}>
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              {isCornerPage ? (
                <>
                  <p className="text-red-400 font-mono text-sm font-bold">
                    Raw. Unfiltered. Truth.
                  </p>
                  <p className="text-gray-500 font-mono text-xs mt-1">
                    The Corner - Where the real talk lives
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-600 text-sm font-medium">
                    Building the future, one corner at a time.
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Artifacts for what comes next.
                  </p>
                </>
              )}
            </div>
            <div className="text-center md:text-right">
              <p className={cn(
                "text-sm font-medium",
                isCornerPage ? "text-gray-400 font-mono" : "text-gray-600"
              )}>
                Vibed with{' '}
                <a 
                  href="https://soapbox.pub/mkstack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors duration-300 underline",
                    isCornerPage 
                      ? "text-red-500 hover:text-red-400 corner-glow" 
                      : "text-blue-600 hover:text-blue-700"
                  )}
                >
                  MKStack
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}