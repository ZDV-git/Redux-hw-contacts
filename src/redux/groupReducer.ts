import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ProjectActions } from "./actions";

export function groupReducer(
  state: GroupContactsDto[] = [],
  action: ProjectActions
): GroupContactsDto[] {
  switch (action.type) {
    case "LOAD_GROUPS_ACTION":
      return [...action.payload];
  }
  return state;
}
