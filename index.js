// Code your solution in this file!

function distanceFromHqInBlocks(end){
    return Math.abs(end - 42);
}



function distanceFromHqInFeet(end){
   return (distanceFromHqInBlocks(end)* 264);
}

function distanceTravelledInFeet(end, start){
return (Math.abs(end - start)* 264);
}

function calculatesFarePrice(start, end) {
const distance =(Math.abs(end - start)* 264);
if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}