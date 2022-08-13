export const deleteCard = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
};

export const searchCard = (title) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH",
      payload: title,
    });
  };
};
