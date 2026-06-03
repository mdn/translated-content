---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
---

**`async function`** 宣告被定義為一個回傳 {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}} 物件的*非同步函式* 。

你也可以使用 {{jsxref("Operators/async_function", "async function expression", "", 1)}} 來定義一個*非同步函式*。

## 語法

```plain
async function name([param[, param[, ... param]]]) {
   statements
}
```

### 參數

- `name`
  - : 函式名稱。
- `param`
  - : 傳遞至函式的參數名稱。
- `statements`
  - : 組成該函式主體的陳述。

### 回傳值

{{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}} 物件，代表著一個非同步函式，該函式會執行該函式內的程式碼。

## 描述

當 `async` 函式被呼叫時，它會回傳一個 {{jsxref("Promise")}}。如果該 `async` 函式回傳了一個值，`Promise` 的狀態將為一個帶有該回傳值的 resolved。如果 `async` 函式拋出例外或某個值，`Promise` 的狀態將為一個帶有被拋出值的 rejected。

async 函式內部可以使用 {{jsxref("Operators/await", "await")}} 表達式，它會暫停此 async 函式的執行，並且等待傳遞至表達式的 Promise 的解析，解析完之後會回傳解析值，並繼續此 async 函式的執行。

> [!NOTE]
> `async/await` 函式的目的在於簡化同步操作 promise 的表現，以及對多個 `Promise` 物件執行某些操作。就像 `Promise` 類似於具結構性的回呼函式，同樣地，async/await 好比將 generator 與 promise 組合起來。

## 範例

### 簡單範例

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

> [!WARNING]
> 不要誤解 `Promise.all` 的 `await`
>
> 在 `add1` 裡，該執行為了第一個 `await` 而暫停了兩秒，接著為了第二個 `await` 又暫停了兩秒。在第一個計時器（timer）被觸發前，第二個計時器並不會被建立。而在 `add2` 裡，兩個計時器都被建立起來、也都執行 `await` 過了。這把它帶往了 resolve 所的 2 秒暫停、而不是 4 秒暫停。然而這兩個 `await` 呼叫都在連續運行，而非平行運行。`await` **並不是** `Promise.all` 的自動程式。如果你想讓兩個、甚至兩個以上的 `await` promises 同時執行（in parallel），你必須使用 `Promise.all`.

### 使用 async function 改寫 promise 鏈

一個 API 呼叫所回傳的 {{jsxref("Promise")}} 會導致一個 promise 鏈，將函式分隔成多個部份。考慮下列的程式碼：

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}
```

它可以用一個簡單的 `async function` 來改寫成這樣：

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

注意上方的範例，在 return 陳述中沒有使用 await 陳述，這是因為 async function 的回傳值隱含地被包裝於 {{jsxref("Promise.resolve")}} 之中。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} 物件
- {{jsxref("Operators/await", "await")}}
- ["Decorating Async Javascript Functions" on "innolitics.com"](https://innolitics.com/articles/javascript-decorators-for-promise-returning-functions/)
