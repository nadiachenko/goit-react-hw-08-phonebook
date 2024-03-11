import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { FormLabel, Box, Input, Button } from '@chakra-ui/react'

export default function LoginForm() {
  const dispatch = useDispatch();

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

  return (<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>Email</FormLabel>
      <Input type="email" name="email" size='sm' width="300px" />
      <FormLabel mt={2} > Password</FormLabel>
      <Input type="password" name="password" size='sm' width="300px" />
      <div>
        <Button type="submit" variant='outline' mt={4}>Log In</Button>
      </div>
    </form>
  </Box>

  );
};
