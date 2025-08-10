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
// 預期輸出：「1」

console.log(sanitize("NotANumber"));
// 預期輸出：NaN
```

## 值

與 {{jsxref("Number.NaN")}} 的數值相同。

{{js_property_attributes(0, 0, 0)}}

## 說明

`NaN` 是*全域物件*的一個屬性。換句話說，它是一個在全域作用域中的變數。

在現代瀏覽器中，`NaN` 是一個不可設定、不可寫入的屬性。即使情況並非如此，也應避免覆寫它。

有五種不同類型的運算會回傳 `NaN`：

- 數值轉換失敗（例如，像 `parseInt("blabla")`、`Number(undefined)` 這樣的顯式轉換，或像 `Math.abs(undefined)` 這樣的隱式轉換）
- 結果不是實數的數學運算（例如 `Math.sqrt(-1)`）
- 不定式（例如 `0 * Infinity`、`1 ** Infinity`、`Infinity / Infinity`、`Infinity - Infinity`）
- 運算元是 `NaN` 或被強制轉換為 `NaN` 的方法或表達式（例如 `7 ** NaN`、`7 * "blabla"`）——這意味著 `NaN` 是會傳染的
- 其他需要將無效值表示為數字的情況（例如，無效的 [Date](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`、`"".charCodeAt(1)`）

`NaN` 及其行為並非由 JavaScript 發明。它在浮點數運算中的語意（包含 `NaN !== NaN`）是由 [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) 所規範。`NaN` 的行為包含：

- 如果 `NaN` 參與數學運算（但不是[位元運算](/zh-TW/docs/Web/JavaScript/Reference/Operators#位元移位運算子)），結果通常也是 `NaN`。（參見下方的[反例](#無聲地避開_nan)）。
- 當 `NaN` 是任何關係比較（`>`、`<`、`>=`、`<=`）的運算元之一時，結果總是 `false`。
- `NaN` 與任何其他值（包含另一個 `NaN` 值）比較時，結果都是不相等（透過 [`==`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Equality)、[`!=`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Inequality)、[`===`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_equality) 和 [`!==`](/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_inequality)）。

`NaN` 也是 JavaScript 中的[假值](/zh-TW/docs/Glossary/Falsy)之一。

## 範例

### 測試 NaN

要判斷一個值是否為 `NaN`，最清楚的方法是使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("isNaN()")}}——或者，由於 `NaN` 是唯一與自身不相等的值，你可以執行像 `x !== x` 這樣的自我比較。

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

然而，請注意 `isNaN()` 和 `Number.isNaN()` 之間的差異：前者會在值目前是 `NaN`，或是在被強制轉換為數字後會變成 `NaN` 時回傳 `true`，而後者只會在值目前是 `NaN` 時回傳 `true`：

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

出於同樣的原因，使用 BigInt 值會讓 `isNaN()` 拋出錯誤，而 `Number.isNaN()` 則不會：

```js
isNaN(1n); // TypeError: 不允許從 'BigInt' 轉換為 'number'。
Number.isNaN(1n); // false
```

此外，有些陣列方法找不到 `NaN`，而有些則可以。也就是說，尋找索引的方法（{{jsxref("Array/indexOf", "indexOf()")}}、{{jsxref("Array/lastIndexOf", "lastIndexOf()")}}）找不到 `NaN`，而尋找值的方法（{{jsxref("Array/includes", "includes()")}}）則可以：

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// 接受適當定義的謂詞函式的方法總是可以找到 NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

關於 `NaN` 及其比較的更多資訊，請參見[相等性比較與同一性](/zh-TW/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)。

### 可觀察到的不同 NaN 值

可以產生兩個具有不同二進位表示法但都是 `NaN` 的浮點數，因為在 [IEEE 754 編碼](https://en.wikipedia.org/wiki/NaN#Floating_point)中，任何指數為 `0x7ff` 且尾數非零的浮點數都是 `NaN`。在 JavaScript 中，你可以使用[型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)進行位元級操作。

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer);
// 取得 NaN 的位元組表示
const n = f2b(NaN);
const m = f2b(NaN);
// 改變符號位元，這對 NaN 沒有影響
n += 2 ** 7;
// n += 2**7; // 適用於大端處理器
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8)
console.log(f2b(nan2)); // Uint8Array(8)
// 改變第一個位元，這是尾數的最低有效位，對 NaN 沒有影響
m = 1;
// m = 1; // 適用於大端處理器
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8)
console.log(f2b(nan3)); // Uint8Array(8)
```

### 無聲地避開 NaN

`NaN` 會在數學運算中傳播，所以通常在計算結束時測試一次 `NaN` 就足以偵測錯誤情況。唯一會無聲地避開 `NaN` 的情況是使用指數為 `0` 的[冪運算](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)，它會立即回傳 `1` 而不測試底數的值。

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
