import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobDetail from '../pages/JobDetail';
import JobList from '../pages/JobList';
import Layout from '../Layout';
import LoginPage from '../pages/Login/LoginPage';

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route
        path='/'
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      /> */}
      <Route
        path='/'
        element={
          <Layout>
            <JobList />
          </Layout>
        }
      />
      <Route
        path='/job/:id'
        element={
          <Layout>
            <JobDetail />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default AppRouter;
