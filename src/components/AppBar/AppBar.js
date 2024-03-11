import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Box} from "@chakra-ui/react"

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header><Box display="flex" alignItems="center" justifyContent="space-between" py={4} px={10} bg='tomato' w="100%">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </header>
  );
};