import React from "react"
import { getFilterValue } from "../../redux/contacts/slice"
import { Box, Input } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { Heading } from '@chakra-ui/react'

export const Filter = () => {

    const dispatch = useDispatch();
    const searchName = (e) => dispatch(getFilterValue(e.currentTarget.value));
    return (<Box ml={6} mt={4}>
        <Heading as='h3' size='sm' mb={2}>Find Contact</Heading>
        <Input type="text" onChange={searchName} size='sm' width="300px" />
    </Box>);
}