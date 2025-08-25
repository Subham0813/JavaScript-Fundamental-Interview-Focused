// //What is Promise in JS??

// //Before we understand promise we need to understand why it is important.
// //we know callback functions, and it can be used for async operations. It helps to call functions back asynchronously. Whenever we need to call a function after some certain time or or some certain delay we use callbacks.

// setTimeout(function () {
//   console.log("Hello from callback");
// }, 600);

// // But It can cause some problem i.e. Callback hell & Inversion of control

// //Callback Hell : It is a phenomenon when callbacks wraps inside callbacks and this happpens again and again in the same manner see below code. Also knowns as Pyramid of Doom in programming.

// //Inversion of Control : Its a result of calbacks that A callback can be give error while execution so the other callbacks inside that Error giving callback may be or may not be executes , there is no assurance so, our callback's execution totally depens on the outer callback function's behaviour, hence our function controls inverted to that callback function.

// // example
// const cartItems = [
//   "Phone",
//   "Back-Cover",
//   "Charger",
//   "Tempered-Glass",
//   "Earphone",
//   "Earphone-DAC",
// ];

// // cartOrder(
// //   cartItems,
// //   function (orderId) {
// //     proceedToPay(
// //       orderId,
// //       function (onetimePassword) {
// //         proceedToPaymentGateway(
// //           onetimePassword,
// //           function (transactionId) {
// //             showOrderConfirmationPage(function (transactionId) {
// //               console.log("order confirmed", transactionId);
// //             }, failureCallback);
// //           },
// //           failureCallback
// //         );
// //       },
// //       failureCallback
// //     );
// //   },
// //   failureCallback
// // );


// //✨✨
// //What is Promise? A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// //A promise is a returned object to which we attach callbacks, instead of passing callbacks into a function.

// //It has 3 states:

// // Pending – still working

// // Fulfilled – done successfully (resolve)

// // Rejected – failed (reject)



// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { id: 1, name: "Subham" };
//       resolve(user);
//     }, 2000);
//   });
// }

// const user = fetchUser().then((user) => console.log(user));

// //Real example
// try {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// } catch (err) {
//   console.log("Error", err);
// }

// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//   console.log(response);
// } catch (err) {
//   console.log("error", err);
// }

// // async function readStream() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

// //   const reader = response.body.getReader(); // get a reader

// //   console.log("reader", reader)
// //   let decoder = new TextDecoder();
// //   let result = "";

// //   while (true) {
// //     const { done, value } = await reader.read(); // read next chunk
// //     if (done) break;
// //     console.log(value)
// //     const l= result.length
// //     result += decoder.decode(value, { stream: true });
    
// //     console.log(`chunk ${result.length - l}`);
// //     console.log("\n")
// //   }

// //   // console.log("Final result:", result);
// // }

// // readStream()




//❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

const response = new Promise((resolve , reject) => 
  resolve(() => console.log("Hello from Promise resolve"))
)

console.log(response)

console.log(response.then(result => result()))




