import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations/operation';
import { selectLoading } from 'redux/contacts/selectors';


const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
      </>
      <>
        <label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
      </>
      <button type="submit" disabled={isLoading}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
