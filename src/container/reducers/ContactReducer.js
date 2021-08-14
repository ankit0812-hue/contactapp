const initialState = {
  contacts: [],
  totalContacts: 0,
  contact: null,
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        totalContacts: state.totalContacts + 1,
      };
    case "GET_CONTACT":
      function search(value, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].id === value) return myArray[i];
        }
      }
      const foundContact = search(action.payload, state.contacts);
      return {
        ...state,
        contact: foundContact,
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((value) =>
          value.id === action.payload.id ? action.payload : value
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((value) => value.id !== action.payload),
      };
    default:
      return state;
  }
};
