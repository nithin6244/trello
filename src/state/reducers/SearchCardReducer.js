const searchCard = "";

const SearchCardReducer = (state = searchCard, action) => {
  if (action.type === "SEARCH") {
    return action.payload;
  } else {
    return state;
  }
};

export default SearchCardReducer;
