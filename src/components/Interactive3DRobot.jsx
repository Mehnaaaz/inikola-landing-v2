import { Suspense, lazy, useState, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Interactive3DRobot({ scene }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Hide Spline badge after load
  useEffect(() => {
    if (isLoaded) {
      const hideBadge = () => {
        // Find and hide all Spline links
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(link => {
          const href = link.href || '';
          const text = link.textContent || '';
          
          if (href.includes('spline') || text.toLowerCase().includes('spline') || text.toLowerCase().includes('built with')) {
            link.style.display = 'none';
            link.style.opacity = '0';
            link.style.visibility = 'hidden';
          }
        });
      };

      // Run multiple times to catch badge
      setTimeout(hideBadge, 500);
      setTimeout(hideBadge, 1000);
      setTimeout(hideBadge, 2000);
    }
  }, [isLoaded]);

  return (
    <div className="robot3d-wrapper">
      {!isLoaded && !hasError && (
        <div className="loading-3d">
          <div className="spinner-3d">
            <svg className="spinner-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
            <p>Loading 3D Robot...</p>
          </div>
        </div>
      )}
      
      {hasError && (
        <div className="robot3d-error">
          <p>Unable to load 3D model</p>
        </div>
      )}

      <Suspense fallback={null}>
        <div className={`robot3d-container ${isLoaded ? 'robot3d-loaded' : ''}`}>
          <Spline 
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      </Suspense>
    </div>
  );
}