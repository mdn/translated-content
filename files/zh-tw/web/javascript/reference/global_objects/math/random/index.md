---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef}}

函數 **`Math.random()`** 會回傳一個偽隨機小數 (pseudo-random) 介於 0 到 1 之間(包含 0，不包含 1) ，大致符合數學與統計上的均勻分佈 (uniform distribution) ，你可以選定想要的數字區間，它會透過演算法被產生並且不允許使用者自行跳選或重設成特定數字。{{EmbedInteractiveExample("pages/js/math-random.html")}}

> **備註：** `Math.random()` 所產生的偽隨機小數不符合加密學安全性要求。_請勿使用於任何加密、資安相關領域。_
>
> _如有加密需求建議參考 Web Crypto API_[`window.crypto.getRandomValues()`](/zh-TW/docs/Web/API/Crypto/getRandomValues)

## 語法

```plain
Math.random()
```

### 回傳值 Return value

回傳一個偽隨機小數 (pseudo-random)，小數也稱浮點數； 介於 0 到 1 之間(包含 0，不包含 1) 。

## 範例

請留意 JavaScript 中的數字與許多語言一樣使用 IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges claimed for the functions below (excluding the one for `Math.random()` itself) aren't exact. If extremely large bounds are chosen (2^53 or higher), it's possible in _extremely_ rare cases to calculate the usually-excluded upper bound.

### Getting a random number between 0 (inclusive) and 1 (exclusive)

```js
function getRandom() {
  return Math.random();
}
```

### Getting a random number between two values

This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) `min`, and is less than (and not equal) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Getting a random integer between two values

This example returns a random _integer_ between the specified values. The value is no lower than `min` (or the next integer greater than `min` if `min` isn't an integer), and is less than (but not equal to) `max`.

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> might be tempting to use `Math.round()` to accomplish that, but doing so would cause your random numbers to follow a non-uniform distribution, which may not be acceptable for your needs.

### Getting a random integer between two values, inclusive

While the `getRandomInt()` function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The `getRandomIntInclusive()` function below accomplishes that.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 其他參考資料

- [`window.crypto.getRandomValues()`](/zh-TW/docs/Web/API/Crypto/getRandomValues)
