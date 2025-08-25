class MyPromise {
  constructor(executorFunction) {
    this.state = "pending";
    this.value = null;
    this.reason = null;

    const resolve = (value) => {
      console.log(this);
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
      return function () {
        return value;
      };
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
      }
      return function () {
        return reason;
      };
    };

    try {
      executorFunction(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onrejected) {
    if(this.state === "fulfilled") return onFulfilled(this.value)
    else if(this.state === "rejected") return onrejected(this.value)
    else return new MyPromise()
  }
}

const response = new MyPromise((resolve, reject) =>
  resolve(() => console.log("Hello from Promise resolve"))
);

response.then((res) => res());



//THE ACTUAL PROMISE CLASS OF JS
/*
class Promise {
  constructor(executor: (resolve: Function, reject: Function) => void): Promise;
  then(onFulfilled: Function, onRejected: Function): Promise;
  catch(onRejected: Function): Promise;
  finally(onFinally: Function): Promise;
  static all(iterable: Iterable): Promise;
  static allSettled(iterable: Iterable): Promise;
  static any(promises: Iterable): Promise;
  static race(iterable: Iterable): Promise;
  static reject(r: any): Promise;
  static resolve(x: any): Promise;
  static try(callbackfn: Function, ...args?: Array<mixed>): Promise;
  static withResolvers(): { promise: Promise, resolve: function, reject: function };
}
*/