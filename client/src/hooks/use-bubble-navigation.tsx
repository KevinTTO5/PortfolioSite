import { useState, useEffect, useCallback } from "react";

export function useBubbleNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleBubbleMenu = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleMenuItemClick = useCallback((targetId: string) => {
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      // Close menu after navigation
      setIsExpanded(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      const heroHeight = heroElement.offsetHeight;
      const shouldHaveScrolled = scrollY > heroHeight * 0.3;
      
      if (shouldHaveScrolled !== hasScrolled) {
        setHasScrolled(shouldHaveScrolled);
      }
    }
  }, [hasScrolled]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let scrollTimeout: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Close bubble menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const bubbleMenu = document.getElementById('bubbleMenu');
      if (isExpanded && bubbleMenu && !bubbleMenu.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [handleScroll, isExpanded]);

  return {
    isExpanded,
    hasScrolled,
    toggleBubbleMenu,
    handleMenuItemClick
  };
}
