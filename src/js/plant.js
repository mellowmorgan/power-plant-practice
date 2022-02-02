import $ from "jquery";

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateControl = storeState();
export const stateControl2 = storeState();

export const changeState = (valueName) => {
  return (prop)=>{
    return (value) => {
      return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value,
      "name" : valueName || state["name"]
      })
    }
}}

// export const feed = changeState("soil")(1);
export const blueFood = changeState("")("soil")(5);

export const hydrate = changeState("")("water")(1);
// export const superWater = changeState("water")(5);

export const nutrient = changeState("")("fertilizer")(1);