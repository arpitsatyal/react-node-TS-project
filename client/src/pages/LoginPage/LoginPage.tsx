import React from 'react';
import { StyledLoginPage, StyledNavLink } from './styled/Login.styled';
import { Form } from './Form';
import { IoChevronBackCircle } from 'react-icons/io5';
import { theme } from '../../styles/theme';

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <span>
          <StyledNavLink to={'/'}>
            <IoChevronBackCircle size={30} color={theme.color.primary} />
          </StyledNavLink>
        </span>
        <Form />
      </div>
    </StyledLoginPage>
  );
};