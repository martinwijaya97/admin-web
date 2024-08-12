import React, { useCallback, useEffect, useState } from 'react';
import { Typography, styled, Divider, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobList, resetJobList } from '../../redux/jobList/jobListSlice';
import JobListSearchForm from './components/JobListSearchForm';
import JobListItem from './components/JobListItem';

export const JobListRoot = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1),
}));

const JobListContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  border: `5px solid ${theme.palette.grey[300]}`,
  borderRadius: '5px',
}));

export const FormControlSection = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const JobListTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
}));

export const JobListDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const JobListButton = styled(Button)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: 'bold',
  fontSize: '16px',
  textTransform: 'none',
  backgroundColor: theme.palette.primary.light,
}));

const RenderJobListItem = ({ jobList }) => {
  const items = jobList?.map((job, index) => (
    <JobListItem key={index} job={job} />
  ));

  return <div>{items}</div>;
};

const JobListLoading = ({ loading }) => {
  if (loading) {
    return <Typography>Loading...</Typography>;
  }
};

const JobListError = ({ error }) => {
  if (error) {
    return <Typography color='error'>Error: {error}</Typography>;
  }
};

const JobListHeaderText = ({ isFilter, length }) => {
  const text = isFilter ? `Showing ${length} jobs` : 'Job List';
  return <JobListTitle>{text}</JobListTitle>;
};

const JobListPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isFilter, setIsFilter] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const { jobList, loading, error } = useSelector((state) => state.jobList);

  const handleGetJobList = useCallback(() => {
    setIsFilter(jobDescription || location || fullTimeOnly || page !== 1);
    dispatch(
      fetchJobList({
        page,
        description: jobDescription,
        location,
        full_time: fullTimeOnly ? true : false,
      })
    );
  }, [dispatch, jobDescription, location, fullTimeOnly, page]);

  useEffect(() => {
    handleGetJobList();
  }, [page]);

  const handleReset = () => {
    setPage(1);
    dispatch(resetJobList());
  };

  console.log('MARTIN', jobList);
  return (
    <JobListRoot>
      <JobListSearchForm
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        location={location}
        setLocation={setLocation}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
        onSearch={() => {
          handleReset();
          handleGetJobList();
        }}
      />
      <JobListContainer>
        <JobListHeaderText isFilter={isFilter} length={jobList.length} />
        <JobListDivider />
        <RenderJobListItem jobList={jobList} />
        <JobListLoading loading={loading} />
        {/* <JobListError error={error} /> */}
        <JobListButton variant='contained' onClick={() => setPage(page + 1)}>
          More Jobs
        </JobListButton>
      </JobListContainer>
    </JobListRoot>
  );
};

export default JobListPage;
