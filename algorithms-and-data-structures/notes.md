Notes on Big O Notation 

Its big in significance!

BEWARE - MATH AHEAD!!!

To Start off with, assume a hypothetical - that we have a problem that we have multiple solutions for, one solution uses a loop, another uses methods, etc, each solution is night and day different, but it takes us to the same end result

How do we determine which solution is best? Thats basicly what Big O is about. 

Its a way of generalizing code, talking about it, and comparing code and its performance to other peices of code. 

example -  the problem "Write a function that accepts a string input and returns a reverse copy" - there are like 10 distinctly different ways to accomplish/solve this problem.

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
    return n * (n + 1) /2;
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
