
function populate(){
  if(quiz.isEnded()){
    showScores()
  }else{
    //Show Question

    const question = document.querySelector('#question')
    question.innerHTML = quiz.getQuestionIndex().text

    //Show answers
    var choices = quiz.getQuestionIndex().choices;
       for(var i = 0; i < choices.length; i++) {
           var element = document.getElementById("choice" + i);
           element.innerHTML = choices[i];
           guess("btn" + i, choices[i]);
           showProgress()
       }

  }
}
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showScores(){
  document.querySelector('#quiz').innerHTML =
  `<h1>Game Over</h1>
                    <h2 id="score">Your score:${quiz.score}</h2>`

}
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
};

const questions =[
  //new Question("What event marked the start of World War II?",["Invasion of Poland (1939)","Invasion of Russia (1942)","Battle of Britain (1940)","Invasion of Normandy (1944)"],"Invasion of Poland (1939)"),
  new Question("What was David Bowie&#039;s real surname?",["Johnson","Edwards","Jones","Carter"],"Jones"),
  new Question("Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",["C#","Python","JavaScript","PHP"],"JavaScript"),
  new Question("What does &quot;hippopotamus&quot; mean and in what langauge?",["River Horse (Latin)","Fat Pig (Greek)","River Horse (Greek)","Fat Pig (Latin)"],"River Horse (Greek)"),

  new Question("What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",["Winnie the Pooh","Calvin and Hobbes","Albert and Pogo","Peanuts"],"Calvin and Hobbes"),
  new Question("Who is the Egyptian god of reproduction and lettuce?",["Min","Mut","Meret","Menu"],"Min"),
  new Question("What is the name of the default theme that is installed with Windows XP?",["Whistler","Neptune","Bliss","Luna"],"Luna"),
  new Question("In addition to his career as an astrologer and &quot;prophet&quot;, Nostradamus published a 1555 treatise that included a section on what?",["Teaching parrots to talk","Making jams and jellies","Digging graves"
,"Cheating at card games"],"Making jams and jellies"),
  new Question("In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",["&lt;move&gt;&lt;/move&gt;","&lt;marquee&gt;&lt;/marquee&gt;","&lt;slide&gt;&lt;/slide&gt;","&lt;scroll&gt;&lt;/scroll&gt;"],"&lt;marquee&gt;&lt;/marquee&gt;"),
  new Question("What does the term GPU stand for?",["Graphical Proprietary Unit","Gaming Processor Unit","Graphics Processing Unit","Graphite Producing Unit"],"Graphics Processing Unit"),
  new Question("How many cores does the Intel i7-6950X have?",["12","8","10","4"],"10")



]


const quiz = new Quiz(questions)


populate()
