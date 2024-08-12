import React from 'react';
import { styled } from '@mui/material';

const Image = styled('img')(({ theme }) => ({
  height: 'auto',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const ImageWithFallback = ({ src, alt }) => {
  const fallbackSrc = 'https://via.placeholder.com/200x100';
  return (
    <Image
      src={src || fallbackSrc}
      alt={alt || 'Image not available'}
      onError={(e) => {
        e.target.onerror = null; // Prevents infinite loop if fallback also fails
        e.target.src = fallbackSrc; // Set fallback image if the original fails to load
      }}
    />
  );
};

export default ImageWithFallback;
