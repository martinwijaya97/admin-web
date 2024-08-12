import React from 'react';
import { Skeleton, Box } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Skeleton variant='rectangular' width='100%' height={200} />
      <Skeleton variant='text' width='60%' height={40} sx={{ marginTop: 2 }} />
      <Skeleton variant='text' width='80%' height={40} />
      <Skeleton variant='text' width='90%' height={40} />
      <Skeleton
        variant='rectangular'
        width='100%'
        height={400}
        sx={{ marginTop: 2 }}
      />
    </Box>
  );
};

export default LoadingSkeleton;
