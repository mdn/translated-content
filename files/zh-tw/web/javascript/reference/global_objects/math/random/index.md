---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.random()`** 靜態方法會回傳一個大於等於 0 且小於 1 的浮點偽隨機數，其在該範圍內大致呈均勻分佈——你可以將其縮放到你想要的範圍。實作會選擇亂數生成演算法的初始種子；使用者無法選擇或重設它。

> [!NOTE]
> `Math.random()` *不*提供密碼學上安全的亂數。請勿將其用於任何與安全性相關的事物。請改用 Web Crypto API，更精確地說，是 {{domxref("Crypto.getRandomValues()")}} 方法。

{{InteractiveExample("JavaScript Demo: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// 預期輸出：0、1 或 2

console.log(getRandomInt(1));
// 預期輸出：0

console.log(Math.random());
// 預期輸出：一個從 0 到 <1 的數字
```

## 語法

```js-nolint
Math.random()
```

### 參數

無。

### 回傳值

一個介於 0（含）和 1（不含）之間的浮點偽隨機數。

## 範例

請注意，由於 JavaScript 中的數字是遵循四捨五入至最近偶數行為的 IEEE 754 浮點數，因此以下函式（不包括 `Math.random()` 本身）所聲稱的範圍並不精確。通常，聲稱的上限是無法達到的，但如果 `Math.random()` 回傳一個非常接近 1 的數字，微小的差異可能無法在請求的最大值下表示，因此導致達到上限。

### 取得一個介於 0（含）和 1（不含）之間的亂數

```js
function getRandom() {
  return Math.random();
}
```

### 取得一個介於兩個值之間的亂數

此範例回傳一個介於指定值之間的亂數。回傳值不小於（且可能等於）`min`，且小於（不等於）`max`。

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### 取得一個介於兩個值之間的隨機整數

此範例回傳一個介於指定值之間的隨機*整數*。該值不小於 `min`（如果 `min` 不是整數，則為大於 `min` 的下一個整數），且小於（但不等於）`max`。

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 最大值不含，最小值包含
}
```

> [!NOTE]
> 使用 [`Math.round()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 來達成此目的可能很誘人，但這樣做會導致你的亂數遵循非均勻分佈，這可能不符合你的需求。

### 取得一個介於兩個值之間（含）的隨機整數

雖然上面的 `getRandomInt()` 函式在最小值上是包含的，但在最大值上是不包含的。如果你需要結果在最小值和最大值上都是包含的呢？下面的 `getRandomIntInclusive()` 函式可以達成此目的。

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 最大值和最小值都包含
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Crypto.getRandomValues()")}}
