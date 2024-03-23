const correctAnswers = ["A", "B", "B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //How to show results on page:
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  //How to get page to automatically scroll to the top after pressing submit:
  scrollTo(0, 0); //The scrollTo method takes 2 coordinates, x & y. You place the coordinates that you want the scrollbar to automatically take the user.

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (score === output) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
//The window object- the global object in frontend javascript. Everything is stored in the window object.

/* console.log('hello');
window.console.log('hello');   //Same output because writing window is inferred in all things you log to console.
*/

//How to animate score when user presses submit:
/* setInterval(()=> {      //setInterval() is a function similar to setTimeout except that it fires the inputted function consistently according to the timer set opposed to 1 time.
console.log('hello');
},1000); */

//How to stop an interval: This is what we are going to use to animate our score.
/* let i = 0;
const timer= setInterval(() => {
console.log('hello');
i++;
if(i===5){
clearInterval(timer);
}
},1000);
*/

//How to setTimeout:
/* setTimeout(()=> {
alert('Need a Ninja?');  //Put whatever you want in the first argument
},3000); //In the 2nd argument, after you put a comma in the end brace, you put the amount of milliseconds you want the 1st function to be delayed by.
*/

/* window.setTimeout(()=> {
    alert('Need a Ninja?');  //Put whatever you want in the first argument
    },3000); //In the 2nd argument, after you put a comma in the end brace, you put the amount of milliseconds you want the 1st function to be delayed by.
    */
