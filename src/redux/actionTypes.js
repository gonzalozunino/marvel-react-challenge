const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];

const makeActionTypes = base => {
  const ref = {};

  TYPES.forEach(type => {
    ref[type] = `${base}_${type}`;
  });

  return ref;
};

export const LOAD_CHARACTERS = makeActionTypes("LOAD_CHARACTERS");
