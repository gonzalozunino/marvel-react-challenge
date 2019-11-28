import {
  LOAD_CHARACTERS,
  LOAD_CHARACTER,
  CLOSE_CHARACTER_DETAILS
} from "../actionTypes";

const initialState = {
  characters: {
    hasMore: true,
    isLoading: false,
    items: [],
    original: [],
    count: 12,
    total: 0,
    filter: ""
  },
  character: {
    isModalOpen: false,
    isLoading: false,
    current: {},
    comics: {},
    isComicsLoaded: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS.REQUEST:
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: true
        }
      };
    case LOAD_CHARACTERS.SUCCESS:
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: false,
          total: action.total,
          hasMore: action.hasMore,
          items: state.characters.items.concat(action.characters),
          original: state.characters.items
        }
      };
    case LOAD_CHARACTERS.FAILURE:
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: false,
          items: action.characters
        }
      };
    case LOAD_CHARACTER.REQUEST:
      return {
        ...state,
        character: {
          ...state.character,
          isModalOpen: true,
          current: action.payload
        }
      };
    case CLOSE_CHARACTER_DETAILS:
      return {
        ...state,
        character: {
          ...state.character,
          isModalOpen: false
        }
      };
    default:
      return state;
  }
}
