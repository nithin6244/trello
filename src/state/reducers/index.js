import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";
import SearchCardReducer from "./SearchCardReducer";

export default combineReducers({
  board: BoardReducer,
  searchCard: SearchCardReducer,
});
