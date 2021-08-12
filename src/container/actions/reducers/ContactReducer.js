const initialState = {
  contacts: [],
  totalContacts: 0,
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_CONTACT":
    //   return state;
    // case "GET_CONTACTS":
    //   return state;
    // case "EDIT_CONTACT":
    //   return state;
    // case "DELETE_CONTACT":
    //   return state;
    default:
      return state;
  }
};
