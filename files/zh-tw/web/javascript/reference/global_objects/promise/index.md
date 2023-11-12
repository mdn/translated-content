---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

{{JSRef}}

**`Promise`** 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

> **備註：** 此條目為介紹 Promise 建構式。要瞭解 Promise 相關使用方式，請先參考[使用 Promise](/zh-TW/docs/Web/JavaScript/Guide/Using_promises)。Promise 建構式主要用於包裹尚未支援 Promise 的函式。

{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}

## 語法

```js
new Promise( /* executor */ function(resolve, reject) { ... } );
```

### 參數

- executor
  - : 為一個依序接收兩個參數的函式：`resolve` 及 `reject`（實現及拒絕回呼函式）。在 Promise 實作中，`executor` 函式在傳入參數 `resolve` 與 `reject` 後會立刻執行（`executor` 函式會在 `Promise` 建構式回傳 Promise 物件前被執行）。`resolve` 與 `reject` 函式，會在被個別呼叫時，個別執行之。通常 executor 函式會發起一些非同步操作。接著，成功完成後執行 `resolve` 以完成 promise；或如果有錯誤，執行 `rejects`。
    如果 executor 函式在執行中拋出錯誤，promise 會被拒絕（rejected），回傳值也將被忽略。

## 描述

**`Promise`** 會代理一個建立時，不用預先得知的值。它使你能夠繫結（associate）著發動非同步操作後，最終的成功值（success value）或失敗訊息（failure reason）的處理函式（handlers）。這讓非同步方法回傳值的方式很像同步方法，但不是回傳最終結果：非同步方法回傳一個 _promise_ 物件作為未來某時間點的值。

一個 `Promise` 物件處於以下幾種狀態：

- _擱置（pending）_：初始狀態，不是 fulfilled 與 rejected。
- _實現（fulfilled）_：表示操作成功地完成。
- _拒絕（rejected）_：表示操作失敗了。

一個處於擱置狀態的 promise 能以一個值被實現（fulfilled），或是以一個原因或錯誤而被拒絕（rejected）。當上述任一狀態轉換發生時，那些透過 `then` 方法所繫結（associated）的處理函式列隊就會依序被調用。（若一個 promise 已被實現或拒絕，繫結（attached）於它的處理函式將立即被呼叫，因此完成非同步操作與繫結處理函式之間不存在競爭條件（race condition）。）

由於 {{jsxref("Promise.then", "Promise.prototype.then()")}} 以及 {{jsxref("Promise.catch", "Promise.prototype.catch()")}} 方法都回傳 promise，它們可以被串接。

![](https://cdn.rawgit.com/Vectaio/a76330b025baf9bcdf07cb46e5a9ef9e/raw/26c4213a93dee1c39611dcd0ec12625811b20a26/js-promise.svg)

> **備註：** 許多其他語言擁有機制用來惰性求值（lazy evaluation）及延遲（deferring）運算，它們也被稱作「promises」 — e.g. Scheme. 然而在 JavaScript 中 Promises 代表那些（已經）發生中（happening）的程序，它們可以繫結回呼函式。若您要找的是惰性求值表示式，考慮不帶參數的 [arrow function](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：`f = () => expression` 來建立惰性求值表示式，並透過 `f()` 進行求值.

> **備註：** 一個被實現或拒絕，但不處於 pending 的 promise 被稱作被解決（settled）。您也會見到使用解決（resolved）一詞來描述 promises — 這代表 promises 被實現（fulfilled）了。[States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 這篇文章包含了更多 promises 的專有名詞。

## 屬性

- `Promise.length`
  - : 長度屬性，值固定為 `1`。(建構式參數數目).
- {{jsxref("Promise.prototype")}}
  - : `Promise` 建構式的原型（prototype）.

## 方法

- {{jsxref("Promise.all", "Promise.all(iterable)")}}
  - : 回傳一個 promise，當在引數 iterable 中所有 promises 都被實現時被實現，或在引數 iterable 中有一個 promise 被拒絕時立刻被拒絕。若回傳的 promise 被實現，它將以一個實現值的陣列被實現，其順序與 iterable 中的 promises 相同。若回傳的 promise 被拒絕，它將以失敗訊息被拒絕，此訊息來自第一個在 iterable 中被拒絕的 promise。這個方法在聚集許多 promises 的結果時很有效。
- {{jsxref("Promise.race", "Promise.race(iterable)")}}
  - : 回傳一個被實現或拒絕的 promise，當 iterable 中有一個 promise 被實現或拒絕時。
- {{jsxref("Promise.reject", "Promise.reject(reason)")}}
  - : 回傳一個以失敗訊息拒絕的 `promise`。
- {{jsxref("Promise.resolve", "Promise.resolve(value)")}}
  - : 回傳一個以 value 實現的 `promise`。若該值為 thenable (i.e. 具有 `then` 方法)，回傳的 promise 將跟隨（follow）之，採用她的最終狀態； 在其他情形回傳的 promise 將以 value 被實現。一般來說，當您不知道 value 是否為 promise，使用 {{jsxref("Promise.resolve", "Promise.resolve(value)")}}，將回傳值以 promise 作處理。

## `Promise` 原型

### 屬性

- `Promise.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Promise"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

### 方法

See the [Microtask guide](/zh-TW/docs/Web/API/HTML_DOM_API/Microtask_guide) to learn more about how these methods use the Microtask queue and services.

- {{jsxref("Promise.prototype.catch()")}}
  - : Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
- {{jsxref("Promise.prototype.then()")}}
  - : Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler `onFulfilled` or `onRejected` is not a function).
- {{jsxref("Promise.prototype.finally()")}}
  - : Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

## 建立 Promise

一個 `Promise` 物件透過 `new` 及其建構式建立。這個建構式接收一個叫作」執行器函式（executor function）「的引數。此函式接收兩個函式作為引數。第一個函式（`resolve）`在非同步作業成功完成時，以該作業之結果值被呼叫。第二個函式（`reject`）在作業失敗時，以失敗訊息，通常是一個 error object，被呼叫。

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // 執行一些非同步作業，最終呼叫:
  //
  //   resolve(someValue); // 實現
  // 或
  //   reject("failure reason"); // 拒絕
});
```

要提供一個函式 promise 功能，讓它回傳一個 promise 即可：

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

## 範例

### 入門範例

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // 當非同步作業成功時，呼叫 resolve(...),而失敗時則呼叫 reject(...)。
  // 在這個例子中，使用 setTimeout(...) 來模擬非同步程式碼。
  // 在實務中，您將可能使用像是 XHR 或者一個 HTML5 API.
  setTimeout(function () {
    resolve("Success!"); // Yay！非常順利！
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage 是任何您由上方 resolve(...) 傳入的東西。
  // 在此僅作為成功訊息，但是它不一定是字串。
  console.log("Yay! " + successMessage);
});
```

### 進階範例

```html
<button id="btn">Make a promise!</button>
<div id="log"></div>
```

這個小範例演示了 `Promise` 的運作機制。每當 {{HTMLElement("button")}} 被點擊時，`testPromise()` 方法被呼叫。每次點擊將透過 {{domxref("window.setTimeout()")}} 建立一個將在 1-3 秒內隨機地被實現的 promise，供 promise 計數（一個從 1 開始的數值）。建構式 `Promise()` 被用來建立 promise。

promise 的實現值單純地經由一個實現回呼函式 {{jsxref("Promise.prototype.then()","p1.then()")}} 被印出。下以一些文字紀錄來展現方法中同步的與非同步處理 promise 的部分是如何分離彼此。

```js
"use strict";
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") Started (<small>Sync code started</small>)<br/>",
  );

  // 建立一個新的 promise：此 promise 承諾一個數值計數, 由 1 開始（等待約 2 秒）
  let p1 = new Promise(
    // 這個解決器函數（resolver function）呼叫實現或
    // 拒絕 promise。
    (resolve, reject) => {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount +
          ") Promise started (<small>Async code started</small>)<br/>",
      );
      // 在此例子單純用來產生非同步特性。
      window.setTimeout(
        function () {
          // 實現這個 promise!
          resolve(thisPromiseCount);
        },
        Math.random() * 2000 + 1000,
      );
    },
  );

  // 接著透過呼叫 then() 來決定 promise 進入 resolved 時，要透過 then() 做什麼，
  // 或是進入 rejected 時，要透過 catch() 方法要做什麼。
  p1.then(
    // 印出實現值（fulfillment value）
    function (val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") Promise fulfilled (<small>Async code terminated</small>)<br/>",
      );
    },
  ).catch(
    // 印出失敗訊息（rejection reason）
    (reason) => {
      console.log("Handle rejected promise (" + reason + ") here.");
    },
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount +
      ") Promise made (<small>Sync code terminated</small>)<br/>",
  );
}
```

譯註：resolver function 即 executor function。

```js
if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}
```

這個範例從點擊按鈕開始。您的瀏覽器需要支援 Promise。在短時間內點擊按鈕許多次，您甚至將看到不同的 promises 一個接一個地被實現。

{{EmbedLiveSample("進階範例", "500", "200")}}

## 使用 XHR 載入圖片

另一個使用 `Promise` and [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) 來載入圖片的簡單例子可以在 MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) 儲存庫找到。 你也可以[see it in action](https://mdn.github.io/js-examples/promises-test/)。每個步驟都附以註解，讓你能逐步遵隨 Promise 與 XHR 架構。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Using promises](/zh-TW/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](http://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Jake Archibald: JavaScript Promises: There and Back Again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
- [Matt Greer: JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
- [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [Promise polyfill](https://github.com/jakearchibald/es6-promise/)
- [Udacity: JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)
