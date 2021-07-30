Algorithms and Problem Solving Patterns 

Objectives 
- Define what an algorithm is
- Devise a plan to solve algorithms
- compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

What is an Algorithm?  = A process or set of steps to accomplish a certain task (this can be very simple, or very complex)

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