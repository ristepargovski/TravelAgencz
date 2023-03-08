export const initialState = {showContact: false, showAbout: false};

function NavbarReducer(state, action) {
  switch (action.type) {
    case "contactHandler": {
      return {
        ...state,
        showContact: !state.showContact,
        showAbout: false,
      };
    }
    case "aboutHandler": {
      return {
        ...state,
        showAbout: !state.showAbout,
        showContact: false,
      };
    }
    case "packagesHandler": {
      return {
        ...state,
        showContact: false,
        showAbout: false,
      };
    }
  }
}

export default NavbarReducer;
