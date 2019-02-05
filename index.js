var katzDeliLine = [];
var totalline = []
var counter = 0

function takeANumber(katzDeliLine,name){
  counter++
  katzDeliLine.push(name);
  totaline.push(name)
  var currentline = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${currentline} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    var phrase = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      phrase.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${phrase}`;
  }
}