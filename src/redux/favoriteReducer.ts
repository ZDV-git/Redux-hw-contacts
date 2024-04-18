import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { ProjectActions } from "./actions";

export function favoriteReducer(
  state: FavoriteContactsDto = [],
  action: ProjectActions
): FavoriteContactsDto {
  switch (action.type) {
    case "LOAD_FAVORITE_CONTACTS_ACTION":
      return [...action.payload];
  }
  return state;
}
