import { useAuth } from 'hooks/useAuth';
import { LogLink, Nav } from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LogLink to="/">Home</LogLink>
      {isLoggedIn && (
      <LogLink to="/contacts">Contacts</LogLink>
      )}
    </Nav>
  );
};
