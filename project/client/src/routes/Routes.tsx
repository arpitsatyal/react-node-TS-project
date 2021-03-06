import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { SignUpPage } from '../pages/SignupPage/SignupPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/contacts' element={<ContactPage />} />
    </Routes>
  );
};
