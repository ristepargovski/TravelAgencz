function ReducerContact(state, action) {
  switch (action.type) {
    case "SetNameError1": {
      return {
        ...state,
        nameError: "Please enter your name.\n",
      };
    }

    case "setEmailError1": {
      return {
        ...state,
        emailError: "Please enter your email address.\n",
      };
    }

    case "setSubjectError1": {
      return {
        ...state,
        subjectError: "Please enter a subject.\n",
      };
    }

    case "setMessageError1": {
      return {
        ...state,
        messageError: "Please enter a message.\n",
      };
    }

    case "successAll": {
      return {
        ...state,
        SuccessMessage: true,
        SuccessName: true,
        SuccessEmail: true,
        SuccessSubject: true,
      };
    }

    case "falseMessage": {
      return {
        ...state,
        SuccessMessage: false,
      };
    }

    case "falseNameWithError": {
      return {
        ...state,
        successName: false,
        NameError: "",
      };
    }
    case "falseEmailWithError": {
      return {
        ...state,
        successEmail: false,
        emailError: "",
      };
    }
    case "falseSubjectWithError": {
      return {
        ...state,
        successSubject: false,
        subjectError: "",
      };
    }
    case "falseMessageWithError": {
      return {
        ...state,
        successMessage: false,
        messageError: "",
      };
    }

    default:
      break;
  }

  return state;
}
export const initialState = {
  nameError: "",
  emailError: "",
  subjectError: "",
  messageError: "",
  emptyName: "",
  emptyEmail: "",
  emptySubject: "",
  emptyMessage: "",
  successMessage: false,
  successName: false,
  successEmail: false,
  successSubject: false,
};

export default ReducerContact;
