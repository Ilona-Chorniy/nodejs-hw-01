import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
   const contacts = await readContacts();
   return contacts;
};

getAllContacts().then(contacts => {
   console.log(contacts);
});
