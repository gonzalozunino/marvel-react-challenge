const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];

const makeActionTypes = base => {
  const ref = {};

  TYPES.forEach(type => {
    ref[type] = `${base}_${type}`;
  });

  return ref;
};

export const LOAD_CHARACTERS = makeActionTypes("LOAD_CHARACTERS");
export const LOAD_CHARACTER = makeActionTypes("LOAD_CHARACTER");
export const CLOSE_CHARACTER_DETAILS = "CLOSE_CHARACTER_DETAILS";
