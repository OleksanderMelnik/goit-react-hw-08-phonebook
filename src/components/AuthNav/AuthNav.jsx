
import { Div, LogLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <LogLink to="/register">Register</LogLink>
      <LogLink to="/login">Sign In</LogLink>
    </Div>
  );
};
