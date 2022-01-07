
isEqual(1, 1)

function isEqual(x, y) {
  if (x === y) {
    console.log("is Equal in value and type")
  } else if (x == y) {
    console.log("is Equal in value")
  } else {
    console.log("Not Equal in value and type")
  }
  return;
}


var isEqual2 = function(x, y){
  if (x === y) {
    console.log("is Equal in value and type")
  } else if (x == y) {
    console.log("is Equal in value")
  } else {
    console.log("Not Equal in value and type")
  }
  return;
}

isEqual2(1, 1)