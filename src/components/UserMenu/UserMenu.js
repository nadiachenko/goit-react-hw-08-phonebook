import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Button } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div ><Box display="flex" alignItems="center" justifyContent="space-between" >
      <p><Box mr={8} >Hello, {user.name} </Box></p>
      <Button variant='outline' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button></Box>
    </div>
  );
};
