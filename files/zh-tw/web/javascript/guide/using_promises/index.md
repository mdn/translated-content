---
title: 使用 Promise
slug: Web/JavaScript/Guide/Using_promises
---

{{jsSidebar("JavaScript Guide")}}

{{jsxref("Promise")}} 是一個表示非同步運算的最終完成或失敗的物件。由於多數人使用預建立的 Promise，這個導覽會先講解回傳 Promise 的使用方式，之後再介紹如何建立。

基本上，一個 Promise 是一個根據附加給他的 Callback 回傳的物件，以取代傳遞 Callback 到這個函數。

舉例來說，下方的範例若用舊方式應該會有兩個 Callback，並根據成功或失敗來決定使用哪個：

```js
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);
```

而新作法會回傳一個 Promise，這樣你就可以附加 Callback：

```js
let promise = doSomething();
promise.then(successCallback, failureCallback);
```

再簡單點：

```js
doSomething().then(successCallback, failureCallback);
```

我們稱之為 _非同步函數呼叫_。這個做法有許多好處，我們接下來看看。

## 保證

不如舊做法，一個 Promise 有這些保證：

- Callback 不會在[當次的迴圈運行結束](/zh-TW/docs/Web/JavaScript/Event_Loop#執行到完成（run-to-completion）)前呼叫。
- Callback 用 .then 添加，在非同步運算結束*後*呼叫，像前面那樣。
- 複 Callback 可以透過重複呼叫 .then 達成。

但 Promise 主要的立即好處是串連。

## 串連

有個常見的需求是依序呼叫兩個以上的非同步函數，我們稱之為建立 _Promise 鏈_。

看看魔術：`then` 函數回傳一個新的 Promise，不同於原本。

```js
let promise = doSomething();
let promise2 = promise.then(successCallback, failureCallback);
```

或

```js
let promise2 = doSomething().then(successCallback, failureCallback);
```

第二個 Promise 不只代表 `doSomething()` 完成，還有`successCallback` 或 `failureCallback` ，這兩個非同步函數回傳另一個 Promise。如此一來，任何 Callback 附加給 `promise2` 會被排在 `successCallback` 或`failureCallback` 之後。

基本上，每個 Promise 代表著鏈中另外一個非同步函數的完成。

在古時候，多個非同步函數會使用 Callback 方式，導致波動拳問題：

_（原文 Pyramid of Doom 查無中文翻譯，以較常見之波動拳取代）_

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);
```

有了新方法，我們附加 Callback 到回傳的 Promise 上，來製造 _Promise 鏈_：

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);
```

`then` 的函數是選用的，以及 `catch(failureCallback)` 是 `then(null, failureCallback)` 的簡寫。你也許會想用[箭頭函數](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)取代：

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

**注意**：永遠要回傳結果，否則 Callback 不會獲得前一個 Promise 的結果。

### 獲錯後串接

失敗*後*的串接是可行的，也就是說 `catch` 會非常好用，即使鏈中出錯。看看這個範例：

```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this whatever happened before");
  });
```

他會輸出：

```plain
Initial
Do that
Do this whatever happened before
```

注意「Do this」沒有被輸出，因為「Something failed」錯誤導致拒絕。

## 錯誤傳遞

在波動拳狀況中，你可能會看到三次 `failureCallback` ，在 Promise 鏈中只需要在尾端使用一次：

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

基本上，一個 Promise 鏈遇到錯誤時會往下尋找 Catch 處理器。這是經過模組化的非同步程式：

```js
try {
  let result = syncDoSomething();
  let newResult = syncDoSomethingElse(result);
  let finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

在 ECMAScript 2017 中，在有 [`async`/`await`](/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function) 語法糖的同步程式達到高峰：

```js
async function foo() {
  try {
    let result = await doSomething();
    let newResult = await doSomethingElse(result);
    let finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```

這基於 Promise，例如 `doSomething()` 和之前一樣。你可以閱讀在[這裡](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions)閱讀更多。

Promise 藉由捕捉所有錯誤，包含例外和程式錯誤，解決了 Callback 地獄的缺點。這是非同步運算的基本特性。

## 在舊有 API 上建立 Promise

{{jsxref("Promise")}} 可以透過建構子建立。所以用建構子包裹舊的 API 即可。

在理想情況，所有非同步函數都會回傳 Promise，然而許多 API 仍然用舊的方式來傳遞成功、失敗 Callback，有個典型的例子是{{domxref("WindowTimers.setTimeout", "setTimeout()")}} ：

```js
setTimeout(() => saySomething("10 seconds passed"), 10000);
```

混合古代 Callback 和 Promise 是有問題的。如果 `saySomething` 失敗或有程式錯誤，那不會有任何錯誤被捕捉。

幸運地，我們可以用 Promise 包裹他，最好盡可能的在最底層包裹，並永遠不要再直接呼叫他們：

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

基本上，Promise 建構子需要一個運作函數來正規地處理或拒絕 Promise。但因為 `setTimeout` 不會失敗，所以我們捨棄 reject。

## 組合

{{jsxref("Promise.resolve()")}} 和 {{jsxref("Promise.reject()")}} 是用來正規地建立已經處理或拒絕的 Promise。他們在某些情況特別有用。

{{jsxref("Promise.all()")}} 和 {{jsxref("Promise.race()")}} 是兩個組合工具用於使 Promise 平行運作。

連續關聯是可行的，這是極簡 JavaScript 範例：

```js
[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
```

基本上，我們摺疊（Reduce）一個非同步函數陣列成一個 Promise 鏈：`Promise.resolve().then(func1).then(func2);`

這可以用可重用的構成函數完成，通常用函數式編程：

```js
let applyAsync = (acc, val) => acc.then(val);
let composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

`composeAsync` 接受任何數量的函數作為參數，並回傳一個接受一個初始值用來傳給組合的新函數。這個好處是無論其中函數是非同步或否，都會保證用正確的順序執行：

```js
let transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
transformData(data);
```

ECMAScript 2017 中連續組合利用 async/await 更簡單：

```js
for (let f of [func1, func2]) {
  await f();
}
```

## 計時

為了避免意外，傳給 `then` 的函數不會被同步地呼叫，即使是完成的 Promise：

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

被傳入的函數會被放在子任務佇列而非立即執行，因此他會在當前的事件迴圈結束、佇列清空時執行，例如：

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

## 看更多

- {{jsxref("Promise.then()")}}
- [Promises/A+ 特色](http://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
