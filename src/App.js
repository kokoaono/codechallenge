import "./App.css";
//call functions to test they are working.

function App() {
  //Task 1 Write a function that returns true if the first letter of a string is uppercase.(5 min)
  const StartWithCapitalLetter = (string) => {
    return /[A-Z]/.test(string.charAt(0));
  };

  console.log("Task 1 should return true", StartWithCapitalLetter("True"));
  console.log("Task 1 should return false", StartWithCapitalLetter("noT"));

  //Task 2 Write a function to take a radius and return the area of a circle with that radius.(4 min)
  // area = r x r x 3.14...
  const FindAreaOfACircle = (radius) => {
    return radius * radius * Math.PI;
  };
  const task2 = FindAreaOfACircle(1.5);
  console.log(
    "Task 2 should return the area of a circle with given radius",
    task2
  );
  //Task 3 Write a function that takes an array of numbers and returns the sum of the numbers.(10 min)
  //create a variable to store the sum, iterate throught the array to add each number and store the value in the variable created earlier then return sum.
  const SumOfNumbers = (arr) => {
    let sum = 0; // total value will go here.
    arr.forEach((value) => {
      sum += value;
    });
    return sum;
  };
  const task3 = SumOfNumbers([1, 2, 3.5]);
  console.log("Task 3 should return the sum of the numbers", task3);

  return (
    <div className="App">
      <p>
        All answers are logged out in "Console". <br />
        Inspect --> Console{" "}
      </p>
    </div>
  );
}

export default App;
