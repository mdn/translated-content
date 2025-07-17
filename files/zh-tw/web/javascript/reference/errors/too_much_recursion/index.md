---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

當函式呼叫過多，或函式缺少基礎情況時，會發生 JavaScript 的「too much recursion」或「Maximum call stack size exceeded」例外。

## 訊息

```plain
RangeError: Maximum call stack size exceeded (Chrome)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded. (Safari)
```

## 錯誤類型

Firefox 中為 {{jsxref("InternalError")}}；Chrome 和 Safari 中為 {{jsxref("RangeError")}}。

## 哪裡出錯了？

一個會呼叫自己的函式稱為*遞迴函式*。一旦滿足某個條件，函式就會停止呼叫自己。這稱為*基礎情況*。

在某些方面，遞迴類似於迴圈。兩者都會多次執行相同的程式碼，且都需要一個條件（以避免無限迴圈，或在此情況下是無限遞迴）。當函式呼叫過多，或函式缺少基礎情況時，JavaScript 就會拋出此錯誤。

## 範例

此遞迴函式根據終止條件執行 10 次。

```js
function loop(x) {
  if (x >= 10)
    // 「x >= 10」是終止條件
    return;
  // 做些事情
  loop(x + 1); // 遞迴呼叫
}
loop(0);
```

將此條件設定為一個極高的值，將無法運作：

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // 做些事情
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

這個遞迴函式缺少一個基礎情況。由於沒有終止條件，函式將會無限地呼叫自己。

```js example-bad
function loop(x) {
  // 缺少基礎情況
  loop(x + 1); // 遞迴呼叫
}

loop(0);

// InternalError: too much recursion
```

### Class 錯誤：遞迴過多

```js example-bad
class Person {
  constructor() {}
  set name(name) {
    this.name = name; // 遞迴呼叫
  }
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
```

當一個值被指派給 name 屬性（this.name = name;）時，JavaScript 需要設定該屬性。當這種情況發生時，就會觸發 setter 函式。

在此範例中，當 setter 被觸發時，它被告知要再次做同樣的事情：_設定它本應處理的同一個屬性_。這會導致函式不斷地呼叫自己，從而造成無限遞迴。

如果在 getter 中使用相同的變數，也會出現此問題。

```js example-bad
class Person {
  get name() {
    return this.name; // 遞迴呼叫
  }
}
```

為避免此問題，請確保在 setter 函式內部指派的屬性與最初觸發 setter 的屬性不同。getter 也是如此。

```js
class Person {
  constructor() {}
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
```

## 參見

- {{Glossary("Recursion", "遞迴")}}
- [遞迴函式](/zh-TW/docs/Web/JavaScript/Guide/Functions#遞迴)
