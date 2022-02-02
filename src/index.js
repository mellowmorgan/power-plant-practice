import $, { type } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import function from './src/plant.js'

import {
  blueFood,
  hydrate,
  nutrient,
  changeState,
  stateControl,
  stateControl2,
} from "./js/plant.js";

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

 
  $('#add-plant').click(function(){
    $('#plant-2').show();
  });
  //stateControl2 click functions

  $('#type2').click(function(){
    const input = $("#input-type2").val();
    const plantName = changeState(input)("")(0);
    const newState = stateControl2(plantName);
    $('#type-value2').text(`${newState.name}`);
  }); 
  
  $('#feed2').click(function(){
    const newState = stateControl2(blueFood);
    $('#soil-value2').text(`${newState.soil}`);

  });

  $('#water2').click(function(){
    const newState = stateControl2(hydrate);
    $('#water-value2').text(`${newState.water}`);
  });

  $('#fertilizer2').click(function(){
    const newState = stateControl2(nutrient);
    $('#fertilizer-value2').text(`${newState.fertilizer}`);
  });

});



