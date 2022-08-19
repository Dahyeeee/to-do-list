const localStorageMiddleware = (store) => (next) => (action) => {
  localStorage.setItem("toDoList", JSON.stringify(store.getState()));

  return next(action);
};

export default localStorageMiddleware;
