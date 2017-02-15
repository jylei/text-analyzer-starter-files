$("form").on("submit", function(event){
  event.preventDefault();
  $("dd").empty(); 
  $(".text-report").removeClass('hidden');
  var value = $("textarea").val().replace(/^\s+|\s+$/g,"").toLowerCase().split(" ");
  setText(value);
}) 
function wordCount(value) { 
  return value.length;
  }
function uniqueWordCount(value) {
  var obj ={};
  var count = 0; 
  for(var i in value) {
    if(!!obj[value[i]]) {
      obj[value[i]] + 0;
    }
    else {
      obj[value[i]] = 1;
    }
  }
  for(var key in obj) {
    count += obj[key];
  }
  return count;
}
function avgWordLength(value) {
  var totalLetters = $("textarea").val().replace(/ +/g, "").replace(/([.?!])\s*/g, "").split("").length;
  var avg = totalLetters/value.length;
  return avg +" "+ "characters";
}
function avgSentenceLength(value) {
  var sentences = $("textarea").val().replace(/([.?!])\s*/g, ".").split(".").length-1;
  var avgsentence = value.length/sentences;
  return avgsentence; 
}
function setText(value) {
  $(".js-wordcount").append(wordCount(value));
  $(".js-uniquecount").append(uniqueWordCount(value));
  $(".js-avglength").append(avgWordLength(value));
  $(".js-avgsent").append(avgSentenceLength(value));
}