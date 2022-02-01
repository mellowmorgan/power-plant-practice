import $, { type } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import function from './src/plant.js'


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//     ...state,
//     [prop] : (state[prop] || 0) + value
//     })
//   }
// }
const changeState = (valueName) => {
  return (prop)=>{
    return (value) => {
      return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value,
      "name" : valueName || state["name"]
      })
    }
}}



  
// const feed = changeState("soil")(1);
const blueFood = changeState("")("soil")(5);

const hydrate = changeState("")("water")(1);
// const superWater = changeState("water")(5);

const nutrient = changeState("")("fertilizer")(1);


$(document).ready(function(){
  // event.preventDefault();
  $('#type').click(function(){
    const input = $("#input-type").val();
    const plantName = changeState(input)("")(0);
    const newState = stateControl(plantName);
    $('#type-value').text(`${newState.name}`);
  }); 
  
  $('#feed').click(function(){
    const newState = stateControl(blueFood);
    $('#soil-value').text(`${newState.soil}`);

  });

  $('#water').click(function(){
    const newState = stateControl(hydrate);
    $('#water-value').text(`${newState.water}`);
  });

  $('#fertilizer').click(function(){
    const newState = stateControl(nutrient);
    $('#fertilizer-value').text(`${newState.fertilizer}`);
  });

  // $('#show-state').click(function() {
  //   const currentState = stateControl();
  //   $('#soil-value').text(`${currentState.soil}`);
  // });

});



