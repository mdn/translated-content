---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`NaN`** 全域屬性是一個表示非數值的值。

{{InteractiveExample("JavaScript Demo: NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// 預期輸出："1"

console.log(sanitize("NotANumber"));
// 預期輸出：NaN
```

## 值

與 {{jsxref("Number.NaN")}} 相同的數值。

{{js_property_attributes(0, 0, 0)}}

## 描述

`NaN` 是*全域物件*的一個屬性。換句話說，它是全域作用域中的一個變數。

在現代瀏覽器中，`NaN` 是一個不可配置、不可寫入的屬性。即使在非現代瀏覽器中，也應避免覆寫它。

有五種不同類型的運算會回傳 `NaN`：

- 數值轉換失敗（例如：顯式的 `parseInt("blabla")`、`Number(undefined)`，或隱式的 `Math.abs(undefined)`）
- 結果不是實數的數學運算（例如：`Math.sqrt(-1)`）
- 不定型（例如：`0 * Infinity`、`1 ** Infinity`、`Infinity / Infinity`、`Infinity - Infinity`）
- 運算元為 `NaN` 或被強制轉型為 `NaN` 的方法或表達式（例如：`7 ** NaN`、`7 * "blabla"`）——這意味著 `NaN` 具有傳染性
- 其他將無效值表示為數值的情況（例如：無效的 [Date](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`、`"".charCodeAt(1)`）

`NaN` 及其行為並非 JavaScript 所首創。它在浮點數運算中的語義（包括 `NaN !== NaN`）是由 [IEEE 754](https://zh.wikipedia.org/wiki/雙精度浮點數) 標準所定義。`NaN` 的行為包括：

- 如果 `NaN` 涉及數學運算（但不包括[位元運算](/zh-TW/docs/Web/JavaScript/Reference/Operators#位元移位運算子)），結果通常也是 `NaN`。（參見下方的[反例](#靜默避開_nan)。）
- 當 `NaN` 是任何關係比較（`>`、`<`、`>=`、`<=`）的運算元之一時，結果總是 `false`。
- `NaN` 與任何其他值比較（透過 [`==`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Equality)、[`!=`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Inequality)、[`===`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_equality) 和 [`!==`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_inequality)）結果皆不相等——包括與另一個 `NaN` 值比較。

`NaN` 也是 JavaScript 中的 [falsy](/zh-TW/docs/Glossary/Falsy) 值之一。

## 範例

### 測試是否為 NaN

要判斷一個值是否為 `NaN`，使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("isNaN()")}} 是最清楚的方法——或者，由於 `NaN` 是唯一不等於自身的值，你可以執行自我比較，如 `x !== x`。

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

然而，請注意 `isNaN()` 和 `Number.isNaN()` 之間的差異：前者如果值目前是 `NaN`，或者在強制轉型為數值後會變成 `NaN`，就會回傳 `true`；而後者只有在值目前就是 `NaN` 時才會回傳 `true`：

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

基於同樣的原因，使用 BigInt 值時，`isNaN()` 會拋出錯誤，而 `Number.isNaN()` 則不會：

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

此外，某些陣列方法無法找到 `NaN`，而其他方法則可以。具體來說，尋找索引的方法（{{jsxref("Array/indexOf", "indexOf()")}}、{{jsxref("Array/lastIndexOf", "lastIndexOf()")}}）無法找到 `NaN`，而尋找值的方法（{{jsxref("Array/includes", "includes()")}}）則可以：

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// 接受適當定義謂詞的方法總是可以找到 NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

關於 `NaN` 及其比較的更多資訊，請參見[相等性比較與相同性](/zh-TW/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)。

### 可觀察到的不同 NaN 值

產生兩個二進位表示法不同但都是 `NaN` 的浮點數是可能的，因為在 [IEEE 754 編碼](https://zh.wikipedia.org/wiki/NaN#浮點數)中，任何指數為 `0x7ff` 且尾數非零的浮點數都是 `NaN`。在 JavaScript 中，你可以使用[型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)進行位元級的操作。

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// 取得 NaN 的位元組表示
const n = f2b(NaN);
const m = f2b(NaN);
// 改變符號位元，這對 NaN 來說無關緊要
n[7] += 2 ** 7;
// n[0] += 2**7; 針對大端序處理器
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// 改變第一個位元，這是尾數的最低有效位元，對 NaN 來說無關緊要
m[0] = 1;
// m[7] = 1; 針對大端序處理器
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### 靜默避開 NaN

`NaN` 會透過數學運算傳播，因此通常只需在計算結束時測試一次 `NaN` 即可偵測錯誤情況。唯一會靜默避開 `NaN` 的情況是使用指數為 `0` 的[指數運算](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)時，它會立即回傳 `1` 而不測試底數的值。

```js
NaN ** 0 === 1; // true
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN()")}}
