//Debouncing

//Debouncing is technique where a function execution is postponed for a specified delay has passed since the last time it was invoked.

//Means If a function is called before and it is being call again and again then it will not executed utill the timer completes.

//Its ensures that a function will executes ONLY once after the user stops triggering the event for a specified time.

//Like Typeing in google search , let say there is a function getSuggestion is there so, when we type it will immidatelt invoke that Fn and eventually it hits the api and get suggestions for each letter we typed, so with Debouncing technque we can reduce the calls and the Fn will hit the api for a specied delay.


// Example

const getSuggestions =  (string) => {
    console.log(string)
}

const debounce = function (func, delay)  {
    let timer

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const debouncedGetSuggestions = debounce(getSuggestions, 400)


const input = document.getElementById('text')
input.addEventListener('keyup', (e) => debouncedGetSuggestions(e.target.value))


//Throttling

//Throttling is a technique to limit the execution of the function at most once in a specified time period, no matter how may nay time the event fired within that interval

//Difference B/W Throttling and Debouncing

//Debouncing: timer resets on each new event before the delay finishes → function runs once after user stops triggering.

//Throttling: function runs immediately (or at the start), then freezes further calls for the specified period → function runs at most once per interval.

const box = document.getElementById('box')
const btn = document.getElementById('btn')

const throttle = function (func, delay) {
    let prevTime = 0;

    return function (...args) {
        const now = Date.now();
        if (now - prevTime >= delay) {
            func.apply(this, args);
            prevTime = now;
            btn.disabled = true

            setTimeout(() => {
                btn.disabled=false
            }, delay)
        }
        //  else {
        //     console.log("Too Many requests, bro take a chill pill and try after sometime");
        // }
    };
}

const getNewColor = () => {
    const color =  Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')
    box.style.backgroundColor = `#${color}`
    console.log(`bgcolor is #${color}`)
}


const throttledgetNewColor = throttle(getNewColor,500)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    throttledgetNewColor()
})