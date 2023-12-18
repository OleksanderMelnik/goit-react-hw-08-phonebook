import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const LogLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  :hover,
  :focus {
    box-shadow: none;
    color: white;
    background: #FD9222;
  }
`;