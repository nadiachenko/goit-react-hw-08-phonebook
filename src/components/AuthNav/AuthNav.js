import { NavLink } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react'

export const AuthNav = () => {
  return (
    <div><Box display="flex" alignItems="center" justifyContent="space-between" >
      <NavLink to="/register"><Box mr={8} >
        Register  </Box>
      </NavLink>
      <NavLink to="/login">
        <Button variant='outline' > Log In</Button>
      </NavLink>  </Box>
    </div>
  );
};