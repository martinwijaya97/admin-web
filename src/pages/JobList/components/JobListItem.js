import React from 'react';
import { Typography, Divider, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import calculateTimeAgo from '../../../Utils/CalculateDate';

export const JobListItemRoot = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const JobListItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.light,
}));

const JobListItem = ({ job }) => {
  if (!job) {
    return;
  }

  const timeAgo = job?.created_at ? calculateTimeAgo(job?.created_at) : '';

  return (
    <JobListItemRoot>
      <Link to={`/job/${job?.id}`} style={{ textDecoration: 'none' }}>
        <div style={{ padding: '10px 0' }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <JobListItemTitle>{job?.title}</JobListItemTitle>
            <Typography variant='body2' color='textSecondary' fontWeight='bold'>
              {job?.location}
            </Typography>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Box display='flex' alignItems='center'>
              <Typography variant='body2' color='textSecondary' mr={0.5}>
                {job?.company} -
              </Typography>
              <Typography variant='body2' color='green'>
                {job?.type}
              </Typography>
            </Box>
            <Typography variant='body2' color='textSecondary'>
              {timeAgo}
            </Typography>
          </Box>
        </div>
      </Link>
      <Divider />
    </JobListItemRoot>
  );
};

export default JobListItem;
