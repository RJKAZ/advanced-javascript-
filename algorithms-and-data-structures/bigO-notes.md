Notes on Big O Notation

Its big in significance!

BEWARE - MATH AHEAD!!!

To Start off with, assume a hypothetical - that we have a problem that we have multiple solutions for, one solution uses a loop, another uses methods, etc, each solution is night and day different, but it takes us to the same end result

How do we determine which solution is best? Thats basicly what Big O is about.

Its a way of generalizing code, talking about it, and comparing code and its performance to other peices of code.

example - the problem "Write a function that accepts a string input and returns a reverse copy" - there are like 10 distinctly different ways to accomplish/solve this problem.

Ultimatly the best solution is whatever solution you have that can work, and thats fine for hobby/freelance , but for technical interviews, code challenges, or working with a large company workflow, performance matters, so using the best and most efficent solution is important.

- SO REASONS WHY THIS IS IMPORTANT! -

1. Its important to have a precise vocabulary to talk about how our code performs
2. Its useful for discussing trade-offs between different approaches
3. When you code slows down or crashes, identifying parts of the code that are inefficent can help us find pain points in our applications.
4. Also, it may come up in interviews.

example 1 - go into the Javascript for this.

- side note from the example.
  In the context of comparing code

What does Better Mean?

There are three things better could mean

1. Faster?
2. Less memory intensive?
3. More Readable?

Now Faster and less memory intensive usually go hand in hand, and come at the expense of readability

How these three play together will be a recurring theme thru this course.

we shall focus on the 1st one first, Faster! How fast does the code execute?

One way to quantify this is to use a timer method which is built in to javascript (never head of this before)

- Jump to the JavaScript -

- Jumped back from the Javascript -

So using that method we determined the 1st solution took 1.3 seconds and the 2nd solution took almost 0 seconds.

So is the 2nd solition better?

NOT Exactly! - that brings us to

THE PROBLEM WITH TIME!

1. difference machines will record different times (specs, CPU speed, what code/programs are running, etc). A different computer will show a different time.
2. As we saw running the first solution more then once, even the same machine will record different times
3. For fast algorithms, speed measurments may not be precise enough.

So while the timing functions can be useful at times, its not that useful in determing which code is better.

This is where BIG O Notation comes in

So if not Time, then what?

Rather then counting seconds, what vary so, we can count the number of simple operations the computer has to perform.
For counting the number of simple operations will remain constant no matter what computer you are on.

So with that 2nd solution -
function addUpTo(n) {
return n \* (n + 1) /2;
}

it does multiplication, addition, and division, so that solution performs three operations. And they are simple operations regardless of the size of n

so looking at the first solution

function addUpTo2(n) {
let total = 0;
for (let i = 1; i <= n; i++) {
total += i;
}
return total;
}

in contrast that first soltion is running way way way more simple operations. the n variable is constantly being assigned and added to thanks to the loop and they grow with n

But the code itself

we have 1 assignment, n additions, n assignments, 1 assignment, n comparisions, n additions and assignments, etc Because of the loop, counting the number of simple operations in that solution would be difficult

Counting is hard!

Depending on what we count, the number of operations be as low as 2n or as high as 5n+ 2
but regardless of the exact number, the number of operations grows roughly proportionally with n

so as N grows, the number of operations grows too

Now...to the actual term Big O,

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the input grows

Its a way of describing the input of a function as it grows, and how that changes the runtime, and the time relative to that input

we don't care about the details, only the trends

Here is scary official definiton of Big O

"We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less then a constant times f(n), as n increases"

(f(n)) - this notation stands for a function with an input of n

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n2)
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different

When we talk about Big O

so to put this in practicle context

with that 2nd solution

function addUpTo(n) {
return n \* (n + 1) /2;
}

No matter what N is, it always performs 3 operations, its trend is flat
So it has a Big O of 1, or rather the notation we will see is O(1)

so as N grows it has no change in the runtime

Now that other solution

function addUpTo2(n) {
let total = 0;
for (let i = 1; i <= n; i++) {
total += i;
}
return total;
}

With that solution the runtime grows as N grows pretty much 1 to 1
The number of operations is (eventually) bounded by a multiple of n (say, 10n, 50n, the number before n doesn't really matter)

we notate this as O(n)

Another example with a more complicated function

function countUpAndDown(n) {
console.log("Going up!");
for (var i = 0; i < n; i++) {
console.log(i);
}
console.log("At the top!\nGoing Down...");
for (var j = n - 1; j >= 0; j--) {
console.log(j);
}
console.log("Back down. Bye!");  
}

using loops this function counts up and then it counts down.
So each loop is a big O of n or rahter O(n). Even though its 0(n) twice, we only care about the big picture so this code simplies back to O(n)

Now this example

function printAllPairs(n) {
for (var i = 0; i < n; i++) {
for (var j = 0; j < n; j++) {
console.log(i, j);
}
}
}

This code has a nested loop, a loop within a loop
Like the previous example, this also has two loops so each loop is O(n)

but since its a nested loop, it doesn't simplify to a O(n)

O(n) operation inside of an O(n) operation
is O(n \* n)

Or O(n2) Big O of n squared

Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2

But regardless of the exact number, the number of operations grows roughly proportionally with n

if n doubles, the number of operations will also roughly double.

For simplifying Big O expressions

when determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are conseqences of the definition of Big O notation.

Constants Don't Matter! only the big/broad picture

O(2n) gets simplified down to O(n)

O(500) gets simplified down to O(1) (since its constant and flat)

O(13n^2) (squared) gets simplified down to O(n^2) (squared)

Smaller terms don't matter

O(n + 10) gets simplified down to O(n)

O(1000n + 50) gets simplified down O(n)

O(n^2 + 5n + 8) gets simplified down to O(n^2)

Big O Shorthands

Analyzing complexity with Big O can get complicated
There are several rules of thumb that can help
These rules won't always work, but are a helpful starting point

1. Arthmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

Another example

function logAtLeast5(n) {
for (var i = 1; i <= Math.max(5, n); i++) {
console.log(i);
}
}

In that code the 5 doesn't matter, what matters is the value of the N, since as N grows the number of operations grows

So that gets simplified to O(n)

Now here is the opposite code

function logAtMost5(n) {
for (var i = 1; i <= Math.min(5, n); i++) {
console.log(i);
}
}

This code is different in that the value of n is now worthless, since the code will only run 5 times at max regardless of what value N has

So that code gets simplified down to O(1) since its value is constant and flat.

Now so far we have been focusing on time complexity, but how can we analyze the runtime of an algorithm as the size of the inputs increases?

This bring us to Space Complexity

We can also use Big O notation to analyze space complexity:
How much additional memory do we need to allocate in order to run the code in our algorithm?

So space complexity in a nut shell is how much memory is taken up

As N grows, so to does the size of the input grows as well

Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up be the inputs

Unless otherwise noted, when we talk abotu space complexity, technically we'll be talking about auxiliary space complexity. (which is what happens inside the algorithm)

Space Complexity in JS - Rules of Thumb

1. Most primative values (Booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

- an example of space complexity - jump to the javascript line 56

Now onto Logarithms

O(1), O(n), O(n^2) are the most common Big Os, or rather the most common Complexities

But there are other Big O expressions that involve more complex mathematical expressions

One such is the Logarithm O(logN)

Logs are the inverse of exponents (like multiplication and division)

and example of that

log v2(8) =3

v2 above stands for base 2

If we raise 2 to what power, what gives us 8? the answer is 3

2^3 = 8

log v2(value) = exponent => 2^exponent = value

logs can work with other bases like Base 3, but the binary log 2 is the most common

We'll omit the 2, so

log === log v2

This isn't a math course, so here's a rule of thumb

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

8 / 2 = 4
4 / 2 = 2
2 / 2 = 1

log(8) = 3

but a number like 25 doesn't go as cleanly

25 / 2
12.5 / 2
6.25 / 2
3.125 / 2
1.5625 / 2
0.78125 - we are finally below 1

so the answer to this is

log(25 =? 4.64)

the actual calculation itself isn't important, what matters if we look at it on a chart

Logarithm Complexity
Logarithmic time complexity is great

O(n^2) - O(nlog n) - O(n) - O(log n) - O(1)

Who Cares?

1. Certain searching algorithms have logarithmic time complexity
2. Efficent sorting algorithms involve logarithms
3. Recursion sometimes involves logarithmic space complexity

Basicly in the future, we will see it

Recap of BIG O

1. To analyse the performance of an algorithm, we use Big O Notation
2. Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
3. Big O Notation doesn't care about precision, only general trends (Linear? quadratic? constant?)
4. The time or space complexity (as measured by Big O) depeneds only on the algorithm, not the hardware used to run the algorithm.
5. Big ) Notation is everywhere so we will get alot of practice

Now that we covered BIG O, lets spend a little time analyzing the things we do all the time in JS: working with Arrays, Objects, and built in methods

So out Objectives

1. Understand how objects and arrays work through the lens of Big O
2. Explain why adding elements to the begining of an array is costly
3. Compare and Contrast the runtime for arrays and objects, as well as built in methods.

So Objects - Unordered, Key Value Pairs

Here is an example of a JavaScript Object

let instructor = {
firstName: "Kelly",
isInstructor: true,
favoriteNumbers: [1,2,3,4]
}

So when do we use Objects?

- When we don't need order
- When you need Quick/fast access/insertion and removal

And when we say Quick, we mean constant time

Big O of Objects
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

When you don't need ordering, objects are an excellent choice!

Now behind the scenes its a little more complicated, but for now all that we need to know is
Javascript is able to Add something into an object, Store a new piece of information in constant time
Its also able to retrieve something in constant time, and update something in constant tim.

So its quick and fast for all the basic operations

There is no order, so there is no begining and no end, so it doesn't matter where you insert, since there is no where

Like you can't insert into the begining, end, or middle of an object

Now where most of Objects are Constant Time O(1)

Searching is different, that is Linear time

(accesing information with a key is constant time)

But it we want to check if there is a value without a key, thats different. Searching requires the K, so the amount N grows, so too will the amount of time to search. thats why Searching is O(n)

Big O of Object Methods

Object.key - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

So if there is 100 properties in our object, there will be 100 things we need to do. So it runs roughly in line with N

Quiz -

1. What is the Big O for adding a key and value into an object?
   answer - O(1)
2. What is the Big O for accessing a key in an Object?
   answer - O(1)
3. What is the Big O for removing a key in an object?
   answer - O(1)


-- BIG O of ARRAYS 

The biggest selling point to Arrays is that they are ordered, they are ordered lists. Unlike an object where things just float around, Arrays have an index and thus are ordered by it. the order of an array can be useful, but it has its own costs. 

When to use an Array?
1. When you need order
2. When you need fast access/insertion and removal (sort of...)

(there are other data structures, like a singular linked list or a double linked list, but those aren't free to use like Arrays and Objects, we'll discuss linked lists later)

Big O of Arrays 

Insertion - it depends
Removal   - it depends
Searching - O(N)
Access    - O(1)

To note, in Javascript, accessing by Index is really fast. Like if you have a array with 10,000 index's and you need to access index 9000, Javascript doesn't go thru them all, it can just access the 9000 index as quickly and easily as it can any other index. So it doens't matter how long/far the array is. 

Insertion and Removal are more complicated

For inserting, if I push something into an array at the last index, that would be O(1). The real problem is when you try an insert at the begining of an array 

Adding to the begining of an array would mess up the index, and every element would have to be re-indexed. An array with 4 elements thisn't so much an issue, but an Array with thousands of elements is a nightmare. So if we inset at the begining of an Array, it becomes O(N) since the amount of time it would take, would grow in proportion with N

Removing presents the same problem. Removing from the begining would require reindexing. Sometimes you need to have something at the begining, so being able to do this is fine, but you have to be aware of how the big O will change and its not as fast and efficent as removing something from the end. 

The only exception to this is adding to an empty array since it doesn't matter which way since its the same regardless. 

Big O also applies to Array Methods

- push      - O(1)
- pop       - O(1)
- shift     - O(N)
- unshift   - O(N)
- concat    - O(N)
- slice     - O(N)
- splice    - O(N)
- sort      - O(N*logN) (sorting is more complex, we will get into this more later in the course)
- forEach/map/filter/reduce/etc - O(N)

Push and Pop are the fastest, and Sort is the Slowest. Everything else is based on the size of N

Quiz - 

What is the Big O for pushing into an Array  - O(1)
What is the Big O for shifting into an Array - O(N)
What is the Big ) for the forEach function   - O(N)