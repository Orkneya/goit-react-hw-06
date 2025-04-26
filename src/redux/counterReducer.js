const initialState = {
  counter: 1,
  step: 1,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + state.step,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - state.step,
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
