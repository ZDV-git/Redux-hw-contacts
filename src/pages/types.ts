import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface CommonPageProps {
  allContacts: ContactDto[];
  allFavoriteContacts: FavoriteContactsDto;
  allGroupContacts: GroupContactsDto[];
}
