import { ThunkAction } from "redux-thunk";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { ContactDto } from "src/types/dto/ContactDto";
import { RootState } from "./store";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const LOAD_CONTACTS_ACTION = "LOAD_CONTACTS_ACTION";

export const LOAD_GROUPS_ACTION = "LOAD_GROUPS_ACTION";

export const LOAD_FAVORITE_CONTACTS_ACTION = "LOAD_FAVORITE_CONTACTS_ACTION";

interface ILoadContactsAction {
  type: typeof LOAD_CONTACTS_ACTION;
  payload: ContactDto[];
}
interface ILoadGroupsAction {
  type: typeof LOAD_GROUPS_ACTION;
  payload: GroupContactsDto[];
}
interface ILoadFavoriteContactsAction {
  type: typeof LOAD_FAVORITE_CONTACTS_ACTION;
  payload: FavoriteContactsDto;
}

export function createLoadContactsAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    const data: ContactDto[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(DATA_CONTACT);
      }, 500);
    });
    dispatch({ type: LOAD_CONTACTS_ACTION, payload: data });
  };
}
export function createLoadGroupsAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    const data: GroupContactsDto[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(DATA_GROUP_CONTACT);
      }, 500);
    });
    dispatch({ type: LOAD_GROUPS_ACTION, payload: data });
  };
}
export function createLoadFavoriteContactsAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    const data: FavoriteContactsDto = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          DATA_CONTACT[0].id,
          DATA_CONTACT[1].id,
          DATA_CONTACT[2].id,
          DATA_CONTACT[3].id,
        ]);
      }, 500);
    });
    dispatch({ type: LOAD_FAVORITE_CONTACTS_ACTION, payload: data });
  };
}

export type ProjectActions =
  | ILoadContactsAction
  | ILoadGroupsAction
  | ILoadFavoriteContactsAction;
