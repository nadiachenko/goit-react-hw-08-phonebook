export const getContacts = state => state.contacts.contacts.items;

export const getIsLoading = state => state.contacts.contacts.isLoading;

export const getError = state => state.contacts.contacts.error;

export const getStatusFilter = state => state.contacts.filter;