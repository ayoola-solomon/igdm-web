export const get = key => {
  return localStorage.getItem(key);
};

export const set = (key, item) => {
  localStorage.setItem(key, item);
  return get(key);
};

export const remove = key => {
  localStorage.removeItem(key);
};
