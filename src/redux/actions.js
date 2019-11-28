import { LOAD_CHARACTERS } from "./actionTypes";

import ApiService from "../api/api.service";

async function fetchData(options) {
  const res = await ApiService().getCharacters(options);

  return res.json();
}

export const loadCharacters = page => {
  return async dispatch => {
    dispatch({
      type: LOAD_CHARACTERS.REQUEST
    });

    try {
      const response = await fetchData({
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
