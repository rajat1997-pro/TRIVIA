var questions = [{
  question: "What does HTML stand for?",
  option1: "Hyper Text Markup Language",
  option2: "Home Tool Markup Language",
  option3: "Hyperlinks and Text Markup Language",
  option4: "Hypertrophic Management Language",
  answer: "Hyper Text Markup Language"
}, {
  question: "Choose the correct HTML tag for the largest heading?",
  option1: "Head",
  option2: "H1",
  option3: "H6",
  option4: "Heading",
  answer: "H1"
}, {
  question: "What is the correct HTML tag for inserting a line break?",
  option1: "break /",
  option2: "br /br",
  option3: "lb /",
  option4: "br",
  answer: "br"
}, {
  question: "How can you make a list that lists the items with numbers?",
  option1: "ol",
  option2: "oi",
  option3: "ul",
  option4: "list",
  answer: "ol"
}, {
  question: "How can you make a list that lists the items with bullets?",
  option1: "ol",
  option2: "oi",
  option3: "ul",
  option4: "list",
  answer: "ul"
}, {
  question: "What does CSS stand for?",
  option1: "Creative Style Sheets",
  option2: "Colorful Style Sheets",
  option3: "Computer Style Sheets",
  option4: "Cascading Style Sheets",
  answer: "Cascading Style Sheets"
}, {
  question: "Which is the correct CSS syntax?",
  option1: "Body:color=black",
  option2: "{body;color:black}",
  option3: "{body:color=black(body}",
  option4: "Body {color: black}",
  answer: "Body {color: black}"
}, {
  question: "How do you insert a comment in a CSS file?",
  option1: "' this is a comment",
  option2: "/* this is a comment */",
  option3: "// this is a comment",
  option4: "// this is a comment //",
  answer: "/* this is a comment */"
}, {
  question: "How do you change the text color of an element?",
  option1: "Color:",
  option2: "Text-Color=",
  option3: "Text-Color:",
  option4: "FgColor:",
  answer: "Color:"
}, {
  question: "Which CSS property controls the text size?",
  option1: "Font-style",
  option2: "Text-style",
  option3: "text-size text-size",
  option4: "Font-size",
  answer: "Font-size"
}];
var index = 0;
var score = 0;

function nextQuestion(i) {
  $(".question-no").text(i + 1);
  $(".question-card h2").text(questions[i]["question"]);
  var buttonList = $(".btn");
  for (var j = 0; j < buttonList.length; j++) {
    var key = j + 1;
    buttonList[j].textContent = questions[i]["option" + key];
  }
}

function start() {
  index = 0;
  score = 0;
  nextQuestion(index);
  $(".next").text("Next");
  $(".result").css("visibility", "hidden");
  $(".next").css("visibility", "hidden");
  $(".question").css("visibility","visible");
  $(".btn").css("visibility","visible");
  $(".start").css("visibility","hidden");
  $(".back").css("visibility","hidden");
}

$(".next").on("click", function(e) {
  if (index === 10) {
    $(".result").text("Your final score is " + score+"/10");
    $(".next").css("visibility", "hidden");
    $(".start").css("visibility","visible");
    $(".start").text("Play Again!");
  }
  else {
    nextQuestion(index);
    $(".result").css("visibility", "hidden");
    $(".next").css("visibility", "hidden");
    $(".back").css("visibility","visible");
  }
});


$(".btn").on("click", function(e) {
  if (e.target.textContent === questions[index]["answer"]) {
    $(".result").css("visibility", "visible");
    $(".result").text("Well Done!Correct!")
    $(".next").css("visibility", "visible");
    score++;
  } else {
    $(".result").css("visibility", "visible");
    $(".result").text("Wrong!!!")
    $(".next").css("visibility", "visible");
  }
  index++;
});
$(".start").on("click",function (){
  start();
});
$(".back").on("click",function (){
  if (index > 0){
    index--;
    nextQuestion(index);
  }

})

//       if (buttonList[i].textContent === questions[i]["answer"]){
//         nextQuestion(i+1);
//       }
// var buttonList = $(".btn");
// for (var i=0;i<buttonList.length;i++){
//     buttonList[i].on("click",function (){
//       if (buttonList[i].textContent === questions[i]["answer"]){
//         nextQuestion(i+1);
//       }
//     })
// }
