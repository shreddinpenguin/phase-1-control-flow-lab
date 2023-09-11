function scuberGreetingForFeet(x){
  if (x <= 400) {
    return "This one is on me!"
  }
  else if (x > 400, x <= 2000) {
    return "That will be twenty bucks."
  }
  else if (x > 2000, x <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (x > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  const message = city === "NYC" ? "Ok, sounds good." : "No go.";  
  return message
}

function switchOnCharmFromTip(tip){
  let goodbye;
  switch(tip) {
    case "generous":
      goodbye = "Thank you so much.";
      break;
    case "not as generous":
      goodbye = "Thank you.";
      break;
    default:
      goodbye = "Bye."
      break;
  }
  return goodbye
}