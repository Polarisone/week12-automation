// 1. Find the longest word using FOR LOOP

let findTheLongestWord = (str) => {
  let string = str.split(" ");
  let longest = 0;
  let longestWord = null;

  for (let i = 0; i < string.length; i++) {
    if (longest < string[i].length) {
      longestWord = string[i];
    }
  }
  return longestWord;
};
console.log(findTheLongestWord("I love to rock and Codemify"));

console.log("-----------------------------");

// Find the longest word using REDUCE method
function findLongestWord(str) {
  const string = str.split(" ");
  const longestWord = string.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) return currentWord;
    else return longest;
  }, "");
  return longestWord;
}
console.log(findLongestWord("I love to rock and Codemify"));

console.log("-----------------------------");

// 2. Find users with duplicated email in the users object and put them in array
const users = [
  {
    firstName: "Sergii",
    lastName: "Khromchenko",
    email: "sergii@gmail.com",
    age: 15,
  },
  {
    firstName: "Alex",
    lastName: "Plishka",
    email: "alex@yahoo.com",
    age: 55,
  },
  {
    firstName: "Sergii",
    lastName: "Kewl",
    email: "sergii@verizon.com",
    age: 17,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    email: "",
    age: 55,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 18,
  },
  {
    firstName: "Bekka",
    lastName: "GIlbert",
    email: "",
    age: 18,
  },
  {
    firstName: "Anna",
    lastName: "Travolta",
    email: "jtravolta@gmail.com",
    age: 15,
  },
];
console.log(users);

// 3. Find users with duplicated email
const findDuplicateEmail = users
  .map((user) => user.email)
  .filter((user, i, userEmail) => userEmail.indexOf(user) !== i);
const duplicateEmail = users.filter((obj) =>
  findDuplicateEmail.includes(obj.email)
);

console.log("-----------------------------");

// 4. Find users with the same age
const findDuplicateAge = users
  .map((user) => user.age)
  .filter((user, i, userAge) => userAge.indexOf(user) !== i);
const duplicateAge = users.filter((obj) => findDuplicateAge.includes(obj.age));
console.log(duplicateAge);

console.log("-----------------------------");

// 5. Find the youngest user in users object
function findYoungestUser(array) {
  const minAgeUser = array.reduce((previous, current) =>
    previous.age <= current.age ? previous : current
  );
  const minAge = minAgeUser.age;
  const youngestUsers = array.filter((obj) => obj.age === minAge);
  console.log(youngestUsers);
}
findYoungestUser(users);

console.log("-----------------------------");

// 6. Find user with missing email
function findMissingEmailUsers(array) {
  const missingEmailUser = users.filter((missing) => missing.email === "");
  console.log(missingEmailUser);
}
findMissingEmailUsers(users);

console.log("-----------------------------");

// 7. Reverse Words in a String
function reverseWords(string) {
  let result = string.split(" ").reverse().join(" ");
  return result;
}
console.log(reverseWords("i like coding"));

console.log("-----------------------------");

// 8. The Fizz Buzz Test
function fizzBuzz(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(
      i % 15 == 0 ? "FizzBuzz" : i % 5 == 0 ? "Buzz" : i % 3 == 0 ? "Fizz" : i
    );
  }
  return arr;
}
console.log(fizzBuzz(15));

console.log("-----------------------------");

// 9. Return an object of users with gmail emails only
function usersWithGmailEmailOnly(arr) {
    const gmail = arr.filter((element) => element.email.includes('@gmail.com')
)
console.log(gmail)
}
usersWithGmailEmailOnly(users)