---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}await 運算子可被用來等待 {{jsxref("Promise")}}，只能在 {{jsxref("Statements/async_function", "async function")}}內使用。

## 語法

```plain
[rv] = await expression;
```

- `expression`
  - : 等待解析的 {{jsxref("Promise")}} 物件或任何值。
- `rv = 回傳值`
  - : 回傳 Promise 物件的 resolved 值，或當該值不是 Promise 物件時，回傳該值本身。

## 描述

此 await 表示法會暫停 async 函式執行，等待 Promise 物件的解析，並在 promise 物件的值被 resolve 時回復 async 函式的執行。await 接著回傳這個被 resolve 的值。如果回傳值不是一個 Promise 物件，則會被轉換為 resolved 狀態的 Promise 物件。

如果 Promise 物件被 rejected，則 await 會丟出 rejected 的值。

## 範例

若將 Promise 物件傳給 await 運算式，它會等待 Promise 解析並回傳 resolve 後的值。

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

若傳給 await 的值並非一個 Promise 物件，它會將該值轉換為 resolved Promise，並等待之。

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

若 Promise 被 reject，則丟出 reject 後的異常值。

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
