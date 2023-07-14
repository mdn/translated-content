---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
---

{{JSRef}}{{SeeCompatTable}}

`BigInt` 是一個內建的物件，提供了表示大於 2^53 的整數的功能 (2^53 是 JavaScript 原生的{{JSxRef("Number")}}能夠表示的最大值)

## 語法

```js
BigInt(value);
```

### 參數

- `value`
  - : 欲創建的數值，可以為整數或字串。

> **備註：** `BigInt()` 不和 {{JSxRef("Operators/new", "new")}} 一起使用。

## 說明

`BigInt` 是透過在一個數值後加上 `n` ，例如 `10n` ，或呼叫 `BigInt()` 所生成的。

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
```

`BigInt` 跟 {{JSxRef("Number")}} 很像，但在某些部分有些許不同 — 它不可以被用在內建的 {{JSxRef("Math")}} 物件方法中、而且不可以跟 `Number` 的實體混用運算子。

> **警告：** {{JSxRef("Number")}} 和 `BigInt` 不能混和計算 — 他們必須被轉換到同一個型態。
>
> 然而，在相互轉換時要注意， `BigInt` 在被轉換成 `Number` 時可能會遺失部分精度的資訊。

### 類別資訊

當使用 `typeof` 測試時，一個 `BigInt` 會回傳 "bigint"：

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

當使用 `Object` 來包裹時，`BigInt` 會被看成是普通的 "object" 型態：

```js
typeof Object(1n) === "object"; // true
```

### Operator

下列的運算子可以被用在 `BigInt` 上 (或由 object 包裹的 `BigInt`): `+`, `*`, `-`, `**`, `%`.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

`/` 運算子也同樣的能夠運行。然而，因為型態是 `BigInt` 而不是 `BigDecimal` ，除法運算會無條件捨去小數。也就是說，回傳值不會包含小數部分。

> **警告：** 回傳值帶小數的運算在使用`BigInt` 時小數部分會被捨去。

```js
const expected = 4n / 2n;
// ↪ 2n

const rounded = 5n / 2n;
// ↪ 2n, not 2.5n
```

### 比較

一個 `BigInt` 並不嚴格等於一個 {{JSxRef("Global_Objects/Number", "Number")}}，但他們會一般相等。

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

一個 {{JSxRef("Global_Objects/Number", "Number")}} 和 `BigInt` 可以像普通運算一樣比較。

```js
1n < 2;
// ↪ true

2n > 1;
// ↪ true

2 > 2;
// ↪ false

2n > 2;
// ↪ false

2n >= 2;
// ↪ true
```

他們可以參雜在陣列中並照預期的被排序。

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

Note that comparisons with `Object`-wrapped `BigInt`s act as with other objects, only indicating equality when the same object instance is compared:

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### Conditional

A `BigInt` behaves like a {{JSxRef("Global_Objects/Number", "Number")}} in cases where it is converted to a {{JSxRef("Global_Objects/Boolean", "Boolean")}}: via the {{JSxRef("Global_Objects/Boolean", "Boolean")}} function; when used with logical operators {{JSxRef("Operators/Logical_Operators", "Logical Operators")}} `||`, `&&`, and `!`; or within a conditional test like an {{JSxRef("Statements/if...else", "if statement")}}.

```js
if (0n) {
  console.log("Hello from the if!");
} else {
  console.log("Hello from the else!");
}

// ↪ "Hello from the else!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

Boolean(0n);
// ↪ false

Boolean(12n);
// ↪ true

!12n;
// ↪ false

!0n;
// ↪ true
```

## 方法

- {{JSxRef("BigInt.asIntN()")}}
  - : Clamps a BigInt value to a signed integer value, and returns that value.
- {{JSxRef("BigInt.asUintN()")}}
  - : Clamps a BigInt value to an unsigned integer value, and returns that value.

## 屬性

- {{JSxRef("BigInt.prototype")}}
  - : 允許對一個 `BigInt` 物件增加其屬性。

## `BigInt` 物件實體

All `BigInt` instances inherit from `BigInt.prototype`. The prototype object of the `BigInt` constructor can be modified to affect all `BigInt` instances.

### 方法

- [`BigInt.prototype.toLocaleString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString)
  - : Returns a string with a language-sensitive representation of this BigInt value. Overrides the [`Object.prototype.toLocaleString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) method.
- [`BigInt.prototype.toString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)
  - : Returns a string representing this BigInt value in the specified radix (base). Overrides the [`Object.prototype.toString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method.
- [`BigInt.prototype.valueOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf)
  - : Returns this BigInt value. Overrides the [`Object.prototype.valueOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method.

## 建議用法

### 轉型

因為在 {{JSxRef("Global_Objects/Number", "Number")}} 和 `BigInt` 之間轉換可能造成精度遺失，建議當數值會超過 2^53 時只使用 `BigInt` ，而不要在兩者之間進行轉換。

### 加密

`BigInt` 支援的運算並非常數時間。因此 `BigInt` [不適用在加密學上](https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html)。

## 範例

### 計算質數

```js
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Takes a BigInt as an argument and returns a BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth -= 1n;
      prime = maybePrime;
    }
    maybePrime += 1n;
  }

  return prime;
}

nthPrime(20n);
// ↪ 73n
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{JSxRef("Number")}}
