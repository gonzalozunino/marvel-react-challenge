import { LOAD_CHARACTERS, LOAD_CHARACTER, CLOSE_CHARACTER_DETAILS } from "./actionTypes";

import ApiService from "../api/api.service";

async function fetchChars(options) {
  const res = await ApiService().getCharacters(options);

  return res.json();
}

export const loadCharacters = page => {
  return async dispatch => {
    dispatch({
      type: LOAD_CHARACTERS.REQUEST
    });

    try {
      const response = await fetchChars({
        page: page,
        count: 12
      });
      const { results, total, offset, count } = response.data;

      dispatch({
        type: LOAD_CHARACTERS.SUCCESS,
        characters: results,
        total: total,
        hasMore: Boolean(total > count && offset < total)
      });
    } catch (e) {
      dispatch({ type: LOAD_CHARACTERS.FAILURE, message: e.message });
    }
  };
};

export const loadCharacterById = character => ({
  type: LOAD_CHARACTER.REQUEST,
  payload: character
});

export const closeCharacterDetails = () => ({
  type: CLOSE_CHARACTER_DETAILS
});
