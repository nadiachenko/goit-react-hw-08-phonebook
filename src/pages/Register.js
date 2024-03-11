import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { FormLabel, Box, Input, Button } from '@chakra-ui/react'


export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>Username</FormLabel>
      <Input type="text" name="name" />
      <FormLabel>Email</FormLabel>
      <Input type="email" name="email" />
      <FormLabel mt={2} > Password</FormLabel>
      <Input type="password" name="password" />
      <Button type="submit" variant='outline' mt={4}>Register</Button>
    </form>
  </Box>
  );
};
