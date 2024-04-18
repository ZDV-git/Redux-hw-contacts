import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactReducer } from "./contactReducer";
import thunkMiddleware from "redux-thunk";
import { groupReducer } from "./groupReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  groups: groupReducer,
  favorites: favoriteReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof rootReducer>;
