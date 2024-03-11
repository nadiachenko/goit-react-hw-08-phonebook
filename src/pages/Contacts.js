import { Contact } from '../components/Contact/Contact'
import { Filter } from '../components/Filter/Filter'
import ContactForm from "../components/ContactsForm/ContactsForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { getContacts, getStatusFilter, getIsLoading, getError } from "../redux/contacts/selectors";
import { Heading } from '@chakra-ui/react'

export default function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getStatusFilter);

    const filerValue = filter.toString().toLowerCase()

    const filteredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filerValue));
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>  <Heading size='lg' ml={6} >Phonebook</Heading>
            <ContactForm />
            <Filter />
            {getIsLoading && !getError && <b>Request in progress...</b>}
            <ul >
                {filteredContacts().map(single => (
                    <Contact
                        key={single.id}
                        id={single.id}
                        name={single.name}
                        number={single.number.toString()}
                    />
                ))}
            </ul>
        </div>
    )
}
