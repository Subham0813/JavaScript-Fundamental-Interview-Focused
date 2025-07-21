/*

    How JS handles Async code?
    
JS is a Synchronous single threaded language so it always execute code line by line and one execution at a time manner.

So when JS engine encounter Async code it registers with the browser's environment and move to the next sync code for execution, which preserves the non blocking main theread of JS. Later when async code ready to execute it will pushed to the CALLBACK QUEUE, where all the async code function pushed before execution.

Here Event loop comes into the picture, eventloop is like a taskScheduler which contineously checks callstack and callback queue , if eventloop finds that callstack is empty then it pushes the callbackfunction from the callback queue into callstack and js engine immmidately executes that.

Async functions like setInterval, setTimeout, fetch etc. all executes like this manner.

    Callback Queue vs Microtask Queue (setTimeout vs Promise)

callback queue aka task queue stores callbacks of setTimeout, setInterval

Microtask Queue stores promises resolved callbacks like .then(), .catch(), .finally()

Event loop always prefer microtask over callback, so after each task from the Call Stack completes, the Event Loop checks the Microtask Queue and executes all microtasks before picking the next task from the Callback Queue.

we can say that microtask is a priority queue and callback is a regular queue if callstack and microtask is empty then callback will execute by js and both microtask and callback have a function in queue then eventloop always push all microtask to the call stack one by one first, then the rest callbacks. 

    Callback starvation

JS never execute callback queue before microtask queue, if there is scenario happen when a microtask after executing creating another microtask and this running in loop then the callback queue will never get a chance to execute which lead to callback starvation, 
JS Event Loop does NOT forcibly stop microtasks to execute callbacks. It waits until the Microtask Queue is empty before running the next callback queue.

*/

/*
But what about Node js , how async code works here?
Similarly as works in browser but here unlike browser Node.js uses Libuv , a C++ library to handle Async operations.
*/


