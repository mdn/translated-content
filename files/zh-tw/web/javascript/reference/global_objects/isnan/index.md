---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

**`isNaN()`** 函式會判斷某個數值是不是 {{jsxref("NaN")}}。注意：在 `isNaN` 函式裡面，有個[有趣的](#描述)強制性規則。你可能會想改用在 ECMAScript 2015 導入的 {{jsxref("Number.isNaN()")}}。

{{InteractiveExample("JavaScript Demo: Standard built-in objects - isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
```

## 語法

```js-nolint
isNaN(value)
```

### 參數

- `value`
  - : 要測試的數值。

### 回傳值

如果給定值是 {{jsxref("NaN")}} 就回傳 **`true`**、否則就回傳 **`false`**。

## 描述

### 為什麼要用 `isNaN` 函式

與其他 JavaScript 的值不同，你不可能靠等號運算符（== 與 ===）來判斷某個值是不是 {{jsxref("NaN")}}，因為連 `NaN == NaN` 與 `NaN === NaN` 的結果都是 `false`。因此，`isNaN` 函式是必要的。

### `NaN` 值的來源

`NaN` 會在算術運算（arithmetic operations）出現 _undefined_ 或是 _unrepresentable_ 值的結果時產生。這些值不一定是溢出條件。`NaN` 亦為試圖給毫無可用數字的原始值、予以強制運算之結果。

例如，零除以零的結果會是 `NaN`——不過把其他數字除以零則不是 `NaN`。

### 令人困惑的特殊狀況行為

從最早的 `isNaN` 函式版本規範始，其針對非數值之行為，不斷教人困惑至極。當 `isNaN` 函式的參數並非[數字](http://es5.github.com/#x8.5)型別時，此值會先強制轉換到數字。該值接著會測定此值是否為 {{jsxref("NaN")}}。因此，當被強制轉換的非數字，給出了有效的非 NaN 值（經典案例為空的字串與布林原始值：它們在強制轉換時，會給予數字結果 0 或 1）時，會回傳不如預期的「false」值：以空的字串為例，它很明顯地「非數字」。這段教人糾結的點，乃出於「非數字」術語的「數字」一詞、由 IEEE-754 浮點值定義之事實而來。這個函式要解釋為「當這個值，被強制轉換為數值時，它還是 IEEE-754 的『非數字』值嗎？」的答案。

最新的 ECMAScript（ES2015）版本導入了 {{jsxref("Number.isNaN()")}} 函式。儘管 `Number.isNaN` 的 `NaN` 依舊維持了數字上的意義、而不是簡單的「非數字」，`Number.isNaN(x)` 在偵測 `x` 為 `NaN` 與否時比較可靠。另外，如果在缺少 `Number.isNaN` 的情況下，通過表達式`(x != x)` 來檢測變量`x`是否是 NaN 會更加的可靠。

一個 `isNaN` 的 polyfill 可以理解為（這個 polyfill 利用了 `NaN` 自身永不等於自身這一特性）：

```js
var isNaN = function (value) {
  var n = Number(value);
  return n !== n;
};
```

## 範例

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// 字串
isNaN("37"); // false: "37" 轉換成數字的 37 後就不是 NaN 了
isNaN("37.37"); // false: "37.37" 轉換成數字的 37.37 後就不是 NaN 了
isNaN("123ABC"); // true:  parseInt("123ABC") 是 123 但 Number("123ABC") 是 NaN
isNaN(""); // false: 空字串轉換成數字的 0 後就不是 NaN 了
isNaN(" "); // false: 有空白的字串轉換成數字的 0 後就不是 NaN 了

// 日期
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// 這個偵測的錯誤是不能完全信賴 isNaN 的理由
isNaN("blabla"); // true: "blabla" 被轉換為數字，將其解析為數字失敗後回傳了 NaN
```

### 實用的特殊狀況行為

當然，你能以更用途導向的方法去思考 `isNaN()`：如果 `isNaN()` 回傳 `false`，那麼把 `x` 用在任何算術表達式都不會回傳 `NaN`。相反地，如果回傳 `true`，那麼把 `x` 用在任何算術表達式都會是 `NaN`。這在 JavaScript 的意義是 `isNaN(x) == true` 等於 `x - 0` 回傳 `NaN`（儘管在 JavaScript 裡面 `x - 0 == NaN` 永遠回傳 false，你因而無法測試）── 事實上，`isNaN(x)`、`isNaN(x - 0)`、`isNaN(Number(x))`、`Number.isNaN(x - 0)`、`Number.isNaN(Number(x))` 在 JavaScript 裡面，都會回傳一樣的東西。而 `isNaN(x)` 是所有表達式裡面最短的一種。

比方說，你可以用這個式子，去測試函式的參數能不能透過算術處理（也就是能「像」數字一樣被利用）、否則就提供預設值之類的。你可以透過上下文的根據以隱式數值轉換（implicitly converting value），以使用 JavaScript 提供的全部功能。

```js
function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
}

// 與 Number.isNaN() 一樣：
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
}

// 以下範例的函式參數 x，isNaN(x) 都會回傳 false，
// 儘管 x 不是數字，依舊能用在算術表達式。
increment(""); // 1: "" 被轉換成 0
increment(new String()); // 1: 空字串的新字串物件被轉換成 0
increment([]); // 1: [] 被轉換成 0
increment(new Array()); // 1: 空陣列的新陣列物件被轉換成 0
increment("0"); // 1: "0" 被轉換成 0
increment("1"); // 2: "1" 被轉換成 1
increment("0.1"); // 1.1: "0.1" 被轉換成 0.1
increment("Infinity"); // Infinity: "Infinity" 被轉換成 Infinity
increment(null); // 1: null 被轉換成 0
increment(false); // 1: false 被轉換成 0
increment(true); // 2: true 被轉換成 1
increment(new Date()); // 回傳以毫秒為單位加 1，當今的日期/時間

// 以下範例的函式參數 x，isNaN(x) 都會回傳 false，而 x 的確是數字。
increment(-1); // 0
increment(-0.1); // 0.9
increment(0); // 1
increment(1); // 2
increment(2); // 3
// …等等…
increment(Infinity); // Infinity

// 以下範例的函式參數 x，isNaN(x) 都會回傳 true，x 也的確不是數字。
// 使得函式會被 0 取代，並回傳 1
increment(String); // 1
increment(Array); // 1
increment("blabla"); // 1
increment("-blabla"); // 1
increment(0 / 0); // 1
increment("0/0"); // 1
increment(Infinity / Infinity); // 1
increment(NaN); // 1
increment(undefined); // 1
increment(); // 1

// isNaN(x) 與 isNaN(Number(x)) 永遠一樣，不過這裡的 x 是強制存在的！
isNaN(x) == isNaN(Number(x)); // 針對所有 x 的值都是 true，x == undefined 也不例外，
// 因為 isNaN(undefined) == true 且 Number(undefined) 回傳 NaN，
// 不過……
isNaN() == isNaN(Number()); // false，因為 isNaN() == true 且 Number() == 0
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
