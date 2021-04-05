function scuberGreetingForFeet(distance){
  let greeting;
  if (distance <= 400) {
    greeting = "This one is on me!";
  } else if (distance < 2500 && distance > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    greeting = "No can do.";
  }
  return greeting;
  } 

function ternaryCheckCity(destination){ 
  let acceptance;
  (destination === "NYC") ? (acceptance = "Ok, sounds good.") : (acceptance = "No go.");
  return acceptance;
}

function switchOnCharmFromTip(tip){
  let charm;
  switch (tip) {
    case 'generous':
      charm = "Thank you so much."
      break;
    case 'not as generous':
      charm = "Thank you."
      break;
    default:
      charm = "Bye."
      break;
    }
  return charm;
  }