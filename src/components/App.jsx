
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import { Layout } from "components/Layout/Layout";
import { GlobalStyle } from "./GlobalStyle"
import { ContactFormik } from "./ContactForm/ContactFormik";
import ContactList  from "./ContactList/ContactList" ;
import Filter from "./Filter/Filter"



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Layout>
        <h1> PhoneBook </h1>
        <ContactFormik />
        <h2> Contacts </h2>
        <Filter  />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        <GlobalStyle/>
      </Layout>
  );
};
