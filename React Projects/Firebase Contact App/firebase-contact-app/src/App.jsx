import Navbar from "./components/Navbar"
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from "./components/NotFoundContact";


const App = () => {

  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} = useDisclouse();

  useEffect(() => {
    const getContacts = async() => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) =>
          {
              return {
                id: doc.id,
                ...doc.data(),
              };
          });
          setContacts(contactLists);
          return contactLists;
        });
       
      } catch(error) {
        console.log(error);
      }
    };

    getContacts();

  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      
      const filteredContacts = contactLists.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);


      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input 
              onChange={filterContacts}
              type="text" 
              className="flex-grow border bg-transparent 
              border-white rounded-md h-10 text-white pl-9"
            />
          </div>
          <div>
            <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl text-white"/>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact
      onClose = {onClose}
      isOpen = {isOpen}
      />
      <ToastContainer 
      position="bottom-center" />
    </>
  );
};

export default App;
