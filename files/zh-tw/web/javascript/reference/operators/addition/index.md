---
title: 加法（+）
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 1b7dbf06b84237832fc9108e1531542fd6a21a5b
---

**加法**（**`+`**）運算子會產生數值運算元的總和或字串串接的結果。

{{InteractiveExample("JavaScript Demo: Addition (+) operator")}}

```js interactive-example
console.log(2 + 2);
// 預期輸出：4

console.log(2 + true);
// 預期輸出：3

console.log("哈囉 " + "大家");
// 預期輸出：「哈囉 大家」

console.log(2001 + "：太空漫遊");
// 預期輸出：「2001：太空漫遊」
```

## 語法

```js-nolint
x + y
```

## 描述

`+` 運算子被重載用於兩種不同的操作：數值加法與字串串接。在運算時，它會先[將兩個運算元強制轉換為原始型別](/zh-TW/docs/Web/JavaScript/Guide/Data_structures#強制轉換原始型別)。接著，會檢查這兩個運算元的型別：

- 如果其中一方是字串，另一個運算元也會[轉換為字串](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String#字串強制轉換)，然後進行串接。
- 如果兩者都是 [BigInt](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt)，則執行 BigInt 加法。如果一方是 BigInt 但另一方不是，則會拋出 {{jsxref("TypeError")}}。
- 否則，兩邊都會[轉換為數字](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)，然後執行數值加法。

字串串接常被認為等同於[模板字面值](/zh-TW/docs/Web/JavaScript/Reference/Template_literals)或 [`String.prototype.concat()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/concat)，但並非如此。加法會將運算式強制轉換為*原始型別*，此過程會優先呼叫 [`valueOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)；而模板字面值與 `concat()` 則會將運算式強制轉換為*字串*，優先呼叫 [`toString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。如果運算式有 [`[Symbol.toPrimitive]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，字串串接時會以「default」作為提示呼叫，而模板字面值則使用「string」。這對於具有不同字串與原始值表示的物件很重要，例如 {{jsxref("Temporal")}}，其物件的 `valueOf()` 方法會拋出全部例外。

```js
const t = Temporal.Now.instant();
"" + t; // 拋出 TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

建議你不要使用 `"" + x` 來進行[字串強制轉換](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String#字串強制轉換)。

## 範例

### 使用數字加法

```js
1 + 2; // 3
```

其他非字串、非 BigInt 的值會被轉換為數字：

```js
true + 1; // 2
false + false; // 0
```

### 使用 BigInt 加法

```js
1n + 2n; // 3n
```

你不能在加法中混用 BigInt 與數字運算元。

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
"1" + 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

若要將 BigInt 與非 BigInt 進行加法，請強制轉換任一運算元：

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
```

### 使用字串加法

如果其中一個運算元是字串，另一個會被轉換為字串並進行串接：

```js
"foo" + "bar"; // 「foobar」
5 + "foo"; // 「5foo」
"foo" + false; // 「foofalse」
"2" + 2; // 「22」
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [減法（`-`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法（`/`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法（`*`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取餘數（`%`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [次方（`**`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增（`++`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減（`--`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元負號（`-`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元正號（`+`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
