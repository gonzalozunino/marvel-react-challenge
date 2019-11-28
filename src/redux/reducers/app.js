import { LOAD_CHARACTERS } from "../actionTypes";

const initialState = {
  characters: {
    hasMore: true,
    isLoading: false,
    items: [],
    original: [],
    count: 12,
    total: 0,
    filter: ""
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
    default:
      return state;
  }
}
