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

- an example of space complexity - jump to the javascript