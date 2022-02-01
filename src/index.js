import $ from 'jquery';
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

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
    ...state,
    [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const redFood = changeState("soil")(-2);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);


$(document).ready(function(){
  $('#feed').click(function(){
    const newState = stateControl(feed);
    const newState1 = stateControl(blueFood);
    const newState2 = stateControl(redFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
    $('#soil-value').text(`Soil: ${newState1.soil}`);
    $('#soil-value').text(`Soil: ${newState2.soil}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });

});



