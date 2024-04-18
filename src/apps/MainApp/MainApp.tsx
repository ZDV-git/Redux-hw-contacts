import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/Layout";
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  createLoadContactsAction,
  createLoadFavoriteContactsAction,
  createLoadGroupsAction,
} from "src/redux/actions";

export const MainApp = () => {
  const contacts = useAppSelector((state) => state.contacts);
  const groupContacts = useAppSelector((state) => state.groups);
  const favoriteContacts = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  if (!contacts.length) dispatch(createLoadContactsAction());
  if (!groupContacts.length) dispatch(createLoadGroupsAction());
  if (!favoriteContacts.length) dispatch(createLoadFavoriteContactsAction());

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ContactListPage
                  allContacts={contacts}
                  allFavoriteContacts={favoriteContacts}
                  allGroupContacts={groupContacts}
                />
              }
            />
            <Route path="contact">
              <Route
                index
                element={
                  <ContactListPage
                    allContacts={contacts}
                    allFavoriteContacts={favoriteContacts}
                    allGroupContacts={groupContacts}
                  />
                }
              />
              <Route
                path=":contactId"
                element={
                  <ContactPage
                    allContacts={contacts}
                    allFavoriteContacts={favoriteContacts}
                    allGroupContacts={groupContacts}
                  />
                }
              />
            </Route>
            <Route path="groups">
              <Route
                index
                element={
                  <GroupListPage
                    allContacts={contacts}
                    allFavoriteContacts={favoriteContacts}
                    allGroupContacts={groupContacts}
                  />
                }
              />
              <Route
                path=":groupId"
                element={
                  <GroupPage
                    allContacts={contacts}
                    allFavoriteContacts={favoriteContacts}
                    allGroupContacts={groupContacts}
                  />
                }
              />
            </Route>
            <Route
              path="favorit"
              element={
                <FavoritListPage
                  allContacts={contacts}
                  allFavoriteContacts={favoriteContacts}
                  allGroupContacts={groupContacts}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
