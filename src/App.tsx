import React from 'react';
import { useAdBlockDetector } from './useAdBlockDetector';

interface IProps {
  onDetected?: () => void;
}

export const App: React.FC<IProps> = () => {
  const { detected } = useAdBlockDetector();

  return <div>AdBlocker Detected: {JSON.stringify(detected)}</div>;
};
