import { ContactDto } from "src/types/dto/ContactDto";
import { ProjectActions } from "./actions";

export function contactReducer(
  state: ContactDto[] = [],
  action: ProjectActions
): ContactDto[] {
  switch (action.type) {
    case "LOAD_CONTACTS_ACTION":
      return [...action.payload];
  }
  return state;
}
