const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team = players;

// Create a variable "team1" that is a copy of the "players" array using the spread operator
const team1 = ["John", "Bob", "Alice", "Poppy"];

// Create a variable "cap1" that is a copy of the "person" object using the spread operator
const cap1 = {"John Doe"};
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
