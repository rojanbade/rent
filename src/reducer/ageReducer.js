export function ageReducer(state, action) {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Invalid action");
}
