Algorithms and Problem Solving Patterns

Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

What is an Algorithm? = A process or set of steps to accomplish a certain task (this can be very simple, or very complex)

Why do I need to know this?

Almost everything that you do in programming involes some kind of algorithm!
It is the foundation for being a successful problem solver and developer

also, this stuff comes up in Interviews...alot

HOW DO YOU IMPROVE?

1. devise a plan for solving problems
2. Master common problem solving patterns

Lets start off with Problem Solving Strategies

Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break it down
- Solve/Simplify
- Look Back and Refactor

Step 1 - Understand the Problem

1. Restate the problem in your own words to make sure you understand what the question is.
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
   - You may not be able to answer this question until you set about solving the problem. That's okay, its still worth considering the question at this early stage.
5. How should I label the important pieces of data that are part of the problem? (what really matters and what terminology should I use)

Here's an example. Given the question

"Write a function which takes two numbers and returns their sum."

1. write a function that add two numbers, or implement addition
2. Whole numbers? Floating point numbers? can it only work with two numbers, or can we add three? What if its a really large number, like infinity? (where you add so many zeros Javascript just gives up)

- ints?
- floats?
- what about string for large numbers (like infinity)

3. Same as 2
4. What if someone only passes in one number? then you can't do addition
   In that case, do we add zero, or make it undefined/null?
5.

Step 2 - Explore Examples

Coming up with examples can help you understand the problem better

Examples also provide sanity checks that your eventual solution works how it should

User Stories! or... Unit Tests!

1. Start with Simple Examples
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

Like lets say on an interview, I"m asked

"Write a function which takes in a string and returns counts of each character in the string"

1. Start with Simple Examples

charCount("aaaa"); = {a: 4}

charCount("hello); = {h:1, e:1, l:2, o:1}

Do we only want it to return the letters that are only present, or empty values?
charCount("aaaa"); = {a: 4, b:0, c:0, etc}
Like if every letter was in there already set to 0

2. Progress to more complex examples

"my phone number is 182763"

With that, do we want spaces to be present? or dollar/number signs, underscores, numbers, etc
And with an example such as
"Hello hi", do we could both H and h as the same (h:2), or does we list upper and lower case letters differently? (H:1, h:2)

Asking these questions will help us tackle the problem better

3. Explore examples with empty inputs

charCount(""); //empty string

do we want to return an empty object at the end?
do we want to return null, false, or undefined? or maybe an error?

4. Explore examples with invalid inputs - kind of the natural extention of the above

Step 3 - Break it Down!

take the steps of the problem and break it down.
Interviewers like you to explain what you are doing - sometime they might give you a hit

So write out the basic details you need to do.

The forces you to think about the code you'll write before you write it. and it helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about the details/language/syntax.

So with that same problem

"Write a function which takes in a string and returns counts of each character in the string"

// our function that accepts a string
function charCount(str) {
// do something
// return an object with keys are lowercase alphanumeric character in the string;
}

function charCount(str) {
//make object to return at end
// loop over string
// if the char is a number/letter AND key in object, add one to count
// if the char is not number/letter AND in object, add it and set value to 1
// if characrer is something else, (space, period, etc) dont' do anything
// return object at end
}

writing out steps like this is important, because even if you can't solve the problem, it means you formulated an approach, which can still help you in an interview
Or if you run out of time, the interviewer could still see where you were going.

Step 4 - Solve/Simplify

Sometimes in an interview, you want to have something to show for yourself.
Write the code you can just so you have that to show

And simplifying a problem might give you insight how to solve the problem.

Simplify - Find the core difficultly in what you're trying to do - Temporarilly ignore that difficulty - Write a simplified solution - Then incorporate that difficulty back in

function charCount(str){
// make object to return at end
var result = {};
// loop over string, for each character...
for(var i = 0; i < str.length; i++){
var char = str[i].toLowerCase()
// if the char is a number/letter and is a key in object, add one to count
if(result[char] > 0) {
result[char]++;
}
// if the char is a number/letter and not in object, add it to object and set value to
else {
result[char] = 1;
};

    }
    // if character is something else (space, period, etc.) dont' do anything
    // return object at end
    return result

}

// The Final Step -

Part 5 - Look Back and Refactor

Congrats on solving it, but you're not done!

Once you finish the solution, there are few more questions you can ask

Refactoring Questions.

1. Can you check the result?
2. can you derive the same result differently?
3. can you understand it at a glance?
4. can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

So with that same function, here is another way of writing it

function charCount(str) {
var obj = {};
for (var i = 0; i < str.length; i++){
var char = str[i].toLowerCase();
if (/[a-z0-9]/.test(char)) {
if (obj[char] > 0) {
obj[char]++;
} else {
obj[char] = 1;
};
}
}
return obj;
}

But heres a refactored way of writing it without the forloop

function charCount(str) {
var obj = {};
for (var char of str) {
char = char.toLowerCase();
if (/[a-z0-9]/.test(char)) {
if (obj[char] > 0) {
obj[char]++;
} else {
obj[char] = 1;
}
}
}
return obj;
}

charCount("Hello hi!")
{h: 2, e: 1, l: 2, o: 1, i: 1}

to refactor it further, there is even a shorter way to solve this

functon charCount(str) {
var obj = {};
for (var char of str){
char = char.toLowerCase();
if (/[a-z0-9]/.test(char)) {
obj[char] = ++obj[char] || 1;
}
}
return obj;
}

- note to see - research regular expressions and how to do them in JavaScript

the regular expression if the (/[a-z0-9]/)

but even then there is a way to solve this without the regular expression, and this techncially will run faster

function isAlphaNumeric(char) {
var code = char.charCodeAt(0);
if (!(code > 47 && code < 58) && // numeric (0-9)
!(code > 64 && code < 91) && // upper alpha (A-Z)
!(code > 96 && code < 123)) { //lower alpha (a-z)
return false;
}
return true;
}

that above example doesn't exactly work the same way, but appling that code can refactor the previous code without the regular expression

functon charCount(str) {
var obj = {};
// for each character of our string
for (var char of str){
// if that character is alphanumeric
if (isAlphaNumeric(char)) {
// we're going to lowercase it
char = char.toLowerCase();
// and then add it into our object, or initialize it to 1 and add 1 to the current value
obj[char] = ++obj[char] || 1;
}
}
return obj;
}

- Recap!

1. Understand the problem - ask questions, clarify, make sure you understand it
2. Explore concrete examples - understanding inputs, outputs, errors, etc
3. Break it down - either pseudo code line by line, or just for the parts you need
4. Solve/Simplify - try and solve something where I could reincorporate the problem back in
5. Look back and refactor. There is always room for refactoring.

charCodeAt(0)

So overall How do you improve?

1. Devise a plan for solving problems
2. Master common problem solving patterns

Some patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Back Tracking
- Many MANY MORE ETC to holy hell.

- 1st Pattern

-- Frequency Counter --

this isn't the offical name of it btw, just sort of a nickname for what this pattern is

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with array/strings

Example Question

"Write a function called 'same', which accepts two arrays. the function should return true if every value in the array has its corresponding values squared in the second array. The frequency of the values must be the same."

same([1,2,3], [4,1,9]) // true (its out of order, but that second array has the squared values of each number in the 1st array)
same([1,2,3], [1,9]) // false ( it doesn't include 2 squared)
same([1,2,1], [4,4,1]) // false (must be same frequency, for it to be true, you'd have to have 1 twice in the second array instead of 4 twice)

heres a naive solution where we use nested loops

function same(arr1, arr2) {
if(arr1.length !== arr2.length) {
return false;
}
for (let i = 0; i < arr.length; i++) {
let correctIndex = arr2.indexOf(arr1[i] \*\* 2)
if(correctIndex === -1) {
return false;
}
console.log(arr2)
arr2.splice(correctIndex, 1)
}
return true;
}

same ([1,2,3,2], [9,1,4,4])

this is Time Complexity - N^2
as n grows the lenght of the array grows
But its naive becauses it uses a nested loop, which typically you want to avoid if you can

Here is that code refactored without the Nested loop

function same(arr1, arr2) {
if(arr1.length !== arr2.length) {
return false;
}
let frequencyCounter1 = {}
let frequencyCounter2 = {}
for(let val of arr1) {
frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
}
for(let val of arr2) {
frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
}
console.log(frequencyCounter1);
console.log(frequencyCounter2);
for (let key in frequencyCounter1) {
if(!(key ** 2 in frequencyCounter2)) {
return false
}
if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
return false
}
}

return true
}

same ([1,2,3,2,5], [9,1,4,4,11])

this has a time complexity of - O(n)

a soultion with 2 loops is always superior a solution with 2 nested loops
