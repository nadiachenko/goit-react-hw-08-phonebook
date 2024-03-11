import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box } from '@chakra-ui/react'



export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box display="flex" alignItems="center" justifyContent="space-between" > <Box mr={8} >
        <NavLink to="/"> Home</NavLink>
      </Box>
        {isLoggedIn && (
          <NavLink to="/contacts">Contacts</NavLink>
        )}</Box>
    </nav>
  );
};
