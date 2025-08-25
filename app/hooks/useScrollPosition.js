import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollPos({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener('scroll', handleScroll);

    // Initialize scroll position on mount
    handleScroll();

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPos;
}

