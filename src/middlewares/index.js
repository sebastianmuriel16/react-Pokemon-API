export const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const fetured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedAction = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: fetured,
    },
  };

  next(updatedAction);
};
