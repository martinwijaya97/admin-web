import React from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const ButtonSearch = styled('button')(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1),
  width: '100px',
  height: '40px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: theme.palette.grey[400],
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const JobListSearchForm = ({
  jobDescription,
  setJobDescription,
  location,
  setLocation,
  fullTimeOnly,
  setFullTimeOnly,
  onSearch,
}) => {
  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFullTimeOnlyChange = (event) => {
    setFullTimeOnly(event.target.checked);
  };

  const handleSubmit = async () => {
    await onSearch();
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12} sm={4}>
        <Typography style={{ fontWeight: 'bold' }}>Job Description</Typography>
        <TextField
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          variant='outlined'
          fullWidth
          InputProps={{
            startAdornment: (
              <BusinessIcon position='start' style={{ marginRight: '4px' }} />
            ),
          }}
          placeholder='Filter by title, benefits, companies, expertise'
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography style={{ fontWeight: 'bold' }}>Location</Typography>
        <TextField
          value={location}
          onChange={handleLocationChange}
          variant='outlined'
          fullWidth
          InputProps={{
            startAdornment: <LocationOnIcon position='start' />,
          }}
          placeholder='Filter by city, state, zip code or country'
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography style={{ fontWeight: 'bold' }}>
              Full Time Only
            </Typography>
          }
          value={fullTimeOnly}
          onChange={handleFullTimeOnlyChange}
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <ButtonSearch color='primary' fullWidth onClick={handleSubmit}>
          Search
        </ButtonSearch>
      </Grid>
    </Grid>
  );
};

export default JobListSearchForm;
