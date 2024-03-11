
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Box, Button } from '@chakra-ui/react'

export const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (<li ><Box display="flex" justifyContent="space-between" width='450px' alignItems='center' flexDirection="row" mt={6} ml={6}>
    <p>{name}: {number}</p>
    <Button variant='outline' ml={4} width='130px' onClick={handleDelete}>
      Delete Contact</Button>
  </Box></li>
  );

}