import React, { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import { Pathname } from '@types';
const CoursesPage = lazy(() => import('@pages/Courses'));
const HomePage = lazy(() => import('@pages/Home'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={Pathname.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={Pathname.COURSES} element={<CoursesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
