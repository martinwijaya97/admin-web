import React, { useEffect } from 'react';
import { Typography, Button, Grid, Divider, Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobDetail } from '../../redux/jobDetail/jobDetailSlice';
import { useNavigate, useParams } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { ArrowBack } from '@mui/icons-material';

const JobDetailRoot = styled('div')(({ theme }) => ({
  minHeight: '100vh',
}));

const JobDetailContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  border: `5px solid ${theme.palette.grey[300]}`,
  borderRadius: '5px',
}));

const JobDetailSection = styled('div')(({ theme }) => ({}));

const JobDetailSectionCompany = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  border: `5px solid ${theme.palette.grey[300]}`,
  borderRadius: '5px',
}));

const JobDetailSectionApply = styled('div')(({ theme }) => ({
  marginTop: '12px',
  backgroundColor: 'white',
  border: `5px solid ${theme.palette.grey[300]}`,
  borderRadius: '5px',
}));

const JobDetailButtonBackText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.light,
}));

const JobDetailTitle = ({ job }) => (
  <>
    <Typography variant='subtitle1' color='textSecondary'>
      {job.type} / {job.location}
    </Typography>
    <Typography variant='h5' gutterBottom>
      {job.title}
    </Typography>
  </>
);

const JobDetailGridLeft = ({ job }) => (
  <JobDetailSection>
    <div dangerouslySetInnerHTML={{ __html: job.description }} />
  </JobDetailSection>
);

const JobDetailGridRightCompany = ({ company, logo, url }) => {
  return (
    <JobDetailSectionCompany>
      <div style={{ padding: '8px' }}>
        <Typography>{company}</Typography>
      </div>
      <Divider />
      <div style={{ padding: '8px' }}>
        <ImageWithFallback src={logo} alt={logo} />
        <Link href={url} target='_blank' rel='noopener noreferrer'>
          <Typography>{url}</Typography>
        </Link>
      </div>
    </JobDetailSectionCompany>
  );
};

const JobDetailGridRightApply = ({ url, howToApply }) => {
  return (
    <JobDetailSectionApply>
      <div style={{ padding: '8px' }}>
        <Typography>How to apply</Typography>
      </div>
      <Divider />
      <div style={{ padding: '8px' }}>
        <Typography>
          Email your resume to{' '}
          <Link
            href={url}
            style={{ color: 'blue', textDecoration: 'none' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            {url}
          </Link>{' '}
          or apply directly at
        </Typography>
        <div
          style={{
            blockOverflow: 'clip',
            wordBreak: 'break-all', // Ensures long words break to the next line
            overflowWrap: 'break-word',
            color: 'blue',
            textDecoration: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: howToApply }}
        />
      </div>
    </JobDetailSectionApply>
  );
};

const JobDetailGridRight = ({ job }) => (
  <JobDetailSection>
    <JobDetailGridRightCompany
      company={job.company}
      logo={job.company_logo}
      url={job.company_url}
    />
    <JobDetailGridRightApply
      url={job.company_url}
      howToApply={job.how_to_apply}
    />
  </JobDetailSection>
);

const JobDetailBackButton = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
      marginBottom: '12px',
    }}
  >
    <ArrowBack style={{ height: '15px' }} />
    <JobDetailButtonBackText>Back</JobDetailButtonBackText>
  </div>
);

const JobDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { jobDetail, loading } = useSelector((state) => state.jobDetail);

  useEffect(() => {
    dispatch(fetchJobDetail(params.id));
  }, [dispatch, params.id]);

  if (!jobDetail || loading) {
    return <LoadingSkeleton />;
  }

  return (
    <JobDetailRoot>
      <JobDetailBackButton onClick={() => navigate(-1)} />
      <JobDetailContainer>
        <JobDetailTitle job={jobDetail} />
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <JobDetailGridLeft job={jobDetail} />
          </Grid>
          <Grid item xs={12} md={4}>
            <JobDetailGridRight job={jobDetail} />
          </Grid>
        </Grid>
      </JobDetailContainer>
    </JobDetailRoot>
  );
};

export default JobDetailPage;
