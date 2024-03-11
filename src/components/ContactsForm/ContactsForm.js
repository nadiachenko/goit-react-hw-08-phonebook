import { useState } from "react"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { FormLabel, Box, Input, Button } from '@chakra-ui/react'

export default function ContactsForm({ onSubmit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };
  const recordName = (e) => {
    setName(e.currentTarget.value);
  }
  const recordNumber = (e) => {
    setNumber(e.currentTarget.value.toString());
  }
  return (<Box display="flex" justifyContent="center" flexDirection="column" mt={4} ml={6}><form onSubmit={handleSubmit} >
    <FormLabel>Contact Name</FormLabel>
    <Input type="text" name="name" onChange={recordName} value={name} required size='sm' width="300px" />
    <FormLabel>Contact Number</FormLabel>
    <Input type="tel" name="number" onChange={recordNumber} value={number} required size='sm' width="300px" />
    <div> <Button variant='outline' type="submit" mt={4} >Add Contact
     </Button></div>
  </form>
  </Box>
  );
};