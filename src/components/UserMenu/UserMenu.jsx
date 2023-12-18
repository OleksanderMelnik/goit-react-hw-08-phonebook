import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations/operation';
import { useAuth } from 'hooks/useAuth';
import { Btn, UserName, Div } from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <UserName>Welcome, {user.name}</UserName>
      <Btn
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Btn>
    </Div>
  );
};
