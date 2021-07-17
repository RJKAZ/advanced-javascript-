// Example 1 

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n. 

// the easiest solution is to create a total variable (an accumulator) and loop thru all numbers and add them in one at a time, starting at 1 and ending at n

function addUpTo(n) {
    let total = 0;   // total variable starts at 0
    for (let i = 1; i <= n; i++) {  // for loop
        total += i;
    }
    return total;  // return the total
}

console.log(addUpTo(6)); // returns 21 to the console, effectivly this function counts up 6 and adds the numbers, 1 + 2 + 3 + 4 + 5 + 6 = 21

// Now a second solution that is way shorter (shorter doesn't always mean better) this is shorter becasue it doesn't use a loop and instead uses pure math

function addUpTo2(n) {
    return n * (n + 1) /2;
}

console.log(addUpTo2(6)); // This also returns 21

// SO....Which one is better? Refer to the notes for this answer

// We shall focus on timeing and to quantify this, we shall use a built in timing method to see which code runs faster

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000}seconds.`)

// so using this method we are calculating out how long the first solution takes, but comparing how fast that solution can calculate up to 1 billion, 
// so the first solution took 1.3077000000029801seconds.
// However this will vary with every turn, reloading the page it clocked at Time Elapsed: 1.3152999999970199seconds. (this normal)

// now lets try the 2nd solution and see how fast this is

let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t3 -t4) / 1000}seconds.`)

// The 2nd solution took 0 seconds. 

//Before the Answer is explained, I think the reason for this has to do with the Javascripts engine, the call stack and heap. 

// But while the 2nd solution is now quantifiablly faster and shorter, is it still better? 

// Thats gets tricky, cause while we can definitly quantify this, its not the most reliable approach (how do we explain it, talk about it?)

// this bring us to the problem with time - jump back to the notes
